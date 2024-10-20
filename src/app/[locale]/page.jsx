import { Suspense } from 'react';
import BannerSection from './commons/BannerSection';
import ProductsLoading from './products/ProductsLoading';
import ProductsPage from './products/ProductsPage';

export default async function Home({ searchParams }) {
  return (
    <div className="lobby-wrap">
      <BannerSection />

      <div key={Math.random()}>
        <Suspense fallback={<ProductsLoading />}>
          <ProductsPage searchParams={searchParams} />
        </Suspense>
      </div>

    </div>
  );
}
