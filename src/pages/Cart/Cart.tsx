import { useDispatch, useSelector } from 'react-redux';
import { Title } from '../../components/Title/Title';
import styles from './Cart.module.css';
import { AppDispatch, RootState } from '../../store/store';
import { CartProductCard } from '../../components/CartProductCard/CartProductCard';
import { Button } from '../../components/Button/Button';
import { useEffect, useState } from 'react';
import { CartProductCardProps } from '../../components/CartProductCard/CartProductCard.props';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../../store/cart.slice';
import { NoResult } from '../../components/NoResult/NoResult';
import { MainContent } from '../../components/MainContent/MainContent';
import { Loader } from '../../components/Loader/Loader';

export function Cart() {
  const products = useSelector((state: RootState) => state.cart.products);
  const [productsList, setProductsList] =
    useState<(CartProductCardProps | undefined)[]>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getProduct = async (id: number) => {  
    const { data } = await axios.get<CartProductCardProps[]>(
      'https://moredasha.github.io/food-delivery/backend/products.json'
    );
    const product = data.find((item) => item.id === id);
    return product;
  };

  const getProductsList = async () => {
    setIsLoading(true);
    const list = await Promise.all(products.map((item) => getProduct(item.id)));
    setProductsList(list);
    setIsLoading(false);
  };

  const checkout = () => {
    // await axios.post()
    dispatch(cartActions.cleanCart());
    navigate('/success');
  };

  useEffect(() => {
    getProductsList();
  }, [products]);

  return (
    <MainContent>
      <Title>Корзина</Title>
      {isLoading && <Loader text="Загружаем корзину"></Loader>}

      {!isLoading && products.length === 0 && <NoResult text='Ваша корзина пуста' />}

      {!isLoading && products.length > 0 && (
        <div className={styles['cart']}>
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
              {products
                .map((product) => {
                  const item = productsList?.find(
                    (el) => el?.id === product.id
                  );
                  if (!item) {
                    return 0;
                  }
                  return product.amount * item.price;
                })
                .reduce((acc, el) => (acc += el), 0)}
              <span>₽</span>
            </div>
          </div>
          <Button appearence="large" onClick={checkout}>
            Оформить
          </Button>
        </div>
      )}
    </MainContent>
  );
}
