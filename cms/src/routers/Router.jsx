import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../views/LoginForm";
import ProductsPage from "../views/ProductsPage";
import authentication from "../middlewares/authentication";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginForm/>
    },
    {
        path: "/",
        element: <ProductsPage/>,
        loader: authentication
    }
])

export default router;