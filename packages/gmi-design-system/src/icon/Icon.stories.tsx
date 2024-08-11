import * as Icons from './default'

export default {
  title: 'Component/Icons',
}

export function AllIcons() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        padding: '1rem',
      }}
    >
      {Object.entries(Icons).map(([name, IconComponent]) => (
        <div
          key={name}
          style={{
            width: '250px',
            textAlign: 'center',
            border: '1px solid gray',
            borderRadius: '8px',
            padding: '1rem',
          }}
        >
          <IconComponent />
          <div>{name}</div>
        </div>
      ))}
    </div>
  )
}
