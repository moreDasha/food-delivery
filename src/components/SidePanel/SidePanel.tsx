import styles from './SidePanel.module.css';
import { User } from '../User/User';
import { Navigation } from '../Navigation/Navigation';
import { Button } from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { getProfile, uesrActions } from '../../store/user.slice';
import { useEffect } from 'react';

export const SidePanel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const profile = useSelector((state: RootState) => state.user.profile); 

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]); 

  const logout = () => {
    dispatch(uesrActions.logout()); 
    navigate('/auth/login');
  };

  return (
    <aside className={styles['side-panel']}>
      <User name={profile?.name} email={profile?.email}/>
      <Navigation/>
      <Button appearence='small' className='off' onClick={logout}>
        <span></span>
        Выйти
      </Button>
    </aside>
  );
};
