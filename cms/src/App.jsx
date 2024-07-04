
import { RouterProvider } from 'react-router-dom'
import router from './routers/Router'
import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="dark"
        transition={Slide}
      />
    </>
  )
}

export default App
