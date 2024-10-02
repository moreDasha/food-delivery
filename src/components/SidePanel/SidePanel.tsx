import styles from './SidePanel.module.css';
import { User } from '../User/User';
import { Navigation } from '../Navigation/Navigation';
import { Button } from '../Button/Button';
import { useNavigate } from 'react-router-dom';

export const SidePanel = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('jwt');
    navigate('/auth/login');
  };

  return (
    <aside className={styles['side-panel']}>
      <User/>
      <Navigation/>
      <Button appearence='small' className='off' onClick={logout}>
        <span></span>
        Выйти
      </Button>
    </aside>
  );
};
