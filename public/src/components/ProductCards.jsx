import Product from './Product'
export default function ProductCards() {
    return (
        <>
            
            <div className="grid grid-cols-3 gap-y-4 mx-4 justify-items-center m-auto">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </>
        

    )
}