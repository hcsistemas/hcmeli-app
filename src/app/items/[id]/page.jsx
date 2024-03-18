import React, { Suspense } from 'react'
import SearchForm from "@/components/searchForm";
import ProductDetail from '@/components/productDetail';
import Loading from '@/components/loading';

export default function ItemDetail({params}) {
  const id = params.id;

  return (
    <>
      <SearchForm/>

      <Suspense fallback={<Loading/>}>
        <div className="search-box-cont">
          <ProductDetail id={ id }/>
        </div>
      </Suspense>
    </>
  );
}
