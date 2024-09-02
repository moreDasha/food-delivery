import styles from './SidePanel.module.css';
import { User } from '../User/User';
import { Navigation } from '../Navigation/Navigation';
import { Button } from '../Button/Button';

export const SidePanel = () => {
  return (
    <aside className={styles['side-panel']}>
      <User/>
      <Navigation/>
      <Button appearence='small' className='off'>
        <span></span>
        Выйти
      </Button>
    </aside>
  );
};
