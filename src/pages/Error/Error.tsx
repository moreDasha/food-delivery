import styles from './Error.module.css';
import { NoResult } from '../../components/NoResult/NoResult';

export function Error() {
  return (
    <main className={styles['content']}>
      <NoResult text="Страница не найдена" layout='alone' />
    </main>
  );
}
