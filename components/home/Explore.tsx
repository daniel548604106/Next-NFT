import Image from 'next/image';
import React from 'react';

const mockProducts = [
  {
    id: 1,
    name: 'the lightini love',
    price: '5.55',
    img: 'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    name: 'the lightini love',
    price: '5.55',
    img: 'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 1,
    name: 'the lightini love',
    price: '5.55',
    img: 'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    name: 'the lightini love',
    price: '5.55',
    img: 'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    name: 'the lightini love',
    price: '5.55',
    img: 'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 5,
    name: 'the lightini love',
    price: '5.55',
    img: 'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 6,
    name: 'the lightini love',
    price: '5.55',
    img: 'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 7,
    name: 'the lightini love',
    price: '5.55',
    img: 'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
];

interface ExploreCardProps {
  name: string;
  price: string;
  img: string;
}
const ExploreCard = (props: ExploreCardProps) => {
  const { img, name, price } = props;

  return (
    <div className="w-full text-white ">
      <div className="relative pb-full w-full">
        <div className="relative pb-[100%] w-full rounded-xl ">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            src={img}
            alt={name}
          />
        </div>
      </div>
      <div className="bg-gray-700 space-y-2 rounded-b-xl px-2 py-1">
        <div className="flex items-center  justify-between">
          <p className="capitalize py-1">{name}</p>
          <div>sdfsd</div>
        </div>
        <div className="h-[1px] w-full bg-white" />
        <div className="flex items-center justify-between">
          <p className="text-xs opacity-70">Price</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

const Explore = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
        {mockProducts.map(({ name, img, id, price }) => (
          <ExploreCard key={id} name={name} img={img} price={price} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
