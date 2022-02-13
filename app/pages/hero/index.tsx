import { VFC } from 'react';
import * as Styled from './styled';
import Title from './title';

const Hero: VFC = () => {
  const image = 'images/content/wine-glass.jpeg';

  return (
    <Styled.Container data-section="home">
      <Styled.Overlay />
      <Styled.Cover
        className="text-center"
        data-stellar-background-ratio="0.5"
      >
        <Styled.Image src={image} />
        <Title />
      </Styled.Cover>
    </Styled.Container>
  );
};

export default Hero;
