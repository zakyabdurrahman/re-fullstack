import Navbar from "../components/Navbar";
import AdminSidebar from "../components/AdminSidebar"
import CatsTable from "../components/CatsTable";

export default function CatsPage() {
    return (
        
        <>
            <Navbar/>
            <div className="flex h-full">
                <AdminSidebar activePage={"cats"}></AdminSidebar>
                
                <CatsTable/>
                
            </div>
        </>
    )
}