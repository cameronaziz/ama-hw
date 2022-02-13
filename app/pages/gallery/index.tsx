import { useRef, VFC } from 'react';
import { Container } from '../../components/layout';
import FILES from './files';
import shuffle from './shuffle';
import { Image, Images } from './styled';

const Gallery: VFC = () => {
  const filesRef = useRef(shuffle(FILES));

  return (
    <Container>
      <Images>
        {filesRef.current.map((file) =>
          <Image key={file} src={`images/content/${file}`} />
        )}
      </Images>
    </Container>
  );
};

export default Gallery;
