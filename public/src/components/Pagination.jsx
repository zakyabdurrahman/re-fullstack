export default function Pagination({currPage, totalPage, setParams, params}) {
    function changePage(e) {
        let newObj = {...params};
        newObj.page = e.target.innerText;
        
        setParams(newObj);
    }

    let pageButtons = [];
    for (let i = 1; i <= totalPage; i++) {
        let el = <button key={i} className={currPage == i ? "join-item btn btn-active" : "join-item btn"}
            onClick={changePage}
        >{i}</button>
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