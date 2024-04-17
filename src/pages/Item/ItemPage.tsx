import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { IItemAPI } from '../../interfaces/API.ts';

function ItemPage() {
  const { data } = useLoaderData() as { data: IItemAPI };

  return (
    <Suspense fallback={<>Loading...</>}>
      <Await resolve={data}>
        {(data: IItemAPI) => <>Item - {data.name}</>}
      </Await>
    </Suspense>
  );
}

export default ItemPage;
