const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

// console.log(memoryGame.shuffleCards());
let count = 0; // COUNTER NEEDED TO GATHER THE CLICKS
window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {

      if (count >= 2) { // this if statment is supposed to disable clicking on cards if the player has clicked 2 cards already
        count = 0;
      
        
        document.querySelectorAll('.card').forEach(card => {
          
      card.disabled = true;
    });
     
          setTimeout(()=>{
            
       
       document.querySelectorAll('.card').forEach(card => {
      card.disabled = false;
    });
          
          }, 5000)
        
      } else { // else for when the count is less than 2
        count =+ 1;
        console.log(count);
      // TODO: write some code here
      console.log(`Card clicked: ${card.innerHTML}`);
      card.classList.toggle('turned');
     
     

      memoryGame.pickedCards.push(card);
     
      if (memoryGame.pickedCards.length === 2) {
        // memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]);
      if (memoryGame.checkIfPair(memoryGame.pickedCards[0].innerHTML, memoryGame.pickedCards[1].innerHTML) === false) {

      console.log("try again");
      

      setTimeout( () => {
      memoryGame.pickedCards[0].classList.toggle("turned");
      memoryGame.pickedCards[1].classList.toggle("turned");
      memoryGame.pickedCards =[];
    }, 1500)

      } else if (memoryGame.checkIfPair(memoryGame.pickedCards[0].innerHTML, memoryGame.pickedCards[1].innerHTML)  === true) {

        console.log("they're matched");
        memoryGame.pickedCards =[];
      }
    }
  }
    console.log({pairsClick: memoryGame.pairsClicked})
    console.log({cardsLength: memoryGame.cards.length})
    console.log({pairsGuessed: memoryGame.pairsGuessed})
      memoryGame.checkIfFinished();
      
    });
  });
});
