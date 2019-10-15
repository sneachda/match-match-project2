//variables declaring different sound sources used throughout game
let bgMusic = new Audio('assets/audio/bgmusic.mp3');
bgMusic.volume = 0.1;
bgMusic.loop = true;
let flipSound = new Audio ('assets/audio/flip.wav');
flipSound.volume = 0.3;
let matchSound = new Audio('Assets/Audio/match.wav');
matchSound.volume = 0.2;
let winSound = new Audio('Assets/Audio/win.mp3');
winSound.volume = 0.2;
let gameOverSound = new Audio('Assets/Audio/game-over.mp3');
gameOverSound.volume = 0.2;

//different variables declared needed for for game to work
let cards = Array.from(document.getElementsByClassName('memory-card'));
let matchedCards = [];
let flippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

//variables needed to start clock countdown
let totalTime = 60;
let timer = document.getElementById('time');

//variables needed to start counting flips
let totalClicks = 0;
let ticker = document.getElementById('flips');
let countdown;

//event listener added to all three overlays - when clicked game page appears and it starts
let overlays = Array.from(document.getElementsByClassName('front-page'));
overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            restartGame();

        });
    });

//functions

function restartGame() {
//restart game function only called when called from overlay pages
//all parameters are cleared

    shuffle();
    hideCards();
    bgMusic.play();
    totalClicks = 0;
    ticker.innerText = totalClicks;
    totalTime = 60;
    timer.innerText = totalTime;
    countdown = setInterval(startClock, 1000);
    cards.forEach (card => {
        card.addEventListener('click', flipCard);
    });
}



function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    totalClicks++;
    ticker.innerText = totalClicks;

    this.classList.add('flip');
    flipSound.play();


    if (!flippedCard) {
        //first click
        flippedCard = true;
        firstCard = this;
    } else {
        //second click
        flippedCard = false;
        secondCard = this;

        checkIfMatch();
        }
}


function checkIfMatch() {
//match?
        if (firstCard.dataset.name ===
        secondCard.dataset.name) {
            //match!
            disabledCards();

        } else {
            unflipCards();
        }
}

function disabledCards(){
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
            matchSound.play();
            matchedCards.push(firstCard);
            matchedCards.push(secondCard);
            //each matched card is sent to matchedCards array
            if (matchedCards.length === 16)
                victory();
            //when all 16 cards are flipped and matched, player has won


}

function unflipCards(){
    //not a match
    lockBoard = true;
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');

                startGame();
                //cards are not matched, startGame function is called

            }, 1000);
}


function startGame(){
    [FlippedCard, lockBoard] = [false,false];
    [firstCard, secondCard] = [null,null];
}



function hideCards() {
    //hides all cards when restarting the game
    cards.forEach (card => {
        card.classList.remove('flip');
    });
}



function startClock(){
//timer countdown function
        totalTime--;
        timer.innerText = totalTime;
        if(totalTime <= 0)
               gameOver();
        //if cards not matched within 60 seconds,
        //gameOver function is called
}


 function gameOver() {
      gameOverSound.play();
      clearInterval(countdown);
       bgMusic.pause();
       document.getElementById('game-over').classList.add('visible');
   }


function victory() {
    clearInterval(countdown);
      winSound.play();
       bgMusic.pause();
       document.getElementById('victory').classList.add('visible');
       document.getElementById("finalFlips").innerHTML = totalClicks;
}

function shuffle(){
//function called with each reload of the page
//shuffle the deck into random positions
    cards.forEach(card => {
        let random = Math.floor(Math.random() *16);
        card.style.order = random;
    });
}


//modal instructions, based on knowledge from w3schools

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

