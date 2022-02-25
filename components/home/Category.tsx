import Image from 'next/image';
import React from 'react';

const categories = [
  {
    title: 'Videos',
    description: 'sdflksdjfiosdjaiosdjkdalskdmasdaojoi',
    icon: 'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    link: 'videos',
  },
  {
    title: 'Games',
    description: 'sdflksdjfiosdjaiosdjkdalskdmasdaojoi',
    icon: 'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    link: 'games',
  },
  {
    title: 'Sports',
    description: 'sdflksdjfiosdjaiosdjkdalskdmasdaojoi',
    icon: 'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    link: 'sports',
  },
  {
    title: 'Arts',
    description: 'sdflksdjfiosdjaiosdjkdalskdmasdaojoi',
    icon: 'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    link: 'arts',
  },
  {
    title: 'Photography',
    description: 'sdflksdjfiosdjaiosdjkdalskdmasdaojoi',
    icon: 'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    link: 'photography',
  },
  {
    title: 'Music',
    description: 'sdflksdjfiosdjaiosdjkdalskdmasdaojoi',
    icon: 'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    link: 'music ',
  },
  {
    title: 'Collectibles',
    description: 'sdflksdjfiosdjaiosdjkdalskdmasdaojoi',
    icon: 'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    link: 'collectibles',
  },
  {
    title: 'NFT worlds',
    description: 'sdflksdjfiosdjaiosdjkdalskdmasdaojoi',
    icon: 'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    link: 'nft-worlds',
  },
  {
    title: 'Trending cards',
    description: 'sdflksdjfiosdjaiosdjkdalskdmasdaojoi',
    icon: 'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    link: 'trending-cards',
  },
  {
    title: 'D cards',
    description: 'sdflksdjfiosdjaiosdjkdalasdasdasdasdskdmasdaojoi',
    icon: 'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    link: 'trending-cards',
  },
  {
    title: 'asda cards',
    description: 'sdflksdjfiosdjaiosdjkdalskdmasdaojoi',
    icon: 'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    link: 'trending-cards',
  },
];

const Category = () => {
  return (
    <div className="text-white">
      <div className="grid grid-cols-2 gap-10  md:grid-cols-4 lg:grid-cols-6">
        {categories.map(({ title, description, icon, link }) => (
          <div
            key={title}
            className="flex flex-col items-center rounded-lg w-full text-center bg-gray-700 text-white"
          >
            <Image
              width={60}
              height={60}
              className="rounded-full"
              src={icon}
              alt={title}
            />
            <p className="text-xs max-w-[80px]">{description}</p>
            <button className="bg-black rounded-full px-3 py-2 text-sm">
              {title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
