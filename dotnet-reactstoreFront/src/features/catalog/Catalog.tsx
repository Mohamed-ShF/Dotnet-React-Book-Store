import { Product } from "../../app/models/product"
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

export default function Catalog(){
    const [products,setProducts]=useState<Product[]>([]);

    useEffect(()=>{
      fetch('http://localhost:5020/api/products')
      .then(respose=> respose.json())
      .then(data=>setProducts(data))
    },[])

    return (
    <>
        <ProductList products={products}/>    
    </>
    )
}