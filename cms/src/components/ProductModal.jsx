import axios from "axios";
import getBearerToken from "../../utils/getBearerToken";
import baseUrl from "../../utils/constants";
import { useEffect } from "react";

export default function ProductModal({cats, products}) {

    

    
    //send the data
    //display toast when succeed

  
    
    return (
        <>
            <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-center">Edit Product</h3>
                <p className="py-4 text-center">Press ESC key to close</p>
                
               
                
                
                    
                    <form method="dialog" onSubmit={handleSubmit}>
                        {/* if there is a button in form, it will close the modal */}
                        <div className="flex flex-col items-center">
                            <input type="text" name="name" id="formName" className="input input-bordered w-full max-w-xs" placeholder="Product Name"/>
                            <input type="text" id="formDesc" className="input input-bordered w-full max-w-xs mt-4" placeholder="Product Description"/>
                            <input type="text" id="formPrice" className="input input-bordered w-full max-w-xs mt-4" placeholder="Product Price"/>
                            <input type="text" id="formUrl" className="input input-bordered w-full max-w-xs mt-4" placeholder="Product Image URL"/>
                            <input type="text" id="formStock" className="input input-bordered w-full max-w-xs mt-4" placeholder="Product Stock"/>
                            <p className="mt-2">Category</p>
                            <select id="formCat" className="select w-full max-w-xs mt-4 input-bordered">
                            {cats.map((item) => {
                                return (
                                        <option value={item.id}>{item.name}</option>
                                    )
                                })}
                            </select>
                            <button className="btn mt-4">Submit</button>
                        </div>
                       
                    </form>
                
            </div>
            </dialog>
        </>
    )
}