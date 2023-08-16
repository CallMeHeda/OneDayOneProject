// SHUFFLE
export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// GENERATE CARDS
export function shuffleCards(characters, setShuffledImages) {
  const images = shuffle.bind(null, characters.concat(characters));
  setShuffledImages(images);
}
