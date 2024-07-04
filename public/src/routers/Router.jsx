import { createBrowserRouter } from "react-router-dom";
import ProductPage from "../views/ProductPage";
import ProductDetailPage from "../views/ProductDetailPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductPage/>
    },
    {
        path: "/:id",
        element: <ProductDetailPage/>
    }
])

export default router;