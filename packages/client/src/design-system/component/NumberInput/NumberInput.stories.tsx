import { IconBookmark } from '../../icon'
import { NumberInput } from './NumberInput'

export default {
   title: 'Component/NumberInput - Source',
}

export function NumberInputComponent() {
   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
            width: '300px',
         }}
      >
         <NumberInput
            value={1000}
            onChange={(e) => console.log(e.target.value)}
            onUpClick={() => console.log('Up')}
            onDownClick={() => console.log('Up')}
            variant="gradient"
            subTitle="크레딧"
         />
         <NumberInput
            value={1000}
            onChange={(e) => console.log(e.target.value)}
            onUpClick={() => console.log('Up')}
            onDownClick={() => console.log('Up')}
            variant="gradient"
            subTitle="크레딧"
         />
         <NumberInput
            label="Without description"
            placeholder="Placeholder"
            value={1000}
            onChange={(e) => console.log(e.target.value)}
            onUpClick={() => console.log('Up')}
            onDownClick={() => console.log('Up')}
         />
         <NumberInput
            value={1000}
            onChange={(e) => console.log(e.target.value)}
            onUpClick={() => console.log('Up')}
            onDownClick={() => console.log('Up')}
            label="With Icon"
            placeholder="Placeholder"
            icon={<IconBookmark />}
         />
         <NumberInput
            value={1000}
            onChange={(e) => console.log(e.target.value)}
            onUpClick={() => console.log('Up')}
            onDownClick={() => console.log('Up')}
            label="Error"
            description="Description"
            placeholder="Placeholder"
            errorMessage="Error message"
         />
         <NumberInput
            value={1000}
            onChange={(e) => console.log(e.target.value)}
            onUpClick={() => console.log('Up')}
            onDownClick={() => console.log('Up')}
            label="Disabled"
            description="Description"
            placeholder="Placeholder"
            disabled
         />
      </div>
   )
}
