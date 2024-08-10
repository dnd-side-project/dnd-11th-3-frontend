import { useState } from 'react'
import {
  Select as AriaSelect,
  Button,
  Key,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
} from 'react-aria-components'

export interface SelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  variant: 'filled' | 'outlined'
  size: 'small' | 'medium' | 'large'
  children?: React.ReactNode
  disabled?: boolean
  items: { label: string; id: Key }[]
  onSelect: ({ id, label }: { id: Key; label: string }) => void
  selected: { label: string; id: Key }
  pressAndClose?: boolean
  placeholder?: string
}

export function Select({
  disabled,
  items,
  onSelect,
  selected,
  pressAndClose = true,
  placeholder = '',

  // ...props
}: SelectProps) {
  const [opened, setOpened] = useState(false)

  return (
    // <div className={selectStyle({ size, variant: disabled ? 'disabled' : variant })}>
    <AriaSelect>
      <Label>Favorite Animal</Label>

      <Button onPress={() => setOpened(prev => !prev)}>
        <input
          type="text"
          value={selected.label}
          readOnly
          placeholder={placeholder}
          disabled={disabled}
        />
        <span aria-hidden="true">▼</span>
      </Button>
      <Popover isOpen={opened}>
        <ListBox>
          {items.map(({ id, label }) => (
            <ListBoxItem
              key={id}
              id={id}
              onAction={() => {
                onSelect({
                  id,
                  label,
                })
                if (pressAndClose) {
                  setOpened(false)
                }
              }}
            >
              {label}
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </AriaSelect>
  )
}
