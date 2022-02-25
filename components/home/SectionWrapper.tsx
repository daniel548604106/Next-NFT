import React from 'react';

interface SectionWrapperProps {
  description: string;
  title: string;
  children: React.ReactChild;
  titlePosition?: 'left' | 'center';
  rightTools?: React.ReactNode;
}

const SectionWrapper = (props: SectionWrapperProps) => {
  const {
    title,
    description,
    children,
    titlePosition = 'left',
    rightTools,
  } = props;

  return (
    <section className="home-section">
      <div className={titlePosition === 'left' ? 'text-left' : 'text-center'}>
        <p className="mb-3 md:mb-5 text-gray-600">{description}</p>
        <div
          className={`${
            rightTools ? 'justify-between' : 'justify-center'
          } flex items-center  `}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white">{title}</h2>
          {rightTools ?? null}
        </div>
      </div>
      <div className="mt-5 md:mt-10">{children}</div>
    </section>
  );
};

export default SectionWrapper;
