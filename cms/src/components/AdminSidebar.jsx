import { Link } from "react-router-dom";

export default function AdminSidebar({activePage}) {
    return (
        <ul className="menu bg-base-200 w-56 h-screen rounded-none sticky top-0">
            
            
            <li><Link to="/" className={activePage === "products" ? "active" : ""}>Products</Link></li>
            <li><Link to="/cats" className={activePage === "cats" ? "active" : ""}>Categories</Link></li>
            <li><a>Item 3</a></li>
        </ul>
    )
}