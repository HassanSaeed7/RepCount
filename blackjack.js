let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");


function getRandomCard() {
    let randomCard = Math.floor( Math.random() * 13 )  + 1
    if (randomCard > 10) {
        return 10;
    } else if (randomCard === 1) {
    return 11;
    } else {
        return randomCard;
    }
} 


function startGame() {
    let isAlive = true; 
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    hasBlackJack = true;
    message = "You've got Blackjack!";
  } else {
    isAlive = false;
    message = "You lose!";
  }
  
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
  cardsEl.textContent += cards[i] + " | "
  }
  
  messageEl.textContent = message;
  
  sumEl.textContent = "Sum: " + sum;
}

function newCard() {
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
}

