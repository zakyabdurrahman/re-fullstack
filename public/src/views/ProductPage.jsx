import Navbar from '../components/Navbar'
import Actions from '../components/Actions'
import SearchBar from '../components/SearchBar'
import ProductCards from '../components/ProductCards'
import Pagination from '../components/Pagination'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../utils/constants'
import LoadSpinner from '../components/LoadSpinner'

export default function ProductPage() {
    
    const [products, setProducts] = useState([]);
    const [pagination, setPagination] = useState({}); 
    const [params, setParams] = useState({});
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        fetchProducts()
    }, [params])

    

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await axios.get(`${baseUrl}/pub/branded-things/products`, {
                params: params
            });
            setProducts(response.data.data.query);
            setPagination(response.data.data.pagination);
            
            
        } catch (error) {
            setLoading(false);
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    return (
    <>
      
      <Navbar></Navbar>
      <Actions setParam={setParams} params={params}></Actions>
      <SearchBar setParams={setParams} params={params}></SearchBar>
      {isLoading ? <LoadSpinner></LoadSpinner> : <ProductCards products={products}></ProductCards>}
      
      <Pagination currPage={pagination.currentPage} totalPage={pagination.totalPage} 
        setParams={setParams} params={params}
      ></Pagination>
      
    </>
    )
}