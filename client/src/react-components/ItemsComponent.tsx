import CardComp from './CardComp'

interface ItemsComponentProps {
    backgroundHighlight: boolean,
    title: string,
    description: string,
    alreadyStarted: boolean
}


const ItemsComponent = ({backgroundHighlight, title, description}: ItemsComponentProps) => {
    return (
    <div className={`${backgroundHighlight ? "bg-primary" : "bg-neutral"} max-w-sm mx-auto md:max-w-2xl lg:max-w-5xl xl:max-w-7xl p-3 border rounded-lg mb-3`}>
                <div className="pl-3">
                    <h1 className={`text-3xl text-center md:text-start font-bold mt-4 ${backgroundHighlight ? "text-white" : "text-neutral"}`}> {title} </h1>
                    <p className="text-center md:text-start text-[gray] font-light"> {description} </p>
                </div>
                <div className="grid gap-4 justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto p-3 max-w-7xl w-full">
                    <CardComp />
                    <CardComp />
                    <CardComp />
                    <CardComp />
                </div>
            </div>
  )
}

export default ItemsComponent