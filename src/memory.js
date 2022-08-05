class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    console.log(this.cards);
    if(!this.cards) {
      return undefined;
    }
      
      let currentIndex = this.cards.length 
      let randomIndex;
    
      
      while (currentIndex != 0) {
    
        randomIndex = Math.floor(Math.random() * currentIndex);
        
        currentIndex--;
        
        [this.cards[currentIndex], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[currentIndex]];
      }
      console.log("these cards: ", this.cards)
      return this.cards;
    
  }


  checkIfPair(card1, card2) {
    // ... write your code here
      if (card1 === card2) {
        this.pairsClicked += 1;
        this.pairsGuessed += 1;
        return true;
      } else if (card1 !== card2) {
        this.pairsClicked =+ 1;
        return false;
      }
   
  }

  checkIfFinished() {
    // ... write your code here
    if ((this.cards.length/2) !== this.pairsGuessed){
      return false;
    } else if ((this.cards.length/2)  === this.pairsGuessed) {
      return true;
    }

 
  }
}

