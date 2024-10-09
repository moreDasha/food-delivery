import { useSelector } from 'react-redux';
import { Title } from '../../components/Title/Title';
import styles from './Cart.module.css';
import { RootState } from '../../store/store';
import { CartProductCard } from '../../components/CartProductCard/CartProductCard';

export function Cart() {

  const products = useSelector((state: RootState) => (state.cart.products));

  return (
    <div className={styles['cart']}>
      <Title>Корзина</Title>
      <div className={styles['cart-main']}>
        <div className={styles['cart-products']}>
          <CartProductCard />
        </div>
      </div>
    </div>
  );
}
