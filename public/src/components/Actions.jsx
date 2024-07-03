export default function Actions() {
    return (
        <>
            <div className="flex justify-end mt-2">
                <div>
                    <p className="inline mr-2">Category</p>
                    <select className="select select-bordered max-w-xs mr-4">
                        <option disabled selected>Select category</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
                <div>
                    <p className="inline mr-2">Sort by</p>
                    <select className="select select-bordered max-w-xs mr-10">
                        <option disabled selected>....</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>


                </div>
                
            </div>
        
        </>
    )
}