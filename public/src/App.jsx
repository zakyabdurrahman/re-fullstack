import { RouterProvider } from "react-router-dom"
import ProductDetailPage from "./views/ProductDetailPage"
import ProductPage from "./views/ProductPage"
import router from "./routers/Router"



function App() {

  return (

    <RouterProvider router={router}></RouterProvider>
    

  )
}

export default App
