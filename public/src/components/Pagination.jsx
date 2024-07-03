export default function Pagination({currPage, totalPage}) {
    let pageButtons = [];
    for (let i = 1; i <= totalPage; i++) {
        let el = <button key={i} className="join-item btn">{i}</button>
        pageButtons.push(el);
    }

    return (
        <>
            <div className="flex justify-center my-4">
            <div className="join">
                
                {pageButtons}
            </div>
            </div>
        </>
        
    )
}