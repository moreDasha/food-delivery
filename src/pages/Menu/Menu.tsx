import styles from './Menu.module.css';
import { Title } from '../../components/Title/Title';
import { InputSearch } from '../../components/InputSearch/InputSearch';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { ProductCardProps } from '../../components/ProductCard/ProductCard.props';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader } from '../../components/Loader/Loader';

export function Menu() {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getProducts = async () => {
    // axios запрос
    try {
      setIsLoading(true);

      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });

      const { data } = await axios.get<ProductCardProps[]>(
        'https://moredasha.github.io/food-delivery/products.json'
      );
      setProducts(data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      return;
    }

    // fetch запрос
    // try {
    //   const res = await fetch(
    //     'https://moredasha.github.io/food-delivery/products.json'
    //   );

    //   if (res.ok) {
    //     const data = (await res.json()) as ProductCardProps[];
    //     setProducts(data);
    //   } else {
    //     return;
    //   }
    // } catch (e) {
    //   console.log(e);
    //   return;
    // }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles['menu']}>
      <div className={styles['menu-header']}>
        <Title>Меню</Title>
        <InputSearch placeholder="Введите блюдо или состав" />
      </div>

      {isLoading && (
        <Loader text='Загружаем меню'></Loader>
      )}

      {!isLoading && (
        <div className={styles['menu-main']}>
          {products.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              composition={item.composition}
              price={item.price}
              rating={item.rating}
              img={item.img}
            />
          ))}
        </div>
      )}
    </div>
  );
}
