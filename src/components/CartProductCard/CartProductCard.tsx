import { ErrorSvg } from '../Svg/ErrorSvg';
import styles from './CartProductCard.module.css';

export const CartProductCard = () => {
  return (
    <div className={styles['cart-product-card']}>
      <div className={styles['img']}>
        <img src="img/product-card/012.jpg" alt="product photo" />
      </div>
      <div className={styles['info']}>
        <div className={styles['info-text']}>
          <p className={styles['name']}>Ролл с тигровыми креветками</p>
          <div className={styles['price']}>
            999
            <span>₽</span>
          </div>
        </div>
        <div className={styles['info-buttons']}>
          <button className={styles['amount-remove-button']}>&minus;</button>
          <span className={styles['amount']}>1</span>
          <button className={styles['amount-add-button']}>+</button>
        </div>
      </div>
      <div>
        <button className={styles['remove-button']}>
          <ErrorSvg />
        </button>
      </div>
    </div>
  );
};