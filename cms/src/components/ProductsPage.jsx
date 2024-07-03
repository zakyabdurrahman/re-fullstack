import AdminDashboard from "./AdminDashboard";
import AdminSidebar from "./AdminSidebar";
import Navbar from "./Navbar";

export default function ProductsPage() {
    return (
        <>
            <Navbar></Navbar>
            <div className="flex">
                <AdminSidebar></AdminSidebar>
                <div>
                    <h2 className="ml-6 mt-6 font-bold text-2xl">Products</h2>
                </div>
                
            </div>
        
        </>
        
    )
}