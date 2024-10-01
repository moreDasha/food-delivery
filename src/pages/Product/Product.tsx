import { Await, useLoaderData } from 'react-router-dom';
import { ProductCardProps } from '../../components/ProductCard/ProductCard.props';
import { Suspense } from 'react';
import { Loader } from '../../components/Loader/Loader';

export function Product() {
  const product = useLoaderData() as { data: ProductCardProps };

  return (
    <>
      <Suspense fallback={<Loader text='Загружаем блюдо'></Loader>}>
        <Await resolve={product.data}>
          {(data: ProductCardProps) => {
            return <>Product - {data.name}</>;
          }}
        </Await>
      </Suspense>
    </>
  );
}
