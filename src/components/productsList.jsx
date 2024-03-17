import React from 'react'
import Link from 'next/link';
import { getDataList } from '@/services/products';
import ProductCard from './productCard';

const ProductsList = async (props) => {
  const { search } = props;
  const products = await getDataList(search);

  return (
    <>
      { 
        products.slice(0, 4).map((product) => (
          <Link key={ product.id } href={`/items/${product.id}`}>
            <ProductCard product={ product }/>
          </Link>
        ))
      }
    </>
  )
}

export default ProductsList;
