import { ClientSearchPage } from 'src/clientPages/search'

function SearchPage({ params }: { params: { input: string } }) {
   return <ClientSearchPage input={params.input} />
}

export default SearchPage
