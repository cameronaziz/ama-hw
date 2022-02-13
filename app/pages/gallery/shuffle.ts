
const random = (seed: number) => {
  var x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

const mur = (str: string) => {
  for (var i = 0, h = 1779033703 ^ str.length; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = h << 13 | h >>> 19;
  }
  h = Math.imul(h ^ (h >>> 16), 2246822507);
  h = Math.imul(h ^ (h >>> 13), 3266489909);
  return (h ^= h >>> 16) >>> 0;
};

const shuffle = (array: string[], seed?: number): string[] => {                // <-- ADDED ARGUMENT
  var m = array.length, t, i;

  let randomSeed = seed || mur(JSON.stringify(array));

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(random(randomSeed) * m--);        // <-- MODIFIED LINE

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
    ++randomSeed                                     // <-- ADDED LINE
  }

  return array;
}

export default shuffle;
