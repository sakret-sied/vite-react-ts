import { JSX, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginFormEvent } from '../../interfaces/LoginFormEvent.ts';
import { login } from '../../services/API.ts';
import styles from './LoginPage.module.css';
import Button from '../../components/Button/Button.tsx';
import Heading from '../../components/Heading/Heading.tsx';
import Input from '../../components/Input/Input.tsx';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store.ts';
import { userActions } from '../../store/user.slice.ts';
import { AuthToken } from '../../types/AuthToken.ts';

function LoginPage(): JSX.Element {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const submit = async (e: LoginFormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError(null);
    const { email, password } = e.target;
    login(email.value, password.value)
      .then((data: AuthToken) =>
        dispatch(userActions.addJwt(data.access_token))
      )
      .then(() => navigate('/'))
      .catch((e) => setError(e.response?.data.message));
  };

  return (
    <div className={styles.login}>
      <Heading>Вход</Heading>
      {error ? <div className={styles.error}>{error}</div> : ''}
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
