import axios from "axios";
import Navbar from "../components/Navbar";
import { baseUrl } from "../utils/constants";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetailPage() {
    const {id} = useParams();

    const [data, setData] = useState({});
    

    async function fetchProductDetail() {
        try {
            
            const response = await axios.get(`${baseUrl}/pub/products/${id}`);
            console.log(response, 'OBJ DETAIL');
           
            setData(response.data.product);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProductDetail()
    }, [])

    return (
        <>
            <Navbar></Navbar>
            <div className="mx-6 mb-6">
                <h2 className="mt-6 text-3xl font-bold">{data.name}</h2>
                <img className="mt-4 w-96" src={data.imgUrl}/>
                <p className="font-bold text-lg mt-4" >Price</p>
                <p className="mt-`">{data.price}</p>
                <p className="mt-4 font-bold text-lg">Description</p>
                <p className="mt-1">{data.description}</p>
                <p className="mt-4 font-bold text-lg">Stock</p>
                <p className="mt-1">{data.stock}</p>
                
                
            </div>
            
        </>
    )
}