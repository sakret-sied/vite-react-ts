import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './SuccessPage.module.css';

function SuccessPage() {
  const navigate = useNavigate();
  return (
    <div className={styles.success}>
      <img src="/pizza.png" alt="Pizza" />
      <div className={styles.text}>Order is complete!</div>
      <Button appearance="big" onClick={() => navigate('/')}>
        New order
      </Button>
    </div>
  );
}

export default SuccessPage;
