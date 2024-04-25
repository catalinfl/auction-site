import CardComp from './CardComp'

const SearchCardComponents = () => {
  return (
    <div className="flex items-center justify-center mt-3">
  <div className="max-w-5xl md:ml-12 justify-items-center xl:justify-items-start sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-y-5 grid justify-center">
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
  </div>        
</div>
)
}

export default SearchCardComponents