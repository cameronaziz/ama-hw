import { VFC } from 'react';
import { FiHeart } from 'react-icons/fi';
import * as Styled from './styled';


const Couple: VFC = () => {
  return (
    <div id="fh5co-couple" className="fh5co-section-gray">
      <div className="container">
        <div className="row row-bottom-padded-md animate-box">
          <div className="col-md-6 col-md-offset-3 text-center">
            <div className="col-md-5 col-sm-5 col-xs-5 nopadding">
              <Styled.ImageContainer>
                <Styled.Image src="images/content/hw.jpeg" alt="Groom Hampton Webb" />
              </Styled.ImageContainer>
              <Styled.PersonName>
                <Styled.PersonNameElement>
                  Hampton
                </Styled.PersonNameElement>
                <Styled.PersonNameElement>
                  Webb
                </Styled.PersonNameElement>
              </Styled.PersonName>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2 nopadding">
              <Styled.HeartContainer className="amp-center">
                <FiHeart />
              </Styled.HeartContainer>
            </div>
            <div className="col-md-5 col-sm-5 col-xs-5 nopadding">
              <Styled.ImageContainer>
                <Styled.Image src="images/content/ama.jpeg" alt="Bride Anne-Marie Albract" />
              </Styled.ImageContainer>
              <Styled.PersonName>
                <Styled.PersonNameElement>
                  Anne-Marie
                </Styled.PersonNameElement>
                <Styled.PersonNameElement>
                  Albract
                </Styled.PersonNameElement>
              </Styled.PersonName>
            </div>
          </div>
        </div>
        <div className="row animate-box">
          <div className="col-md-8 col-md-offset-2">
            <div className="col-md-12 text-center heading-section">
              <Styled.Title>Are Getting Married</Styled.Title>
              <Styled.Announcement>
                <strong>on Dec 28, 2017 &mdash; Charleston, South Carolina</strong>
              </Styled.Announcement>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couple;
