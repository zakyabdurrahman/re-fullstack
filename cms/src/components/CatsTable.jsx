export default function CatsTable({cats}) {
    return (
        <>
            
            <div className="w-full mt-4 px-6">
                
                <h2 className="mt-6 font-bold text-2xl">Categories</h2>
                <table className="table mt-2">
                    <colgroup>
                        <col span="1" className="w-1/6"/>
                        <col span="1" className="w-5/6"/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th>
                                No.
                            </th>
                            <th>
                                Name
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {cats.map((cat, i) => {
                            return (
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{cat.name}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}