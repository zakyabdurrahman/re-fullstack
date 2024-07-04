import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import axios from "axios";
import baseUrl from "../../utils/constants";
import Navbar from "../components/Navbar";

export default function ProductAddPage() {

    const [cats, setCats] = useState([]);

    async function getCategories() {
        
        const response = await axios.get(`${baseUrl}/pub/branded-things/categories`);
        
        setCats(response.data.data);
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