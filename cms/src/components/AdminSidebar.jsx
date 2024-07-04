export default function AdminSidebar({activePage}) {
    return (
        <ul className="menu bg-base-200 w-56 h-screen rounded-none sticky top-0">
            <li ><a href="/" className={activePage === "products" ? "active" : ""}>Products</a></li>
            <li><a href="/cats" className={activePage === "cats" ? "active" : ""}>Categories</a></li>
            <li><a>Item 3</a></li>
        </ul>
    )
}