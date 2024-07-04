import { useEffect, useState } from "react"
import ProductModal from "./ProductModal";
import axios from "axios";
import baseUrl from "../../utils/constants";

export default function ProductTable({data}) {

    

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
                                    <tr className="hover">
                                        <td>{i + 1}</td>
                                        <td>{product.name}</td>
                                        <td className="w-52"><img className="w-52 h-52" src={product.imgUrl} alt="" /></td>
                                        <td>{product.description}</td>
                                        <td className="w-52">
                                            <a href={`/edit/${product.id}`}>
                                                <button className="btn btn-primary" >Edit</button>
                                            </a>
                                            
                                            
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