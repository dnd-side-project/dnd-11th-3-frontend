import { IconBookmark } from '../../icon'
import { Button } from './Button'

export default {
  title: 'Component/Button - Source',
}

export function ButtonComponent() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        <Button size="small" variant="filled">
          Small
        </Button>
        <Button size="medium" variant="filled" icon={<IconBookmark color="white" />}>
          Medium
        </Button>
        <Button size="large" variant="filled">
          Large
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        <Button size="small" variant="outlined">
          Small
        </Button>
        <Button size="medium" variant="outlined">
          Medium
        </Button>
        <Button size="large" variant="outlined" rightIcon={<IconBookmark />}>
          Large
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        <Button size="small" variant="outlined" rightIcon={<IconBookmark />}>
          Small
        </Button>
        <Button size="medium" variant="outlined" disabled rightIcon={<IconBookmark />}>
          Medium
        </Button>
        <Button size="large" variant="outlined" disabled>
          Large
        </Button>
      </div>
    </div>
  )
}
