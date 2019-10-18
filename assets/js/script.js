//variables declaring different sound sources used throughout game
let bgMusic = new Audio('assets/audio/bg-music.mp3');
bgMusic.volume = 0.1;
bgMusic.loop = true;
let flipSound = new Audio('assets/audio/card-flip.mp3');
flipSound.volume = 0.3;
let matchSound = new Audio('assets/audio/match-found.mp3');
matchSound.volume = 0.2;
let winSound = new Audio('assets/audio/victory.mp3');
winSound.volume = 0.2;
let gameOverSound = new Audio('assets/audio/game-is-over.mp3');
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
let minute = 60;
let timeLeft = document.getElementById('finalTime');

//variables needed to start counting flips
let totalClicks = 0;
let ticker = document.getElementById('flips');
let countdown;

//variable needed for getting high score
let highScore;

//as soon as page loads - highScore function is called
getHighScore();

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
//restart game function only called on overlay pages
//all parameters are cleared
    shuffle();
    hideCards();
    getHighScore();
    matchedCards = [];
    bgMusic.play();
    totalClicks = 0;
    ticker.innerText = totalClicks;
    totalTime = 60;
    timer.innerText = totalTime;
    countdown = setInterval(startClock, 1000);
    cards.forEach(card => {
        card.addEventListener('click', flipCard);
    });
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    //Every card click, counter increases +1
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

        //function checking if cards are the same is called
        checkIfMatch();
    }
}

function checkIfMatch() {
    //checking if dataset-name of first card flipped is equal to second card
    if (firstCard.dataset.name === secondCard.dataset.name) {
        //match!
        disabledCards();
    } else {
        unflipCards();
    }
}

function disabledCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    matchSound.play();
    matchedCards.push(firstCard);
    matchedCards.push(secondCard);
    //each matched card is sent to matchedCards array
    if (matchedCards.length === 16) {
        if (!highScore || totalClicks < highScore) {
            localStorage.setItem('matchMatchScore', totalClicks);
        }
        //if the player has flipped cards less times than his previous attempts
        //high score is updated and stored in localStorage
        //when all 16 cards are flipped and matched, player has won
        victory();
    }
}

function unflipCards() {
    //not a match
    lockBoard = true; //lock the board until the card is unfliped
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        startPlay();
        //cards are not matched, startGame function is called
    }, 1000);
}

function startPlay() {
    //reset
    [FlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function startClock() {
//timer countdown function
    totalTime--;
    timer.innerText = totalTime;
    if (totalTime <= 0)
        gameOver();
    //if cards not matched within 60 seconds,
    //gameOver function is called
}

function howFast() {
    //information how long player took to complete the game
    timeLeft = minute - totalTime;
}

function gameOver() {
    //when time runs out gameOver function called
    bgMusic.pause();
    gameOverSound.play();
    clearInterval(countdown);
    document.getElementById('game-over').classList.add('visible');
}

function victory() {
    bgMusic.pause();
    howFast();
    clearInterval(countdown);
    winSound.play();
    document.getElementById('victory').classList.add('visible');
    document.getElementById('finalFlips').innerHTML = totalClicks;
    document.getElementById('finalTime').innerHTML = timeLeft;
}

function hideCards() {
    //hides all cards when restarting the game
    cards.forEach(card => {
        card.classList.remove('flip');
    });
}

function shuffle() {
//function called with each reload of the page
//shuffles deck into random positions
    cards.forEach(card => {
        let random = Math.floor(Math.random() * 16);
        card.style.order = random;
    });
}

function getHighScore() {
    //getting the the high score if has been set
    highScore = localStorage.getItem('matchMatchScore');
    document.getElementById('high-score').innerHTML = highScore;
}

//modal instructions, based on knowledge from w3schools

let modal = document.getElementById('myModal');
let btn = document.getElementById('myBtn');
let span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = 'block';
    clearInterval(countdown);
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = 'none';
    countdown = setInterval(startClock, 1000);
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        countdown = setInterval(startClock, 1000);
    }
};