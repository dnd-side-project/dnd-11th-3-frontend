import { useState } from 'react'
import { Select } from './Select'

export default {
  title: 'Component/Select - Source',
}

export function SelectComponent() {
  const [selected, setSelected] = useState<{
    label: string
    id: string
  }>({ label: '', id: '' })
  const [searchValue, setSearchValue] = useState('')
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
        variant="filled"
        size="large"
        onSelect={item => setSelected(item as { label: string; id: string })}
        selected={selected}
        items={[
          { label: 'Option 1', id: '1' },
          { label: 'Option 2', id: '2' },
          { label: 'Option 3', id: '3' },
        ]}
      />
      <Select
        searchable
        search={{
          value: searchValue,
          onChange: setSearchValue,
        }}
        variant="filled"
        size="large"
        onSelect={item => setSelected(item as { label: string; id: string })}
        selected={selected}
        items={[
          { label: 'Option 1', id: '1' },
          { label: 'Option 2', id: '2' },
          { label: 'Option 3', id: '3' },
        ]}
      />
    </div>
  )
}
