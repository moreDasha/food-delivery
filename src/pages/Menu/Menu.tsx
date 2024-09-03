import styles from './Menu.module.css';
import { Title } from '../../components/Title/Title';
import { InputSearch } from '../../components/InputSearch/InputSearch';
import { ProductCard } from '../../components/ProductCard/ProductCard';

export function Menu () {
  return (
    <div className={styles['menu']}>
        <div className={styles['menu-header']}>
          <Title>Меню</Title>
          <InputSearch placeholder='Введите блюдо или состав'/>
        </div>
        <div className={styles['menu-main']}>
            <ProductCard />
        </div>
    </div>
  );
};