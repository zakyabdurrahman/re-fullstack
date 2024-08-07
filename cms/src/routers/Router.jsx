import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../views/LoginForm";
import ProductsPage from "../views/ProductsPage";
import authentication from "../middlewares/authentication";
import ProductForm from "../components/ProductForm";
import ProductEditPage from "../views/ProductEditPage";
import ProductAddPage from "../views/ProductAddPage";
import CatsPage from "../views/CatsPage";
import ProductEditImagePage from "../views/ProductEditImagePage";
import AddUserPage from "../views/AddUserPage";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginForm/>
    },
    {
        path: "/",
        element: <ProductsPage/>,
        loader: authentication,
        
    },
    {
        path:"/edit/:id",
        element: <ProductEditPage/>,
        loader: authentication
    },
    {
        path:"/add",
        element: <ProductAddPage/>,
        loader: authentication
    },
    {
        path:"/cats",
        element: <CatsPage/>,
        loader: authentication
    },
    {
        path:"/upload/:id",
        element: <ProductEditImagePage/>,
        loader: authentication
    },
    {
        path:"/add-user",
        element: <AddUserPage/>,
        loader: authentication
    }
])

export default router;