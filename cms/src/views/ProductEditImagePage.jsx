import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductImageForm from "../components/ProductImageForm";
import { toast } from "react-toastify";
import axios from "axios";
import baseUrl from "../../utils/constants";
import { useEffect, useState } from "react";
import getBearerToken from "../../utils/getBearerToken";

export default function ProductEditImagePage() {


    const [product, setProduct] = useState({});
    const {id} = useParams();

    async function fetchProduct() {
        try {
            const response = await axios.get(`${baseUrl}/products/${id}`, {
                headers: {
                    Authorization: getBearerToken()
                }
            });
            setProduct(response.data.product);
            console.log(response.data, 'OBJ PRODUCT DETAIL');
        } catch (error) {
            toast(error.message);
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [])

    return (
        <>
            <Navbar/>
            <ProductImageForm product={product}/>
        </>
    )
}