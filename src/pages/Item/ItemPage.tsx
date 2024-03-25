import { JSX, Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { IItem } from '../../interfaces/Item.iterface.ts';

function ItemPage(): JSX.Element {
  const { data } = useLoaderData() as { data: IItem };

  return (
    <Suspense fallback={<>Loading...</>}>
      <Await resolve={data}>{(data: IItem) => <>Item - {data.name}</>}</Await>
    </Suspense>
  );
}

export default ItemPage;
