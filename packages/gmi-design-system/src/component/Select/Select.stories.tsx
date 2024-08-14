import type { Meta } from '@storybook/react'

import { useState } from 'react'
import { Select } from './Select'
import { IconSearch } from '../../icon'

const meta = {
  title: 'Component/Select - Source',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  args: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta

export function SelectComponent() {
  const [selected, setSelected] = useState<{
    label: string
    id: string
  }>({ label: '', id: '' })
  const [selectedWithIcon, setSelectedWithIcon] = useState<{
    label: string
    id: string
  }>({ label: '', id: '' })

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        width: '100%',
      }}
    >
      <Select
        onSelect={item => setSelected(item as { label: string; id: string })}
        selected={selected}
        items={[
          { label: 'Option 1', id: '1' },
          { label: 'Option 2', id: '2' },
          { label: 'Option 3', id: '3' },
        ]}
      />
      <Select
        disabled
        onSelect={item => setSelected(item as { label: string; id: string })}
        selected={null}
        items={[{ label: 'Option 1', id: '1' }]}
      />

      <Select
        inputProps={{
          icon: <IconSearch />,
        }}
        onSelect={item => setSelectedWithIcon(item as { label: string; id: string })}
        selected={selectedWithIcon}
        items={[{ label: 'Option 1', id: '1' }]}
      />
      <Select
        inputProps={{
          icon: <IconSearch />,
          variant: 'filled',
        }}
        onSelect={item => setSelectedWithIcon(item as { label: string; id: string })}
        selected={selectedWithIcon}
        items={[{ label: 'Option 1', id: '1' }]}
      />
    </div>
  )
}
