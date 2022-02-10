import { VFC } from 'react';
import * as Styled from './styled';

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
        <Styled.TitleContainer>
          <Styled.TableCell>
            <div className="container">
              <Styled.Announcement>
                <Styled.SubTitle>
                  The Wedding
                </Styled.SubTitle>
                <Styled.MetaTitle>
                  of
                </Styled.MetaTitle>
                <Styled.Title>Anne-Marie &amp; Hampton</Styled.Title>
                <Styled.DateContainer>
                  <Styled.DateElement>&nbsp;4 1 2023&nbsp;</Styled.DateElement>
                </Styled.DateContainer>
              </Styled.Announcement>
            </div>
          </Styled.TableCell>
        </Styled.TitleContainer>
      </Styled.Cover>
    </Styled.Container>
  );
};

export default Hero;
