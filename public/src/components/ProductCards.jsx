import { useState } from 'react'
import Product from './Product'
import { useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../utils/constants';
export default function ProductCards({products}) {
    
    

    return (
        <>
            
            <div className="grid grid-cols-3 gap-y-4 mx-4 justify-items-center m-auto">
                {products.map((item) => {
                    return <Product 
                        key={item.id} 
                        title={item.name} 
                        imgUrl={item.imgUrl}
                        desc={item.description}
                        price={item.price}
                        >
                
                    </Product>
                })}
            </div>
        </>
        

    )
}