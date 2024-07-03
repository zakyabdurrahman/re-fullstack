import axios from "axios";
import { useEffect, useState } from "react"
import { baseUrl } from "../utils/constants";

export default function Actions({setParam, params}) {

    const [cats, setCats] = useState([]);

    async function getCategories() {
        const response = await axios.get(`${baseUrl}/pub/branded-things/categories`);
        console.log(response.data.data);
        setCats(response.data.data)
    }

    function changeCat(e) {
        let currObj = {...params}
        currObj.i = e.target.value;
        setParam(currObj)
    } 

    useEffect(() => {
        getCategories();
    }, [])


    return (
        <>
            <div className="flex justify-end mt-2">
                <div>
                    <p className="inline mr-2">Category</p>
                    <select className="select select-bordered max-w-xs mr-4" onChange={changeCat}>
                        <option disabled selected>Select category</option>
                        {cats.map((item) => {
                            return (
                                <>
                                    <option key={item.id}>{item.name}</option>
                                </>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <p className="inline mr-2">Sort by</p>
                    <select className="select select-bordered max-w-xs mr-10">
                        <option disabled selected>....</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>


                </div>
                
            </div>
        
        </>
    )
}