import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    
    const navigate = useNavigate();
   

    function logout() {
        localStorage.clear();
        navigate('/login');

    }

    return (
        <>
            <div className="h-16 w-screen bg-neutral flex items-center justify-between px-10">
                <Link to={"/"}>
                    <h2 className="text-center text-2xl font-bold">ASOOS Cars</h2>
                </Link>
                
                
                <a className="text-red-600 font-bold cursor-pointer" onClick={logout}>Logout</a>
            </div>
        </>
    )
}