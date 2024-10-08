import styles from './Product.module.css';
import { Await, useLoaderData } from 'react-router-dom';
import { ProductCardProps } from '../../components/ProductCard/ProductCard.props';
import { Suspense } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { Title } from '../../components/Title/Title';

export function Product() {
  const product = useLoaderData() as { data: ProductCardProps };

  return (
    <>
      <Suspense fallback={<Loader text="Загружаем блюдо"></Loader>}>
        <Await resolve={product.data}>
          {(data: ProductCardProps) => {
            return (
              <div className={styles['product']}>
                <Title>{data.name}</Title>
                <div className={styles['product-inform']}>
                  <div className={styles['product-img']}>
                    <img src={`../${data.img}`} alt="product photo" />
                  </div>
                  <div className={styles['product-description']}>
                    <div className={styles['product-composition']}>
                      <p>Состав:</p>
                      <p>{data.composition}</p>
                    </div>
                    <div className={styles['product-bottom']}>
                      <div className={styles['product-price']}>
                        {data.price}
                        <span>₽</span>
                      </div>
                      <div className={styles['product-rating']}>
                        {data.rating}
                        <span>
                          <img src="../img/icons/star.svg" alt="star icon" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
}
