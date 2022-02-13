import Gallery from '~/pages/gallery';
import Hero from '~/pages/hero';
import { Page } from '../components/layout';
import Couple from '../pages/couple';

const Index = () => {
  return (
    <Page>
      <Hero />
      <Couple />
      <Gallery />
    </Page>
  );
};

export default Index;
