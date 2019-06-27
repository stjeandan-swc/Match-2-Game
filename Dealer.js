// The dealer class will shuffle the deck and deal the cards out.

let cardDeck = new CardDeck();
cardDeck.buildCardArray();
cardDeck.deckBuilder();

class Dealer
{
  constructor()
  {
    this.cardSlots = [];
    this.currentDeck = [];
    this.shuffledDeck = [];
  }

  // Create an array for the positions/Elements by their element id's
  getPositions()
  {
    this.cardSlots[0] = document.getElementById("A1");
    this.cardSlots[1] = document.getElementById("A2");
    this.cardSlots[2] = document.getElementById("A3");
    this.cardSlots[3] = document.getElementById("A4");
    this.cardSlots[4] = document.getElementById("A5");
    this.cardSlots[5] = document.getElementById("A6");
    this.cardSlots[6] = document.getElementById("B1");
    this.cardSlots[7] = document.getElementById("B2");
    this.cardSlots[8] = document.getElementById("B3");
    this.cardSlots[9] = document.getElementById("B4");
    this.cardSlots[10] = document.getElementById("B5");
    this.cardSlots[11] = document.getElementById("B6");
    this.cardSlots[12] = document.getElementById("C1");
    this.cardSlots[13] = document.getElementById("C2");
    this.cardSlots[14] = document.getElementById("C3");
    this.cardSlots[15] = document.getElementById("C4");
    this.cardSlots[16] = document.getElementById("C5");
    this.cardSlots[17] = document.getElementById("C6");
    this.cardSlots[18] = document.getElementById("D1");
    this.cardSlots[19] = document.getElementById("D2");
    this.cardSlots[20] = document.getElementById("D3");
    this.cardSlots[21] = document.getElementById("D4");
    this.cardSlots[22] = document.getElementById("D5");
    this.cardSlots[23] = document.getElementById("D6");
    this.cardSlots[24] = document.getElementById("E1");
    this.cardSlots[25] = document.getElementById("E2");
    this.cardSlots[26] = document.getElementById("E3");
    this.cardSlots[27] = document.getElementById("E4");
    this.cardSlots[28] = document.getElementById("E5");
    this.cardSlots[29] = document.getElementById("E6");
    this.cardSlots[30] = document.getElementById("F1");
    this.cardSlots[31] = document.getElementById("F2");
    this.cardSlots[32] = document.getElementById("F3");
    this.cardSlots[33] = document.getElementById("F4");
    this.cardSlots[34] = document.getElementById("F5");
    this.cardSlots[35] = document.getElementById("F6");
  }

  //Randomizes the Positions of the cards in the deck.
  shuffleCardDeck()
  {
    this.shuffledDeck = [];
    var randCard;
    this.currentDeck.push.apply(this.currentDeck, cardDeck.getUnshuffledDeck());

    for(var i = this.currentDeck.length -1; i >= 0; i--)
    {
      randCard = this.currentDeck.splice(Math.floor(Math.random() * this.currentDeck.length), 1)[0];

      this.shuffledDeck.push(randCard);
    }
  }

  //Takes the randomized deck and sets them to the elements by id locations in the doc.
  dealOutCards()
  {
    for(var i = 0; i < this.shuffledDeck.length; i++)
    {
      var card = this.shuffledDeck[i].getImage();
      var slot = this.cardSlots[i];

      slot.style.backgroundImage = "url(" + card + ".png)";
    }
  }

  getshuffledDeck()
  {
    return this.shuffledDeck;
  }

  emptyDeck()
  {
    this.shuffledDeck = this.shuffledDeck.splice(0, this.shuffledDeck.legnth)[0];
  }
}
