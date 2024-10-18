import styles from './SidePanel.module.css';
import { User } from '../User/User';
import { Navigation } from '../Navigation/Navigation';
import { Button } from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { uesrActions } from '../../store/user.slice';

export const SidePanel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>(); 

  const logout = () => {
    dispatch(uesrActions.logout()); 
    navigate('/auth/login');
  };

  return (
    <aside className={styles['side-panel']}>
      <User />
      <Navigation/>
      <Button appearence='small' className='off' onClick={logout}>
        <span></span>
        Выйти
      </Button>
    </aside>
  );
};
