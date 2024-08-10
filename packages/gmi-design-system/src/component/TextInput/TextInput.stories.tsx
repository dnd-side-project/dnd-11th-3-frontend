import { TextInput } from './TextInput'

export default {
  title: 'Component/TextInput - Source',
}

export function TextInputComponent() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        width: '300px',
      }}
    >
      <TextInput label="Label" description="Description" placeholder="Placeholder" />
      <TextInput label="Without description" placeholder="Placeholder" />
      <TextInput
        label="Error"
        description="Description"
        placeholder="Placeholder"
        errorMessage="Error message"
      />
      <TextInput label="Disabled" description="Description" placeholder="Placeholder" disabled />
    </div>
  )
}
