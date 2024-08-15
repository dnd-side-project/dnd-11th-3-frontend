import { TextArea } from './TextArea'

export default {
  title: 'Component/TextArea - Source',
}

export function TextAreaComponent() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        width: '600px',
      }}
    >
      <TextArea label="Label" description="Description" placeholder="Placeholder" height={300} />
      <TextArea label="Without description" placeholder="Placeholder" />
      <TextArea
        label="Error"
        description="Description"
        placeholder="Placeholder"
        errorMessage="Error message"
      />
      <TextArea label="Disabled" description="Description" placeholder="Placeholder" disabled />
    </div>
  )
}
