import { useEffect, useState } from "react"
import ProductModal from "./ProductModal";
import axios from "axios";
import baseUrl from "../../utils/constants";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import getBearerToken from "../../utils/getBearerToken";

export default function ProductTable({data, setId}) {

    async function handleDelete(e) {
        try {
            const response = await axios.delete(`${baseUrl}/products/${e.target.value}`, {
                headers: {
                    Authorization: getBearerToken()
                }
            });
            setId(e.target.value);
            toast(response.data.message);
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <>
            
            <div className="w-full mt-4 px-6">
                <a href="/add">
                    <button className="btn btn-primary mt-4 ">Add Product</button>
                </a>
                <h2 className="mt-6 font-bold text-2xl">Products</h2>
                <table className="table mt-2">
                    <thead>
                        <tr>
                            <th>
                                No.
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Image
                            </th>
                            <th>
                                Description
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((product, i) => {
                            return (
                                <>
                                    <tr className="hover" key={product.id}>
                                        <td>{i + 1}</td>
                                        <td>{product.name}</td>
                                        <td className="w-52"><img className="w-52 h-52" src={product.imgUrl} alt="" /></td>
                                        <td>{product.description}</td>
                                        <td className="w-52">

                                            <div className="flex flex-col">
                                                <Link to={`/edit/${product.id}`}>
                                                    <button className="btn btn-primary" >Edit</button>
                                                </Link>
                                                <Link>
                                                    <button value={product.id} onClick={handleDelete} className="btn btn-warning my-4">Delete</button>
                                                </Link>
                                                <Link to={`/upload/${product.id}`}>
                                                    <button className="btn btn-secondary">Upload Image</button>
                                                </Link>
                                            </div>
                                            
                                            
                                            
                                        </td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}