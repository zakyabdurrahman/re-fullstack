import axios from "axios";
import baseUrl from "../../utils/constants";
import { redirect, useNavigate } from "react-router-dom";
import { Slide, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function LoginForm() {

    const navigate = useNavigate();

    async function handleLogin(e) {
      e.preventDefault();
      try {
        const email = e.target[0].value;
        const password = e.target[1].value;
        const response = await axios.post(`${baseUrl}/login`, {email, password});
        localStorage.setItem('access_token', response.data.data.access_token);
        
        navigate('/');
      } catch (error) {
        console.log(error, 'error obj');
        toast.error(error.message)
      }
      
      
    }


    return (
        <>
        <div className='flex justify-center items-center h-screen'>
        <div className='card bg-base-200 w-96 shadow-xl'>
          <div className='card-body'>
            <h2 className='text-center font-bold text-2xl'>Login</h2>
            <form onSubmit={handleLogin} >
              <label class="input input-bordered flex items-center gap-2 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="h-4 w-4 opacity-70">
                    <path
                      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path
                      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                <input name="email" type="text" class="grow" placeholder="Email" />
              </label>
              <label class="input input-bordered flex items-center gap-2 mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="h-4 w-4 opacity-70">
                  <path
                    fill-rule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clip-rule="evenodd" />
                </svg>
                <input name="password" type="password" class="grow" placeholder='Password' />
              </label>
              <div className="flex justify-center">
                <button className='btn btn-secondary mt-4'>Login</button>
              </div>
            
            </form>
            
          </div>
          
        </div>
      </div>
      
      
      </>
    )
}