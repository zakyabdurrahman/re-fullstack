export default function Product() {
    return (
        <>
            <div className="card w-[400px] shadow-xl h-[750px] bg-neutral">
                <figure>
                    <img src="3060.webp" className="w-full h-60" alt="" />
                </figure>
                <div className="mx-4 mt-4">
                    <h2 className="card-title">RTX 3060</h2>
                    <p className="mt-2">Price</p>
                    <p className="font-bold">Rp 3.000.000</p>
                    <p className="mt-2">Stock</p>
                    <p className="font-bold">10</p>
                    <p className="mt-2 text-justify">The RTX 3060 is a powerful graphics card from NVIDIA's GeForce RTX 30 series, featuring the Ampere architecture for exceptional gaming and creative performance. With 12 GB of GDDR6 memory, it delivers smooth gameplay at 1080p and 1440p resolutions, supports real-time ray tracing, AI-powered features, and NVIDIA technologies like DLSS and Reflex for an enhanced gaming experience. Ideal for both gamers and content creators seeking high-performance graphics capabilities in a compact package.</p>
                </div>
                <div className="w-full mt-2 flex flex-row-reverse">
                    <button className="btn btn-primary mx-4">Detail</button>
                </div>
            </div>
        </>
    )
}