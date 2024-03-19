import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <Link to="/">Main</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
}

export default Menu;
