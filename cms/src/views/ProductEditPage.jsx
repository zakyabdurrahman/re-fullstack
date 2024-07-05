import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import axios from "axios";
import baseUrl from "../../utils/constants";
import { useParams } from "react-router-dom";
import getBearerToken from "../../utils/getBearerToken";
import Navbar from "../components/Navbar";

export default function ProductEditPage() {
    
    const {id} = useParams();
    
    const [cats, setCats] = useState([]);
    const [product, setProduct] = useState({});

    async function getCategories() {
        
        const response = await axios.get(`${baseUrl}/pub/branded-things/categories`, {
            headers: {
                Authorization: getBearerToken()
            }
        });
        
        console.log(response.data)
        setCats(response.data.data);
    }

    async function getProduct() {
        try {
            const response = await axios.get(`${baseUrl}/branded-things/products/${id}`, {
                headers: {
                    Authorization: getBearerToken()
                }
            });
            setProduct(response.data.data);

        } catch (error) {
            console.log(error.message);
        }
        

        
    }

    useEffect(() => {
        getProduct();
        getCategories();
    }, [])

    return (
        <>
            <Navbar/>
            <ProductForm cats={cats} product={product}/>
        </>
        
    )
}