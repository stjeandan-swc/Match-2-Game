
// Declaring all the cards that will make up the full Deck, Total of: 36.
let card1A = new Card();
let card1B = new Card();
let card2A = new Card();
let card2B = new Card();
let card3A = new Card();
let card3B= new Card();
let card4A = new Card();
let card4B = new Card();
let card5A = new Card();
let card5B = new Card();
let card6A = new Card();
let card6B = new Card();
let card7A = new Card();
let card7B = new Card();
let card8A = new Card();
let card8B = new Card();
let card9A = new Card();
let card9B = new Card();
let card10A = new Card();
let card10B = new Card();
let card11A = new Card();
let card11B = new Card();
let card12A = new Card();
let card12B = new Card();
let card13A = new Card();
let card13B = new Card();
let card14A = new Card();
let card14B = new Card();
let card15A = new Card();
let card15B = new Card();
let card16A = new Card();
let card16B = new Card();
let card17A = new Card();
let card17B = new Card();
let card18A = new Card();
let card18B = new Card();

class CardDeck
{
  constructor()
  {
    this.deck = [];
    this.cards = [];
    this.totalCards = 36;
  }

  //Creating an array of the cards/Images associated with them.
  buildCardArray()
  {
    this.cards[0] = card1A;
    card1A.setImage("cardImg/imageOne");
    this.cards[1] = card1B;
    card1B.setImage("cardImg/imageOne");
    this.cards[2] = card2A;
    card2A.setImage("cardImg/imageTwo");
    this.cards[3] = card2B;
    card2B.setImage("cardImg/imageTwo");
    this.cards[4] = card3A;
    card3A.setImage("cardImg/imageThree");
    this.cards[5] = card3B;
    card3B.setImage("cardImg/imageThree");
    this.cards[6] = card4A;
    card4A.setImage("cardImg/imageFour");
    this.cards[7] = card4B;
    card4B.setImage("cardImg/imageFour");
    this.cards[8] = card5A;
    card5A.setImage("cardImg/imageFive");
    this.cards[9] = card5B;
    card5B.setImage("cardImg/imageFive");
    this.cards[10] = card6A;
    card6A.setImage("cardImg/imageSix");
    this.cards[11] = card6B;
    card6B.setImage("cardImg/imageSix");
    this.cards[12] = card7A;
    card7A.setImage("cardImg/imageSeven");
    this.cards[13] = card7B;
    card7B.setImage("cardImg/imageSeven");
    this.cards[14] = card8A;
    card8A.setImage("cardImg/imageEight");
    this.cards[15] = card8B;
    card8B.setImage("cardImg/imageEight");
    this.cards[16] = card9A;
    card9A.setImage("cardImg/imageNine");
    this.cards[17] = card9B;
    card9B.setImage("cardImg/imageNine");
    this.cards[18] = card10A;
    card10A.setImage("cardImg/imageTen");
    this.cards[19] = card10B;
    card10B.setImage("cardImg/imageTen");
    this.cards[20] = card11A;
    card11A.setImage("cardImg/imageEleven");
    this.cards[21] = card11B;
    card11B.setImage("cardImg/imageEleven");
    this.cards[22] = card12A;
    card12A.setImage("cardImg/imageTwelve");
    this.cards[23] = card12B;
    card12B.setImage("cardImg/imageTwelve");
    this.cards[24] = card13A;
    card13A.setImage("cardImg/imageThirteen");
    this.cards[25] = card13B;
    card13B.setImage("cardImg/imageThirteen");
    this.cards[26] = card14A;
    card14A.setImage("cardImg/imageFourteen");
    this.cards[27] = card14B;
    card14B.setImage("cardImg/imageFourteen");
    this.cards[28] = card15A;
    card15A.setImage("cardImg/imageFifteen");
    this.cards[29] = card15B;
    card15B.setImage("cardImg/imageFifteen");
    this.cards[30] = card16A;
    card16A.setImage("cardImg/imageSixteen");
    this.cards[31] = card16B;
    card16B.setImage("cardImg/imageSixteen");
    this.cards[32] = card17A;
    card17A.setImage("cardImg/imageSeventeen");
    this.cards[33] = card17B;
    card17B.setImage("cardImg/imageSeventeen");
    this.cards[34] = card18A;
    card18A.setImage("cardImg/imageEighteen");
    this.cards[35] = card18B;
    card18B.setImage("cardImg/imageEighteen");
  }

  //Building an unshuffled array/deck to be used by the dealer class.
  deckBuilder()
  {
    var cardIndex = 0;

    for(var i = 0; i < this.totalCards; i += 2, cardIndex += 2)
    {
      this.deck[i] = this.cards[cardIndex];
      this.deck[i +1] = this.cards[cardIndex +1];
    }
    return this.deck;
  }

  getUnshuffledDeck()
  {
    return this.deck;
  }
}
