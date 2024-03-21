import { useParams } from 'react-router-dom';

function Item() {
  const { id } = useParams();

  return <div>{id}</div>;
}

export default Item;
