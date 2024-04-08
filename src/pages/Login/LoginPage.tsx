import { JSX } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoginEvent } from '../../interfaces/LoginForm.ts';
import { AppDispatch, RootState } from '../../store/store.ts';
import { userActions } from '../../store/user.slice.ts';
import { loginThunk } from '../../store/user.thunks.ts';
import Button from '../../components/Button/Button.tsx';
import Heading from '../../components/Heading/Heading.tsx';
import Input from '../../components/Input/Input.tsx';
import styles from './LoginPage.module.css';
import { useLoginCheck } from '../../hooks/useLoginCheck.ts';

function LoginPage(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { error } = useSelector((s: RootState) => s.user);
  useLoginCheck();

  const submitHandler = async (
    e: LoginEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    dispatch(userActions.clearError());
    const { email, password } = e.target;
    dispatch(loginThunk({ email: email.value, password: password.value }));
  };

  return (
    <div className={styles.login}>
      <Heading>Login</Heading>
      {error ? <div className={styles.error}>{error}</div> : ''}
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.field}>
          <label htmlFor="email">Your email</label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="on"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Your password</label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="on"
          />
        </div>
        <Button appearance="big">Enter</Button>
      </form>
      <div className={styles.links}>
        <div>No account?</div>
        <Link to="/auth/register">Register</Link>
      </div>
    </div>
  );
}

export default LoginPage;
