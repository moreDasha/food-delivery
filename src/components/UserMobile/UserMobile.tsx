import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import styles from './UserMobile.module.css';
import { useDispatch } from 'react-redux';
import { uesrActions } from '../../store/user.slice';
import { AppDispatch } from '../../store/store';
import { User } from '../User/User';
import { ProfileSvg } from '../Svg/ProfileSvg';
import { useRef, useState } from 'react';
import cn from 'classnames';
import { useOutsideClick } from '../../custom-hooks/useOutsideClick';

export const UserMobile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [isUserDialogOpen, setIsUserDialogOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  // выход из профиля
  const logout = () => {
    dispatch(uesrActions.logout()); 
    navigate('/auth/login');
  };

  // управляем открытием попапа профиля
  const handleUserDialog = () => {
    if (isUserDialogOpen) {
      setIsUserDialogOpen(false);
    } else {
      setIsUserDialogOpen(true);
    }
  };

  // закрыть попап профиля (для клика вне)
  const closeUserDialog = () => {
    if (isUserDialogOpen) {
      setIsUserDialogOpen(false);
    }
  };

  // клик вне попапа
  useOutsideClick(ref, closeUserDialog);

  return (
    <div className={styles['user']} ref={ref}>
      <button className={cn(styles['user-button'], {
        [styles['active']]: isUserDialogOpen
      })} onClick={handleUserDialog}>
        <span className={styles['user-button-icon']}>
          <ProfileSvg />
        </span>
      </button>
      <div role="dialog" aria-modal="false" aria-label="user profile" className={cn(styles['user-dialog'], {
        [styles['open']]: isUserDialogOpen
      })}>
        <User extraClass='mobile'/>
        <Button appearence='small' className='off' onClick={logout}>
        <span></span>
        Выйти
      </Button>
      </div>
    </div>
  );
};
