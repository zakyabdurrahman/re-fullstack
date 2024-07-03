import axios from "axios";
import { useEffect, useState } from "react"
import { baseUrl } from "../utils/constants";

export default function Actions({setParam, params}) {

    const [cats, setCats] = useState([]);

    async function getCategories() {
        const response = await axios.get(`${baseUrl}/pub/branded-things/categories`);
        console.log(response.data.data);
        setCats(response.data.data);
    }

    function changeCat(e) {
        let currObj = {...params}
        currObj.i = e.target.value;
        setParam(currObj)
    } 

    function changeSort(e) {
        let newObj = {...params};
        newObj.sort = e.target.value;
        setParam(newObj)
    }

    useEffect(() => {
        getCategories();
    }, [])


    return (
        <>
            <div className="flex justify-end mt-2">
                <div>
                    <p className="inline mr-2">Category</p>
                    <select className="select select-bordered max-w-xs mr-4" 
                    onChange={changeCat}>
                        <option disabled selected>Select category</option>
                        {cats.map((item) => {
                            return (
                                <>
                                    <option key={item.id} value={item.name}>{item.name}</option>
                                </>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <p className="inline mr-2">Sort by</p>
                    <select className="select select-bordered max-w-xs mr-10" onChange={changeSort}>
                        <option disabled selected>....</option>
                        <option value="DESC">Latest</option>
                        <option value="ASC">Oldest</option>
                    </select>


                </div>
                
            </div>
        
        </>
    )
}