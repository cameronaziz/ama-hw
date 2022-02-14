import Pages from '~/pages';
import { Page } from '../components/layout';

const Index = () => {
  return (
    <Page>
      <Pages.Hero />
      <Pages.Couple />
      <Pages.Gallery />
      <Pages.Footer />
    </Page>
  );
};

export default Index;
