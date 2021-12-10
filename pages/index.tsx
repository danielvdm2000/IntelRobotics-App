import type { GetStaticPropsResult, NextPage } from 'next'
import HomePage from '../components/pages/HomePage';
import { getStrapiMedia } from '../lib/client/strapi';
import { sdk } from '../lib/server/sdk';

interface Props {
  title: string;
  slogan: string;
  video: {
    url: string;
  }
}

const Home: NextPage<Props> = props => (
  <HomePage 
    title={props.title}
    slogan={props.slogan}
    backgroundVideo={props.video.url}
  />
);

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const result = await sdk.HomePage();

  if (result.homePage == null) {
    throw new Error("Can't find the content for the home page");
  }

  if (result.homePage.video?.url == null) {
    throw new Error("Can't find the video for the home page");
  }

  return {
    props: {
      ...result.homePage,
      video: {
        url: getStrapiMedia(result.homePage.video.url),
      }
    }
  }
}

export default Home
