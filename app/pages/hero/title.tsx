import { VFC } from 'react';
import * as Styled from './styled';
const Title: VFC = () => {
  return (
    <Styled.TitleContainer>
      <Styled.TableCell>
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
      </Styled.TableCell>
    </Styled.TitleContainer>
  );
};

export default Title;
