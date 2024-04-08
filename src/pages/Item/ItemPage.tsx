import { JSX, Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { ItemAPI } from '../../interfaces/API.ts';

function ItemPage(): JSX.Element {
  const { data } = useLoaderData() as { data: ItemAPI };

  return (
    <Suspense fallback={<>Loading...</>}>
      <Await resolve={data}>{(data: ItemAPI) => <>Item - {data.name}</>}</Await>
    </Suspense>
  );
}

export default ItemPage;
