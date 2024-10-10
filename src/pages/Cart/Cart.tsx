import { useSelector } from 'react-redux';
import { Title } from '../../components/Title/Title';
import styles from './Cart.module.css';
import { RootState } from '../../store/store';
import { CartProductCard } from '../../components/CartProductCard/CartProductCard';
import { Button } from '../../components/Button/Button';
import { useEffect, useState } from 'react';
import { CartProductCardProps } from '../../components/CartProductCard/CartProductCard.props';
import axios from 'axios';

export function Cart() {
  const products = useSelector((state: RootState) => state.cart.products);
  const [productsList, setProductsList] =
    useState<(CartProductCardProps | undefined)[]>();

  const getProduct = async (id: number) => {
    const { data } = await axios.get<CartProductCardProps[]>(
      'https://moredasha.github.io/food-delivery/backend/products.json'
    );
    const product = data.find((item) => item.id === id);
    return product;
  };

  const getProductsList = async () => {
    const list = await Promise.all(products.map((item) => getProduct(item.id)));
    setProductsList(list);
  };

  useEffect(() => {
    getProductsList();
  }, [products]);

  return (
    <div className={styles['cart']}>
      <Title>Корзина</Title>
      <div className={styles['cart-main']}>
        <div className={styles['cart-products']}>
          {products.map((product) => {
            const item = productsList?.find((el) => el?.id === product.id);
            if (!item) {
              return;
            }
            return (
              <CartProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                amount={product.amount}
              />
            );
          })}
        </div>
        <div className={styles['cart-sum']}>
          <span>Итог</span>
          <div className={styles['cart-sum-price']}>
            999
            <span>₽</span>
          </div>
        </div>
        <Button appearence="large">Оформить</Button>
      </div>
    </div>
  );
}
