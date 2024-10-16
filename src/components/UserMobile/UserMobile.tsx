import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import styles from './UserMobile.module.css';
import { useDispatch } from 'react-redux';
import { uesrActions } from '../../store/user.slice';
import { AppDispatch } from '../../store/store';
import { User } from '../User/User';
import { ProfileSvg } from '../Svg/ProfileSvg';

export const UserMobile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const logout = () => {
    dispatch(uesrActions.logout()); 
    navigate('/auth/login');
  };

  return (
    <div className={styles['user']}>
      <button className={styles['user-button']}>
        <span className={styles['user-button-icon']}>
          <ProfileSvg />
        </span>
      </button>
      <div role="dialog" aria-modal="false" aria-label="user profile" className={styles['user-dialog']}>
        <User extraClass='mobile'/>
        <Button appearence='small' className='off' onClick={logout}>
        <span></span>
        Выйти
      </Button>
      </div>
    </div>
  );
};
