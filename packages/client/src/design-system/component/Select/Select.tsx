'use client'

import {
   cloneElement,
   CSSProperties,
   ReactElement,
   useRef,
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

import { TextInputProps } from '../TextInput/TextInput'
import {
   selectItemWrapper,
   INPUT_BG_COLOR,
   textInputLabelContainerStyle,
   textInputLabelStyle,
   textInputStyle,
   textInputWrapperStyle,
   textMetaStyle,
   INPUT_COLOR,
   iconWrapperStyle,
} from './select.css'

export interface SelectItemType {
   label: string
   id: Key
}

export interface SelectProps
   extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
   disabled?: boolean
   items: { label: string; id: Key }[]
   onSelect: ({ id, label }: SelectItemType) => void
   selected: SelectItemType | null
   pressAndClose?: boolean
   placeholder?: string
   inputProps?: Omit<TextInputProps, 'value' | 'onChange' | 'variant'>
   width?: CSSProperties['width']
   variant: 'default' | 'textOnly' | 'filled'
   listBoxWidth?: CSSProperties['width']
}

export function Select({
   disabled = false,
   items,
   onSelect,
   selected,
   pressAndClose = true,
   width = 350,
   inputProps,
   variant = 'default',
}: SelectProps) {
   const [opened, setOpened] = useState(false)

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
            onClick={() => setOpened((prev) => !prev)}
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
               {items.map(({ id, label }) => (
                  <CustomListBoxItem
                     key={id}
                     id={id}
                     label={label}
                     onClick={() => {
                        onSelect({
                           id,
                           label,
                        })
                        if (pressAndClose) {
                           setOpened(false)
                        }
                     }}
                  />
               ))}
            </ListBox>
         </Popover>
      </AriaSelect>
   )
}

/**
 *
 * @desc Input for single select
 */
function SelectInput({
   disabled,
   inputProps,
   selected,
   onClick,
   variant,
}: Pick<SelectProps, 'disabled' | 'inputProps' | 'selected' | 'variant'> & {
   onClick: () => void
   icon?: ReactElement
}) {
   const ref = useRef(null)

   return (
      <div className={textInputLabelContainerStyle}>
         {inputProps?.label && (
            <div className={textInputLabelStyle}>{inputProps.label}</div>
         )}
         <Button
            aria-labelledby="select"
            ref={ref}
            onPress={onClick}
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
               cursor: disabled ? 'not-allowed' : 'pointer',
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
               <input
                  className={textInputStyle({
                     color: disabled
                        ? 'disabled'
                        : inputProps?.errorMessage
                          ? 'error'
                          : variant,
                  })}
                  readOnly
                  value={selected ? selected.label : ''}
                  {...inputProps}
               />

               <div className={iconWrapperStyle}>
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

/**
 *
 * @desc Box Item for single select
 */
function CustomListBoxItem({
   id,
   label,
   onClick,
}: SelectItemType & {
   onClick: () => void
}) {
   return (
      <ListBoxItem
         key={id}
         id={id}
         onAction={onClick}
         style={{
            width: '100%',
            height: '37px',
            cursor: 'pointer',

            fontSize: '12px', // TODO: refactor with font
            fontWeight: '600',
         }}
      >
         <div className={selectItemWrapper}> {label}</div>
      </ListBoxItem>
   )
}
