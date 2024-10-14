import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { ErrorSvg } from '../Svg/ErrorSvg';
import styles from './CartProductCard.module.css';
import { CartProductCardProps } from './CartProductCard.props';
import { cartActions } from '../../store/cart.slice';
import { AmountButtons } from '../AmountButtons/AmountButtons';
import { Link } from 'react-router-dom';

export const CartProductCard = (props: CartProductCardProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const removeProduct = () => {
    dispatch(cartActions.removeProduct(props.id));
  };

  return (
    <article className={styles['cart-product-card-wrap']}>
      <div className={styles['cart-product-card']}>
        <div className={styles['img']}>
          <img src={props.img} alt="product photo" />
        </div>
        <div className={styles['info']}>
          <div className={styles['info-text']}>
            <Link to={`/product/${props.id}`} className={styles['name']}>
              {props.name}
            </Link>
            <div className={styles['price']}>
              {props.price}
              <span>₽</span>
            </div>
          </div>
          <AmountButtons id={props.id} amount={props.amount} />
        </div>
      </div>
      <div>
        <button className={styles['remove-button']} onClick={removeProduct}>
          <ErrorSvg />
        </button>
      </div>
    </article>
  );
};
