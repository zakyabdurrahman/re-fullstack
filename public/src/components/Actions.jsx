export default function Actions() {
    return (
        <>
            <div className="flex justify-end mt-2">
            <div>
                    <p className="inline mr-2">Filter</p>
                    <details className="dropdown mr-4">
                    <summary className="btn m-1">Newest</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Newest</a></li>
                        <li><a>Oldest</a></li>
                    </ul>
                    </details>
                </div>
                <div>
                    <p className="inline mr-2">Sort by</p>
                    <details className="dropdown mr-10">
                    <summary className="btn m-1">Newest</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Newest</a></li>
                        <li><a>Oldest</a></li>
                    </ul>
                    </details>
                </div>
                
            </div>
        
        </>
    )
}