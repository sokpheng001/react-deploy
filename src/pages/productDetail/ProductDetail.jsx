import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleproducts } from '../../store/feature/production/productAction';
import { ProductDetailCard } from '../../components/cards/ProductDetailCard';
import { ProductCard } from '../../components/products/ProductCard';


export default  function ProductDetail() {
const [product, setProducts] = useState({});
  const param = useParams();
  const id = param.id;
 
  useEffect(() => {
    const fetchSingleProduct = async () => {
      const product = await getSingleproducts(id);
      setProducts(product);
    };
    fetchSingleProduct ();
  } , []);
  console.log("product" ,product);
  console.log("param",param);

 
  
  return (
    
    <div>
      <getSingleproducts
     images={product?.images[0].url}
     name={product?.name}
     title={product?.description}
     price={product?.price}
     discount={product?.price - (product?.price * 10) / 100}
     ratingCount={product?.ratingCount}
    

      />
    </div>
  )
}
