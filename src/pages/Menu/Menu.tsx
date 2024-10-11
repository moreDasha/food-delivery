import styles from './Menu.module.css';
import { Title } from '../../components/Title/Title';
import { InputSearch } from '../../components/InputSearch/InputSearch';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { ProductCardProps } from '../../components/ProductCard/ProductCard.props';
import { Loader } from '../../components/Loader/Loader';
import { ErrorItem } from '../../components/Error/ErrorItem';
import { ChangeEvent, useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { NoResult } from '../../components/NoResult/NoResult';

export function Menu() {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [filter, setFilter] = useState<string>();

  const getProducts = async (name?: string) => {
    // axios запрос
    try {
      setIsLoading(true);

      // симуляция задержки загрузки для просмотре прелоадера
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1500);
      });

      const { data } = await axios.get<ProductCardProps[]>(
        'https://moredasha.github.io/food-delivery/backend/products.json'
      );

      if (!name) {
        setProducts(data);
        setIsLoading(false);
      } else {
        const filterProducts = data.filter(
          (item) =>
            item.name.toLowerCase().includes(name) ||
            item.composition.toLowerCase().includes(name)
        );

        setProducts(filterProducts);
        setIsLoading(false);
      }
    } catch (e) {
      console.error(e);
      if (e instanceof AxiosError) {
        setError(e.message);
      }
      setIsLoading(false);
      return;
    }

    // fetch запрос
    // try {
    //   const res = await fetch(
    //     'https://moredasha.github.io/food-delivery/backend/products.json'
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

  const filteredProduct = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value.toLowerCase());
  };

  useEffect(() => {
    getProducts(filter);
  }, [filter]);

  return (
    <div className={styles['menu']}>
      <div className={styles['menu-header']}>
        <Title>Меню</Title>
        <InputSearch
          placeholder="Введите блюдо или состав"
          onChange={filteredProduct}
        />
      </div>

      {error && <ErrorItem text={error}></ErrorItem>}

      {isLoading && <Loader text="Загружаем меню"></Loader>}

      {!isLoading && products.length > 0  && (
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

      {!isLoading && products.length === 0  && <NoResult text='По вашему запросу ничего не найдено' />}
    </div>
  );
}

export default Menu;
