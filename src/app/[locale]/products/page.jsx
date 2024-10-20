import React, { Suspense } from 'react';
import ProductsLoading from './ProductsLoading';
import ProductsPage from './ProductsPage';
import BannerSection from '../commons/BannerSection';

export default async function Products({ searchParams }) {
  return (
    <div className="max-w-[100%] mx-auto">
      <BannerSection />

      {/* <Search searchMainContainer="search-bar mb-8 max-w-[30%]" /> */}
      {/* <div key={Math.random()}>
        <FiltersPage searchParams={searchParams} />
      </div> */}
      <div key={Math.random()}>
        <Suspense fallback={<ProductsLoading />}>
          <ProductsPage searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
