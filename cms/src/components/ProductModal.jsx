export default function ProductModal({cats}) {

    //get the data 
    function getFormData() {
        const name = document.getElementById('formName').value;
        const description = document.getElementById('formDesc').value;
        const price = document.getElementById('formPrice').value;
        const imgUrl = document.getElementById('formUrl').value;
        const stock = document.getElementById('formStock').value;
        const categoryId = document.getElementById('formCat').value;
        
        const dataObj = {
            name,
            description,
            price,
            imgUrl,
            stock,
            categoryId
        }

        //clear the data
        document.getElementById('formName').value = "";
        document.getElementById('formDesc').value = "";
        document.getElementById('formPrice').value = "";
        document.getElementById('formUrl').value = "";
        document.getElementById('formStock').value = "";
        document.getElementById('formCat').value = "";

        return dataObj;

        
        
    }

    //send the data through axios
    async function handleSubmit() {
        console.log(getFormData());
    }
    //send the data
    //display toast when succeed

    return (
        <>
            <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-center">Edit Product</h3>
                <p className="py-4 text-center">Press ESC key to close</p>
                <div className="flex flex-col items-center">
                    <input type="text" name="name" id="formName" className="input input-bordered w-full max-w-xs" placeholder="Product Name"/>
                    <input type="text" id="formDesc" className="input input-bordered w-full max-w-xs mt-4" placeholder="Product Description"/>
                    <input type="text" id="formPrice" className="input input-bordered w-full max-w-xs mt-4" placeholder="Product Price"/>
                    <input type="text" id="formUrl" className="input input-bordered w-full max-w-xs mt-4" placeholder="Product Image URL"/>
                    <input type="text" id="formStock" className="input input-bordered w-full max-w-xs mt-4" placeholder="Product Stock"/>
                    <select id="formCat" className="select w-full max-w-xs mt-4 input-bordered">
                        {cats.map((item) => {
                            return (
                                <option value={item.id}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
               
                <div className="modal-action">
                
                    
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn" onClick={handleSubmit} >Submit</button>
                    </form>
                </div>
            </div>
            </dialog>
        </>
    )
}