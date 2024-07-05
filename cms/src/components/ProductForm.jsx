import axios from "axios";
import { toast } from "react-toastify"
import baseUrl from "../../utils/constants";
import getBearerToken from "../../utils/getBearerToken";
import { useNavigate } from "react-router-dom";

export default function ProductForm({cats, product}) {

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            
            const name = e.target[0].value;
            const description = e.target[1].value;
            const price = Number(e.target[2].value); 
            const imgUrl = e.target[3].value;
            const stock = Number(e.target[4].value) ;
            const categoryId = e.target[5].value;

            const payload = {
                name,
                description,
                price,
                imgUrl,
                stock,
                categoryId
            }
            if (product) {
                await axios.put(`${baseUrl}/products/${product.id}`, payload, {
                    headers: {
                        Authorization: getBearerToken()
                    }
                })
                toast('Success Edit Product');
            } else {
                await axios.post(`${baseUrl}/products`, payload, {
                    headers: {
                        Authorization: getBearerToken()
                    }
                })
                toast('Success Add Product');
            }
            
            navigate('/')
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }


    return (

        <>
            <h1 className="text-2xl text-center font-bold my-6">{product ? "Edit Product" : "Add Product"}</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-center">
                    
                        <input type="text" name="name" id="formName" className="input input-bordered w-full max-w-xs" placeholder="Product Name" defaultValue={product ? product.name : ""}/>
                        <input type="text" id="formDesc" className="input input-bordered w-full max-w-xs mt-4" placeholder="Product Description" defaultValue={product ?product.description : ""}/>
                        <input type="text" id="formPrice" className="input input-bordered w-full max-w-xs mt-4" placeholder="Product Price" defaultValue={product ? product.price : ""}/>
                        <input type="text" id="formUrl" className="input input-bordered w-full max-w-xs mt-4" placeholder="Product Image URL" defaultValue={product ? product.imgUrl : ""}/>
                        <input type="text" id="formStock" className="input input-bordered w-full max-w-xs mt-4" placeholder="Product Stock" defaultValue={product ? product.stock : ""}/>
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
        </>
        
    )
}