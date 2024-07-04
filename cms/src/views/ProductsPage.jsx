
import { toast } from "react-toastify";
import AdminSidebar from "../components/AdminSidebar";
import Navbar from "../components/Navbar";
import ProductTable from "../components/ProductTable";
import axios from "axios";
import baseUrl from "../../utils/constants";
import { useEffect, useState } from "react";
import getBearerToken from "../../utils/getBearerToken";

export default function ProductsPage() {

    
    const [data, setData] = useState([]);
    
    

    async function fetchProducts() {
        try {
            const response = await axios.get(`${baseUrl}/branded-things/products`, {
                headers: {
                    Authorization: getBearerToken()
                }
            })
            setData(response.data.data);
            console.log(response);
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <Navbar></Navbar>
            <div className="flex h-full">
                <AdminSidebar></AdminSidebar>
                
                <ProductTable data={data}/>
                
            </div>
        
        </>
        
    )
}