import styles from './ProductCard.module.css';
import { ProductCardProps } from './ProductCard.props';

export const ProductCard = ({}: ProductCardProps) => {
  return (
    <div className={styles['product-card']}>
      <div className={styles['product-link']}>
        <div className={styles['product-img']}>
          <img src="product-card/001.jpg" alt="food photo" />
          <div className={styles['product-price']}>
            300 <span>₽</span>
          </div>
          <div className={styles['product-rating']}>
            4.5
            <span>
              <img src="star.svg" alt="star icon" />
            </span>
          </div>
        </div>
        <div className={styles['product-info']}>
          <p className={styles['product-name']}>Наслаждение</p>
          <p className={styles['product-composition']}>
            Салями, руккола, помидоры, оливки
          </p>
        </div>
      </div>
      <button className={styles['product-cart-btn']}>
        <span>
          <img src="cart-white.svg" alt="cart icon" />
        </span>
      </button>
    </div>
  );
};
