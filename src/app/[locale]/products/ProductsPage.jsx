import { PRODUCT_FETCH_COUNT } from '@/constants';
import { getProductListAction } from '@/actions/product.actions';
import ProductList from './ProductList';

const handlePromiseResult = (result, defaultValue) => {
  if (result.status === 'fulfilled') {
    return result.value;
  }
  return defaultValue;
};

export default async function ProductsPage({ searchParams }) {
  const query = searchParams?.query ?? '';

  const results = await Promise.allSettled([
    getProductListAction(
      1,
      PRODUCT_FETCH_COUNT,
      query,
    ),
    // getAuthToken(),
  ]);

  const [initialData] = results.map(handlePromiseResult);

  return (
    <div>
      <ProductList initialData={initialData} searchParams={searchParams} />
    </div>
  );
}
