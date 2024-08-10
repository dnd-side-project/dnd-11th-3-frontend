import { CSSProperties, useRef, useState } from 'react'
import {
  Select as AriaSelect,
  Button,
  Key,
  ListBox,
  ListBoxItem,
  Popover,
} from 'react-aria-components'
import { INPUT_BG_COLOR, TextInputProps } from '../TextInput/TextInput'
import {
  textInputLabelContainerStyle,
  textInputLabelStyle,
  textInputStyle,
  textInputWrapperStyle,
  textMetaStyle,
} from '../TextInput/textInput.css'
import { selectItemWrapper } from './select.css'

export interface SelectItemType {
  label: string
  id: Key
}

export interface SelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  children?: React.ReactNode
  disabled?: boolean
  items: { label: string; id: Key }[]
  onSelect: ({ id, label }: SelectItemType) => void
  selected: SelectItemType | null
  pressAndClose?: boolean
  placeholder?: string
  inputProps?: Omit<TextInputProps, 'value' | 'onChange'>
  width?: CSSProperties['width']
}

export function Select({
  disabled = false,
  items,
  onSelect,
  selected,
  pressAndClose = true,
  width = '100%',
  inputProps,
  // ...props
}: SelectProps) {
  const [opened, setOpened] = useState(false)
  // const ref = useRef(null)

  return (
    <AriaSelect
      style={{
        width: width,
      }}
    >
      <SelectInput
        inputProps={inputProps}
        disabled={disabled}
        selected={selected}
        onClick={() => setOpened(prev => !prev)}
      />
      <Popover isOpen={disabled ? false : opened}>
        <ListBox>
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

function SelectInput({
  disabled,
  inputProps,
  selected,
  onClick,
}: Pick<SelectProps, 'disabled' | 'inputProps' | 'selected'> & {
  onClick: () => void
}) {
  const ref = useRef(null)

  return (
    <div className={textInputLabelContainerStyle}>
      {inputProps?.label && <div className={textInputLabelStyle}>{inputProps.label}</div>}
      <Button
        aria-labelledby="select"
        ref={ref}
        onPress={onClick}
        style={{
          //TODO: refactor not to use style
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
          padding: 0,
          width: '100%',
          height: 'fit-content',
          border: 'none',
          backgroundColor: disabled //TODO: refactor to use variant
            ? INPUT_BG_COLOR.disabled
            : inputProps?.variant === 'filled'
              ? INPUT_BG_COLOR.filled
              : INPUT_BG_COLOR.default,
          color: 'none',
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
      >
        <div
          className={textInputWrapperStyle({
            color: disabled ? 'disabled' : inputProps?.errorMessage ? 'error' : 'default',
          })}
        >
          <input
            className={textInputStyle({
              color: disabled ? 'disabled' : inputProps?.errorMessage ? 'error' : 'default',
            })}
            readOnly
            value={selected ? selected.label : ''}
            {...inputProps}
            // ref={ref}
          />
          {inputProps?.icon}
        </div>
      </Button>
      {(inputProps?.errorMessage || inputProps?.description) && (
        <div
          className={textMetaStyle({
            color: disabled ? 'disabled' : inputProps.errorMessage ? 'error' : 'default',
          })}
        >
          {!disabled && inputProps.errorMessage ? inputProps.errorMessage : inputProps.description}
        </div>
      )}
    </div>
  )
}

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

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <div className={selectItemWrapper}> {label}</div>
    </ListBoxItem>
  )
}
