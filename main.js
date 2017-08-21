/*
console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);
*/

var cards = [{rank: "queen", suit: "hearts", cardImage: "images/queen-of-hearts.png"}, {rank: "queen", suit: "diamonds", cardImage: "images/queen-of-diamonds.png"}, {rank: "king", suit: "hearts", cardImage: "images/king-of-hearts.png"}, {rank: "king", suit: "diamonds", cardImage: "images/king-of-diamonds.png"}];
var cardsInPlay = [];

  function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again.");
    }
  }
  function flipCard(cardId) {
    var cardId = this.getAttribute("data-id");
	  var card = cards[cardId];
	    this.setAttribute("src", card.cardImage);
	    this.setAttribute("class", "clicked");
	    console.log(this);
	      cardsInPlay.push(card.rank);
	        if (cardsInPlay.length === 2) {
		        checkForMatch();
	        }
  }
  function createBoard() {
    for(var i = 0; i < cards.length; i++) {
      var cardElement = document.createElement("img");
		      cardElement.setAttribute("src", "images/back.png");
		      cardElement.setAttribute("data-id", i)
		      cardElement.addEventListener("click", flipCard);
		  var board = document.getElementById("game-board");
		    board.appendChild(cardElement);
    }
  }
  var resetGame = function(){
	score = 0;
	document.getElementById("score").textContent = score;
	result.textContent = "Ready for a new game??";
	flipBack();
};

createBoard();
document.querySelector("button").addEventListener("click", resetGame);
