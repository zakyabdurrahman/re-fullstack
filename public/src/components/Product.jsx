import TextTruncate from "react-text-truncate";


export default function Product({title, imgUrl, desc, price, id}) {
    return (
        <>
            <div className="card w-[400px] shadow-xl h-[500px] bg-neutral">
                <figure>
                    <img src={imgUrl} className="w-full h-60" alt="" />
                </figure>
                <div className="mx-4 mt-4">
                    <h2 className="card-title">{title}</h2>
                    <p className="mt-2">Price</p>
                    <p className="font-bold">{price}</p>
                    <p className="mt-2 text-justify">{desc}</p>
                   
                </div>
                <div className="w-full mt-2 flex flex-row-reverse">
                    <a href={`/${id}`}>
                        <button className="btn btn-primary mx-4">Detail</button>
                    </a>
                    
                </div>
            </div>
        </>
    )
}