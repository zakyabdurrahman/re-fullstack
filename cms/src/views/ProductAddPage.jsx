import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import axios from "axios";
import baseUrl from "../../utils/constants";
import Navbar from "../components/Navbar";
import getBearerToken from "../../utils/getBearerToken";

export default function ProductAddPage() {

    const [cats, setCats] = useState([]);

    async function getCategories() {
        
        const response = await axios.get(`${baseUrl}/categories`, {
            headers: {
                Authorization: getBearerToken()
            }
        });
        console.log(response, 'OBJ CATS');
        setCats(response.data.categories);
    }
    
    useEffect(() => {
        getCategories()
    }, [])

    return (
        <>
            <Navbar/>
            <ProductForm cats={cats}/>
        </>
    )
}