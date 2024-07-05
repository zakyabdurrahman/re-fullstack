
import { toast } from "react-toastify";
import AdminSidebar from "../components/AdminSidebar";
import Navbar from "../components/Navbar";
import ProductTable from "../components/ProductTable";
import axios from "axios";
import baseUrl from "../../utils/constants";
import { useEffect, useState } from "react";
import getBearerToken from "../../utils/getBearerToken";
import { useNavigate } from "react-router-dom";

export default function ProductsPage() {

    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [id, setId] = useState(0);
    

    async function fetchProducts() {
        try {
            const response = await axios.get(`${baseUrl}/products`, {
                headers: {
                    Authorization: getBearerToken()
                }
            })
            console.log(response, 'OBJ PRODUCTS');
            setData(response.data.products);
            
        } catch (error) {
            if (error.response.status === 401) navigate('/login');
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [id]);

    return (
        <>
            <Navbar></Navbar>
            <div className="flex h-full">
                <AdminSidebar activePage={"products"}></AdminSidebar>
                
                <ProductTable data={data} setId={setId}/>
                
            </div>
        
        </>
        
    )
}