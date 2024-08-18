import { useState } from 'react'
import { Select } from './Select'
import { IconSearch } from '../../icon'

export default {
   title: 'Component/Select - Source',
}

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
            variant="default"
            onSelect={(item) =>
               setSelected(item as { label: string; id: string })
            }
            selected={selected}
            items={[
               { label: 'Option 1', id: '1' },
               { label: 'Option 2', id: '2' },
               { label: 'Option 3', id: '3' },
            ]}
         />
         <Select
            variant="default"
            disabled
            onSelect={(item) =>
               setSelected(item as { label: string; id: string })
            }
            selected={null}
            items={[{ label: 'Option 1', id: '1' }]}
         />

         <Select
            variant="default"
            inputProps={{
               icon: <IconSearch />,
            }}
            onSelect={(item) =>
               setSelectedWithIcon(item as { label: string; id: string })
            }
            selected={selectedWithIcon}
            items={[{ label: 'Option 1', id: '1' }]}
         />
         <Select
            variant="filled"
            inputProps={{
               icon: <IconSearch />,
            }}
            onSelect={(item) =>
               setSelectedWithIcon(item as { label: string; id: string })
            }
            selected={selectedWithIcon}
            items={[{ label: 'Option 1', id: '1' }]}
         />
      </div>
   )
}
