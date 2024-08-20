import React, {
   useRef,
   cloneElement,
   CSSProperties,
   ReactElement,
   useState,
} from 'react'
import {
   Select as AriaSelect,
   Button,
   Key,
   ListBox,
   ListBoxItem,
   Popover,
} from 'react-aria-components'
import { IconClose } from '@gds/icon'
import { color } from '@gds/token'
import { TextInputProps } from '../TextInput/TextInput'
import {
   selectItemWrapper,
   INPUT_BG_COLOR,
   textInputLabelContainerStyle,
   textInputLabelStyle,
   textInputWrapperStyle,
   textMetaStyle,
   INPUT_COLOR,
   iconWrapperStyle,
   placeholderStyle,
} from './index.css'
import { Badge } from '../Badge/Badge'

export interface SelectItemType {
   label: string
   id: Key
}

export interface SelectProps
   extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
   disabled?: boolean
   items: SelectItemType[]
   onSelect: (selectedItems: SelectItemType[]) => void
   selected: SelectItemType[]
   pressAndClose?: boolean
   placeholder: string
   inputProps?: Omit<TextInputProps, 'value' | 'onChange' | 'variant'>
   width?: CSSProperties['width']
   variant: 'default' | 'textOnly' | 'filled'
   listBoxWidth?: CSSProperties['width']
}

export function SelectFilter({
   disabled = false,
   items,
   onSelect,
   selected,
   pressAndClose = true,
   width = 350,
   inputProps,
   variant = 'default',
   placeholder,
}: SelectProps) {
   const [opened, setOpened] = useState(false)

   const handleItemClick = (item: SelectItemType) => {
      const isSelected = selected.some(
         (selectedItem) => selectedItem.id === item.id,
      )
      const newSelected = isSelected
         ? selected.filter((selectedItem) => selectedItem.id !== item.id)
         : [...selected, item]

      onSelect(newSelected)
      if (pressAndClose) {
         setOpened(false)
      }
   }

   return (
      <AriaSelect
         style={{
            width,
         }}
      >
         <SelectInput
            variant={variant}
            inputProps={inputProps}
            disabled={disabled}
            selected={selected}
            onRemove={(item) => {
               const updatedSelected = selected.filter((i) => i.id !== item.id)
               onSelect(updatedSelected)
            }}
            onClick={() => setOpened((prev) => !prev)}
            placeholder={placeholder}
         />
         <Popover
            isOpen={disabled ? false : opened}
            style={{
               width,
            }}
         >
            <ListBox
               style={{
                  width,
                  minWidth: '140px',
                  height: 'fit-content',
                  padding: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '8px',
                  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                  backgroundColor: 'white',
                  overflow: 'hidden',
               }}
            >
               {items.map((item) => (
                  <CustomListBoxItem
                     key={item.id}
                     item={item}
                     isSelected={selected.some(
                        (selectedItem) => selectedItem.id === item.id,
                     )}
                     onClick={() => handleItemClick(item)}
                  />
               ))}
            </ListBox>
         </Popover>
      </AriaSelect>
   )
}

/**
 * @desc Input for multiple select
 */
function SelectInput({
   disabled,
   inputProps,
   selected,
   onClick,
   variant,
   onRemove,
   placeholder,
}: Pick<SelectProps, 'disabled' | 'inputProps' | 'selected' | 'variant'> & {
   onRemove: (item: SelectItemType) => void // New prop for removing items
   placeholder: string
   onClick: () => void
   icon?: ReactElement
}) {
   const ref = useRef(null)
   const handleBadgeClick = (
      item: SelectItemType,
      e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,
   ) => {
      e.stopPropagation()
      onRemove(item)
   }

   return (
      <div className={textInputLabelContainerStyle}>
         {inputProps?.label && (
            <div className={textInputLabelStyle}>{inputProps.label}</div>
         )}
         <Button
            aria-labelledby="select"
            ref={ref}
            style={{
               // TODO: refactor not to use style
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               margin: 0,
               padding: 0,
               width: '100%',
               height: 'fit-content',
               border: 'none',
               backgroundColor: disabled // TODO: refactor to use variant
                  ? INPUT_BG_COLOR.disabled
                  : variant === 'filled'
                    ? INPUT_BG_COLOR.filled
                    : INPUT_BG_COLOR.default,
               color: 'none',
            }}
         >
            <div
               className={textInputWrapperStyle({
                  color: disabled
                     ? 'disabled'
                     : inputProps?.errorMessage
                       ? 'error'
                       : variant,
               })}
            >
               <div
                  style={{
                     width: '306px',
                     display: 'flex',
                     overflowX: 'auto',
                     whiteSpace: 'nowrap',
                  }}
               >
                  {selected.length === 0 ? (
                     <div className={placeholderStyle}>{placeholder}</div>
                  ) : (
                     selected.map((item) => (
                        <div
                           key={item.id}
                           onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                 handleBadgeClick(item, e)
                              }
                           }}
                           role="button"
                           tabIndex={0}
                           onClick={(e) => handleBadgeClick(item, e)}
                           style={{
                              background: 'none',
                              border: 'none',
                              padding: 0,
                              marginRight: '8px',
                              display: 'inline-block',
                              cursor: 'pointer',
                           }}
                        >
                           <Badge variant="light" size="small">
                              {item.label}
                              <IconClose color={color['primary-dark']} />
                           </Badge>
                        </div>
                     ))
                  )}
               </div>
               <div
                  className={iconWrapperStyle}
                  onClick={onClick}
                  onKeyDown={(e) => {
                     if (e.key === 'Enter' || e.key === ' ') {
                        onClick()
                     }
                  }}
                  role="button"
                  tabIndex={0}
                  style={{
                     cursor: 'pointer',
                     border: `1px solid ${color['gray-800']}`,
                     backgroundColor: color['gray-000'],
                     padding: '4px 5px',
                     borderRadius: '8px',
                  }}
               >
                  {!!inputProps?.icon &&
                     // TODO: refactor not to use cloneElement
                     cloneElement(inputProps?.icon, {
                        color: disabled
                           ? INPUT_COLOR.disabled
                           : inputProps?.errorMessage
                             ? INPUT_COLOR.error
                             : INPUT_COLOR.default,
                     })}
               </div>
            </div>
         </Button>
         {(inputProps?.errorMessage || inputProps?.description) && (
            <div
               className={textMetaStyle({
                  color: disabled
                     ? 'disabled'
                     : inputProps.errorMessage
                       ? 'error'
                       : 'default',
               })}
            >
               {!disabled && inputProps.errorMessage
                  ? inputProps.errorMessage
                  : inputProps.description}
            </div>
         )}
      </div>
   )
}

function CustomListBoxItem({
   item,
   isSelected,
   onClick,
}: {
   item: SelectItemType
   isSelected: boolean
   onClick: () => void
}) {
   return (
      <ListBoxItem
         key={item.id}
         id={item.id}
         onAction={onClick}
         style={{
            width: '100%',
            height: '37px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: '600',
         }}
      >
         <div className={selectItemWrapper({ backgroundColor: isSelected })}>
            {item.label}
         </div>
      </ListBoxItem>
   )
}

export default SelectFilter
