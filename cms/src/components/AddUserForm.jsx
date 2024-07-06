import axios from "axios";
import { toast } from "react-toastify"
import baseUrl from "../../utils/constants";
import getBearerToken from "../../utils/getBearerToken";
import { useNavigate } from "react-router-dom";

export default function AddUserForm() {

    const navigate = useNavigate();

    async function handleAddUser(e) {
        try {
            e.preventDefault();
            const username = e.target[0].value;
            const email = e.target[1].value;
            const phoneNumber = e.target[2].value;
            const address = e.target[3].value;
            const password = e.target[4].value;

            const payload = {
                username,
                email,
                phoneNumber,
                address,
                password
            }
            console.log(payload)
            const response = await axios.post(`${baseUrl}/add-user`, payload, {
                headers: {
                    Authorization: getBearerToken()
                }
            })
            toast('Successfully added new user')
        } catch (error) {
            console.log(error);
            
            if (error.response.status === 401) {
                navigate('/login');
            } else if (error.response.status === 403) {
                toast.error('You have no authority to add new user');
            } else {
                toast.error(error.response.data.message);
            }
        } finally {
            
        }
    } 

    return (
        <>
            <div className="flex-grow">
            <form onSubmit={handleAddUser}>
                <div className="flex flex-col items-center">
                <h1 className="text-2xl text-center font-bold my-6">Add User</h1>
                        <input type="text" name="name" id="formName" className="input input-bordered w-full max-w-xs" placeholder="Username" />
                        <input type="text" id="formEmail" className="input input-bordered w-full max-w-xs mt-4" placeholder="Email" />
                        <input type="text" id="formPhone" className="input input-bordered w-full max-w-xs mt-4" placeholder="Phone Number" />
                        <input type="text" id="formAddress" className="input input-bordered w-full max-w-xs mt-4" placeholder="Address" />
                        <input type="password" id="formPass" className="input input-bordered w-full max-w-xs mt-4" placeholder="Password" />
                        <button className="btn mt-4">Add User</button>
                    
                    
                </div>
            </form>   
            </div>  
            
        </>
    )
}