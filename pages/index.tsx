import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Category from '../components/home/Category';
import Explore from '../components/home/Explore';
import LiveAuction from '../components/home/LiveAuction';
import SectionWrapper from '../components/home/SectionWrapper';
import StepsToCreate from '../components/home/StepsToCreate';
import TrendingCollectors from '../components/home/TrendingCollectors';
import TrendingCreators from '../components/home/TrendingCreators';
import styles from '../styles/Home.module.css';

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

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="  h-screen bg-home-hero w-full bg-no-repeat bg-cover bg-opacity-10">
        <div>sdfhoishoi</div>
        {/* <div className="custom-shape-divider-bottom-1645760209">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div> */}
      </section>
      <SectionWrapper
        title="Explore by category"
        description="Artist highlihed with thier best of this week"
      >
        <Category />
      </SectionWrapper>
      <SectionWrapper
        title="Explore NTF's Art"
        description="Artist highlihed with thier best of this week"
        rightTools={
          <ul className="flex text-white items-center space-x-5">
            {timeTabs.map(({ name }) => (
              <li key={name}>
                <button className="text-xs rounded-full px-4 py-2 border-solid border-[1px] border-white">
                  {name}
                </button>
              </li>
            ))}
          </ul>
        }
      >
        <Explore />
      </SectionWrapper>
      <SectionWrapper
        title="Live Auction"
        description="Most valued Fine Arts on sale Today"
        rightTools={
          <button className="flex text-white items-center space-x-5 border px-4 py-2 text-sm rounded-full border-solid border-white">
            Explore More
          </button>
        }
      >
        <LiveAuction />
      </SectionWrapper>
      <SectionWrapper
        title="Trending Creators"
        description="Artists highlieted with theri best of work"
        rightTools={
          <button className="flex text-white items-center space-x-5 border px-4 py-2 text-sm rounded-full border-solid border-white">
            Explore More
          </button>
        }
      >
        <TrendingCreators />
      </SectionWrapper>
      <SectionWrapper
        title="Easy steps to create and sell your NFT"
        description="NFT steps"
        titlePosition="center"
      >
        <StepsToCreate />
      </SectionWrapper>
      <SectionWrapper
        title="Trending Collectors"
        description="NFT steps"
        rightTools={
          <button className="flex text-white items-center space-x-5 border px-4 py-2 text-sm rounded-full border-solid border-white">
            Explore More
          </button>
        }
      >
        <TrendingCollectors />
      </SectionWrapper>
    </div>
  );
};

export default Home;
