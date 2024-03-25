import { FormEvent, JSX } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';
import Button from '../../components/Button/Button.tsx';
import Heading from '../../components/Heading/Heading.tsx';
import Input from '../../components/Input/Input.tsx';

function LoginPage(): JSX.Element {
  const submit = (e: FormEvent): void => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className={styles.login}>
      <Heading>Вход</Heading>
      <form className={styles.form} onSubmit={submit}>
        <div className={styles.field}>
          <label htmlFor="email">Ваш email</label>
          <Input
            id="email"
            name="email"
            placeholder="Email"
            autoComplete="on"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Ваш пароль</label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
            autoComplete="on"
          />
        </div>
        <Button appearance="big">Вход</Button>
      </form>
      <div className={styles.links}>
        <div>Нет акканута?</div>
        <Link to="/auth/register">Зарегистрироваться</Link>
      </div>
    </div>
  );
}

export default LoginPage;
