import { Select } from '@gds/component'
import { IconArrowDown } from '@gds/icon'

interface CategoryItem {
   label: string
   id: string
}

interface Props {
   selectedCategory: CategoryItem
   onSelectCategory: ({ label, id }: CategoryItem) => void
}

function CreditCategoryFilter({ selectedCategory, onSelectCategory }: Props) {
   return (
      <Select
         inputProps={{
            icon: <IconArrowDown size={16} />,
         }}
         width={150}
         variant="textOnly"
         items={[
            {
               label: '전체',
               id: 'all',
            },
            { label: '받은 크레딧', id: 'receive credit' },
            { label: '보낸 크레딧', id: 'send credit' },
         ]}
         selected={selectedCategory}
         onSelect={({ id, label }) =>
            onSelectCategory({ id: String(id), label })
         }
      />
   )
}

export default CreditCategoryFilter
