import styles from './Login.module.css';
import { Title } from '../../components/Title/Title';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';

export function Login() {
  return (
    <div className={styles['login']}>
      <Title>Вход</Title>
      <form className={styles['login-form']}>
        <div className={styles['input-wrap']}>
          <label className={styles['input-label']}>
            <span className={styles['label-placeholder']}>Email</span>
            <Input placeholder='Email'/>
          </label>
          <label className={styles['input-label']}>
            <span className={styles['label-placeholder']}>Пароль</span>
            <Input placeholder='Пароль'/>
          </label>
        </div>
        <Button appearence='large'>Вход</Button>
      </form>
      <div className={styles['helper']}>
        <span className={styles['lhelper-text']}>Нет аккаунта?</span>
        <a className={styles['helper-link']} href="#">Зарегистрироваться</a>
      </div>
    </div>
  );
}