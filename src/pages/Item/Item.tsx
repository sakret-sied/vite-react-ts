import { Await, useLoaderData } from 'react-router-dom';
import { IItem } from '../../interfaces/Item.iterface.ts';
import { JSX, Suspense } from 'react';

function Item(): JSX.Element {
  const { data } = useLoaderData() as { data: IItem };

  return (
    <Suspense fallback={<>Loading...</>}>
      <Await resolve={data}>{(data: IItem) => <>Item - {data.name}</>}</Await>
    </Suspense>
  );
}

export default Item;
