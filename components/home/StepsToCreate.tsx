import Image from 'next/image';
import React from 'react';

const stepsGuides = [
  {
    title: ' Setup Your Wallet',
    icon: 'https://images.unsplash.com/photo-1645731505493-7a13123374fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    description:
      "Once you're setup your wallet of choice , connect it to OpenSea by clicking the wallet icon inthe top right corner  ",
  },
  {
    title: 'Create your collection',
    icon: 'https://images.unsplash.com/photo-1645731505493-7a13123374fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    description:
      "Once you're setup your wallet of choice , connect it to OpenSea by clicking the wallet icon inthe top right corner  ",
  },
  {
    title: 'Add your NFTs',
    icon: 'https://images.unsplash.com/photo-1645731505493-7a13123374fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    description:
      "Once you're setup your wallet of choice , connect it to OpenSea by clicking the wallet icon inthe top right corner  ",
  },
  {
    title: 'List them for sale',
    icon: 'https://images.unsplash.com/photo-1645731505493-7a13123374fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    description:
      "Once you're setup your wallet of choice , connect it to OpenSea by clicking the wallet icon inthe top right corner  ",
  },
];

const StepsToCreate = () => {
  return (
    <div className="text-white">
      <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
        {stepsGuides.map(({ title, description, icon }) => (
          <div className="space-y-5 flex flex-col items-center" key={title}>
            <Image
              className="rounded-xl"
              src={icon}
              width={80}
              height={80}
              alt={title}
            />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-200">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsToCreate;
