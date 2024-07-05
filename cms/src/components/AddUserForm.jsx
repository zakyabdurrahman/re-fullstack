export default function AddUserForm() {
    return (
        <>
            
            <form>
                <div className="flex flex-col items-center flex-grow ml-96">
                <h1 className="text-2xl text-center font-bold my-6">Add User</h1>
                        <input type="text" name="name" id="formName" className="input input-bordered w-full max-w-xs" placeholder="Username" />
                        <input type="text" id="formDesc" className="input input-bordered w-full max-w-xs mt-4" placeholder="Email" />
                        <input type="text" id="formDesc" className="input input-bordered w-full max-w-xs mt-4" placeholder="Phone Number" />
                        <input type="text" id="formDesc" className="input input-bordered w-full max-w-xs mt-4" placeholder="Address" />
                        <input type="text" id="formDesc" className="input input-bordered w-full max-w-xs mt-4" placeholder="Password" />
                        <button className="btn mt-4">Add User</button>
                    
                    
                </div>
            </form>   
        </>
    )
}