import Image from 'next/image';
import React from 'react';

const timeTabs = [
  {
    name: 'Today',
  },
  {
    name: 'This Week',
  },
  {
    name: 'This Month',
  },
  {
    name: 'This Year',
  },
];

const mockProducts = [
  {
    id: 1,
    name: 'the lightini love',
    price: '5.55',
    issuer: {
      name: 'Daniel',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/4.jpg',
    },
    endingTime: '2022-04-30T08:59:00.000Z',
    img: 'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    name: 'the lightini love',
    price: '5.55',
    endingTime: '2022-04-30T08:59:00.000Z',
    issuer: {
      name: 'Daniel',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/4.jpg',
    },
    img: 'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    name: 'the lightini love',
    price: '5.55',
    endingTime: '2022-04-30T08:59:00.000Z',
    issuer: {
      name: 'Daniel',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/4.jpg',
    },
    img: 'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    name: 'the lightini love',
    price: '5.55',
    endingTime: '2022-04-30T08:59:00.000Z',
    issuer: {
      name: 'Daniel',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/4.jpg',
    },
    img: 'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
];

interface TrendingCardProps {
  name: string;
  price: string;
  img: string;
  endingTime: string;
  issuer: {
    name: string;
    avatar: string;
  };
}
const TrendingCard = (props: TrendingCardProps) => {
  const { img, name, price, issuer, endingTime } = props;
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
        <div className="absolute bottom-0 max-w-[200px] truncate text-xs translate-y-1/2 left-1/2 transform border border-white border-solid px-2 py-1 rounded-full -translate-x-1/2">
          {endingTime}
        </div>
      </div>
      <div className="bg-gray-700 space-y-2  rounded-b-xl px-2 pb-1 pt-2">
        <div className="flex items-center  justify-between">
          <p className="capitalize py-1">{name}</p>
          <Image
            width={25}
            height={25}
            objectFit="cover"
            className="rounded-full"
            src={issuer?.avatar}
            alt={issuer?.name}
          />
        </div>
        <div className="h-[1px] w-full bg-white opacity-30" />
        <div className="flex items-center py-2 justify-between">
          <p className="text-xs">{price}</p>
          <button className="text-xs border border-solid border-white px-2 py-1 rounded-full">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

const TrendingCreators = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
        {mockProducts.map(({ name, img, id, price, issuer, endingTime }) => (
          <TrendingCard
            key={id}
            issuer={issuer}
            name={name}
            img={img}
            price={price}
            endingTime={endingTime}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingCreators;
