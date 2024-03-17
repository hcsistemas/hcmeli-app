import { Suspense } from "react";
import ProductsList from "@/components/productsList";
import SearchForm from "@/components/searchForm";
import Loading from '@/components/loading';

export default function Items({searchParams}) {
  const search = searchParams.search;

  return (
    <>
      <SearchForm keyWord={ search }/>

      <Suspense fallback={<Loading/>}>
        <div className="search-box-cont">
          <ProductsList search={ search }/>
        </div>
      </Suspense>
    </>
  );
}
