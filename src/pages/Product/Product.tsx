import styles from './Product.module.css';
import { Await, useLoaderData } from 'react-router-dom';
import { ProductCardProps } from '../../components/ProductCard/ProductCard.props';
import { Suspense } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { Title } from '../../components/Title/Title';
import { AmountButtons } from '../../components/AmountButtons/AmountButtons';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { MainContent } from '../../components/MainContent/MainContent';

export function Product() {
  const product = useLoaderData() as { data: ProductCardProps };
  const addedProducts = useSelector((state: RootState) => state.cart.products);

  return (
    <>
      <Suspense fallback={<Loader text="Загружаем блюдо"></Loader>}>
        <Await resolve={product.data}>
          {(data: ProductCardProps) => {
            const currentProduct = addedProducts.find(
              (item) => item.id === data.id
            );

            return (
              <MainContent>
                <Title>{data.name}</Title>
                <div className={styles['product']}>
                  <div className={styles['product-img']}>
                    <img src={`../${data.img}`} alt="product photo" />
                  </div>
                  <div className={styles['product-description']}>
                    <div className={styles['product-rating']}>
                      {data.rating}
                      <span>
                        <img src="../img/icons/star.svg" alt="star icon" />
                      </span>
                    </div>
                    <div className={styles['product-composition']}>
                      <div className={styles['product-top']}>
                        <p>Состав:</p>
                      </div>
                      <p>{data.composition}</p>
                    </div>
                    <div className={styles['product-bottom']}>
                      <div className={styles['product-price']}>
                        {data.price}
                        <span>₽</span>
                      </div>
                      <AmountButtons
                        id={data.id}
                        amount={currentProduct?.amount}
                      />
                    </div>
                  </div>
                </div>
              </MainContent>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
}
