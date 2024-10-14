import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import { ProductCardProps } from './ProductCard.props';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { cartActions } from '../../store/cart.slice';
import cn from 'classnames';

export const ProductCard = (props: ProductCardProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.cart.products);

  const addProduct = () => {
    dispatch(cartActions.addProduct(props.id));
  };

  const decreaseProductAmount = () => {
    dispatch(cartActions.decreaseProductAmount(props.id));
  };

  return (
    <article
      className={cn(styles['product-card'], {
        [styles['card-added']]: products.find((item) => item.id === props.id)
      })}
    >
      <div className={styles['product-card-inner']}>
        <div className={styles['product-img']}>
          <img src={props.img} alt="food photo" />
          <div className={styles['product-price']}>
            {props.price} <span>₽</span>
          </div>
          <div className={styles['product-rating']}>
            {props.rating}
            <span>
              <img src="img/icons/star.svg" alt="star icon" />
            </span>
          </div>
        </div>
        <div className={styles['product-info']}>
          <Link to={`/product/${props.id}`} className={styles['product-name']}>
            {props.name}
          </Link>
          <p className={styles['product-composition']}>{props.composition}</p>
        </div>
      </div>
      <div className={styles['product-cart-btn-wrap']}>
        <button className={styles['product-cart-remove-btn']} onClick={decreaseProductAmount}>
          <span>&minus;</span>
        </button>
        <span className={styles['product-cart-counter']}>{products.find((item) => item.id === props.id)?.amount}</span>
        <button className={styles['product-cart-add-btn']} onClick={addProduct}>
          <span>
            <img src="img/icons/cart-white.svg" alt="cart icon" />
          </span>
          <span>+</span>
        </button>
      </div>
    </article>
  );
};
