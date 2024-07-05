import AddUserForm from "../components/AddUserForm";
import AdminSidebar from "../components/AdminSidebar";
import Navbar from "../components/Navbar";

export default function AddUserPage() {
    return (
        <>
            <Navbar/>
            <div className="flex h-full">
                <AdminSidebar activePage={"addUser"}></AdminSidebar>
                <AddUserForm/>
                
                
            </div>
                         
        </>
    )
}