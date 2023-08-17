// SHUFFLE
export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// GENERATE CARDS
export const shuffleCards = (characters, setShuffledImages) => {
  const images = shuffle.bind(null, characters.concat(characters));
  setShuffledImages(images);
};

// CHECK FLIPPED IMAGES
export const checkFlippedImages = (
  card,
  index,
  selectedCards,
  selectedCardsId,
  setSelectedCards,
  setSelectedCardsId,
  setIdenticalCards
) => {
  if (selectedCardsId.length === 1 && selectedCardsId[0] === index) {
    return;
  }

  if (selectedCards.length < 2) {
    setSelectedCards((selectedCard) => selectedCard.concat(card));
    setSelectedCardsId((selectedCardId) => selectedCardId.concat(index));

    if (selectedCards?.length === 1) {
      if (selectedCards[0] === card) {
        setIdenticalCards((identicalCards) =>
          identicalCards.concat([selectedCards[0], card])
        );
      }

      setTimeout(() => {
        setSelectedCardsId([]);
        setSelectedCards([]);
      }, 500);
    }
  }
};

// NEEDED IN CARD.JS
export const isCardSelected = (
  card,
  index,
  selectedCardsId,
  identicalCards
) => {
  return selectedCardsId.includes(index) || identicalCards.includes(card);
};

// RESET
export const reset = (
  setSelectedCardsId,
  setSelectedCards,
  setIdenticalCards
) => {
  setSelectedCardsId([]);
  setSelectedCards([]);
  setIdenticalCards([]);
};
