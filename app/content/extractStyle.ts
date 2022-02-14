import { Sizes } from 'styled-components';

const extractSize = (size: Sizes[keyof Sizes]) =>
  parseInt(size.replace('px', ''));

export const addSizes = (...size: Sizes[keyof Sizes][]) =>
  size.reduce((acc, curr) => {
    const extractedSize = extractSize(curr);
    return acc + extractedSize;
  }, 0);

export default extractSize;
