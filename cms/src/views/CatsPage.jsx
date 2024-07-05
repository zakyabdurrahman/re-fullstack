import Navbar from "../components/Navbar";
import AdminSidebar from "../components/AdminSidebar"
import CatsTable from "../components/CatsTable";
import { toast } from "react-toastify";
import axios from "axios";
import baseUrl from "../../utils/constants";
import { useEffect, useState } from "react";
import getBearerToken from "../../utils/getBearerToken";

export default function CatsPage() {

    const [cats, setCats] = useState([]);

    async function getCategories() {

        try {
            const response = await axios.get(`${baseUrl}/categories`, {
                headers: {
                    Authorization: getBearerToken()
                }
            });
        
            setCats(response.data.categories);
        } catch (error) {
            toast.error(error.message);
        }
        
        
    }

    useEffect(() => {
        getCategories();
    }, [])

    return (
        
        <>
            <Navbar/>
            <div className="flex h-full">
                <AdminSidebar activePage={"cats"}></AdminSidebar>
                
                <CatsTable cats={cats}/>
                
            </div>
        </>
    )
}