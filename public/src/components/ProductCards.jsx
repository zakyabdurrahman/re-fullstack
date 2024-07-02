import Product from './Product'
export default function ProductCards() {
    return (
        <>
            <p className="py-6 text-center">Enjoy out vast collection of cars and graphic cards</p>
            <div className="grid grid-cols-3 gap-y-4 mx-4 justify-items-center m-auto">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </>
        

    )
}