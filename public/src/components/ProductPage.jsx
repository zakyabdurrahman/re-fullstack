import Navbar from './Navbar'
import Actions from './Actions'
import SearchBar from './SearchBar'
import ProductCards from './ProductCards'
import Pagination from './Pagination'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../utils/constants'

export default function ProductPage() {
    
    const [products, setProducts] = useState([]);
    const [pagination, setPagination] = useState({}); 
    const [params, setParams] = useState({});

    useEffect(() => {
        fetchProducts()
    }, [params])

    async function fetchProducts() {
        try {
            const response = await axios.get(`${baseUrl}/pub/branded-things/products`, {
                params: params
            });
            setProducts(response.data.data.query);
            setPagination(response.data.data.pagination);
            
            console.log();
        } catch (error) {
            console.log(error);
        }
    }

    return (
    <>
      
      <Navbar></Navbar>
      <Actions setParam={setParams} params={params}></Actions>
      <SearchBar setParams={setParams} params={params}></SearchBar>
      <ProductCards products={products}></ProductCards>
      <Pagination currPage={pagination.currentPage} totalPage={pagination.totalPage} 
        setParams={setParams} params={params}
      ></Pagination>
      
    </>
    )
}