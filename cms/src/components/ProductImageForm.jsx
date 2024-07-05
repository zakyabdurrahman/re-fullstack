import axios from "axios";
import { toast } from "react-toastify";
import baseUrl from "../../utils/constants";
import getBearerToken from "../../utils/getBearerToken";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ProductImageForm({product}) {

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const file = e.target[0].files[0];
        const form = new FormData();

        form.append('image', file);

        try {
            setLoading(true)
            const response = await axios.patch(`${baseUrl}/products/${product.id}`, form, {
                headers: {
                    Authorization: getBearerToken()
                }
            })
            toast('Success Upload Image')
            navigate('/');
            console.log(response, "SEND STATUS");

        } catch (error) {
            toast.error(error.message);
            setLoading(false);
        } finally {
            setLoading(false);
        }
        console.log(file);
    } 

    return (
        <>
            <h1 className="text-2xl text-center font-bold my-6">Upload Image for {product.name}</h1>
            <form encType="multipart/form-data" onSubmit={handleSubmit}>

                <div className="flex flex-col items-center">

                    <p>Upload your image here</p>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs mt-6" />
                    <button className="btn btn-primary mt-6">Submit</button>
                    {loading && <span className="loading loading-spinner loading-lg mt-6"></span> }
                    
                </div>
            </form>
        </>
    )
}