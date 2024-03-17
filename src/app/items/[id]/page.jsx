import React, { Suspense } from 'react'
import SearchForm from "@/components/searchForm";
import ProductDetail from '@/components/productDetail';
import Loading from '@/components/loading';

export default function ItemDetail({params}) {  
  return (
    <>
      <SearchForm/>

      <Suspense fallback={<Loading/>}>
        <div className="search-box-cont">
          <ProductDetail id={ params.id }/>
        </div>
      </Suspense>
    </>
  );
}
