**- MEMORY CARD GAME -**

**- MATCH-MATCH -**


------------


**Interactive-Frontend-Development - Code Institute – Second Milestone Project**


------------


This project has been designed to test my knowledge of last two modules studied at Code Institute: JavaScript Fundamentals & Interactive Frontend Development.

Aim of this application is to entertain and to challenge user's memory skills by attempting to match all the cards in certain amount of time. 
There is no age restriction for this game, but it will be more enjoyable by children with some basic understanding of computing. 

Give it a go [here](https://sneachda.github.io/match-match-project2/ "here")


------------


**UX**

I had a couple of goals in mind while designing this project. Main purpose was to test player's memory skills. There is a pretty generous time given to complete this challenge: 60 seconds. The application also counts clicks/flips of the cards and at the end, if all cards are matched, a screen will inform the player how many moves were made and how long it took. I also used a local storage function to keep track of player's higher score. 

*Design*

This project has been designed to be responsive on all platforms most commonly used today (mobiles, iPads and laptops). I decided to restrict the amount of cards to 16 only, so there is not too much scrolling needed on smaller devices. Player also has an option to play in landscape mode. 

*Font and Colour Scheme*

The theme of this webpage is space/universe. Cards' faces are represented by photos of our solar system (8 planets). I also decided to opt out for a bit of an unusual fonts that would meet the needs. I found source online which provided me with True Font called **Tr2n**. I also took a font called **Orbitron** from Google Fonts. I believe both of them work well together.

Colours also had to match the theme running, so I decided to use darker palette. With the help of [Coolors.co](https://coolors.co/2b061e-d2bf55-ffeed6-fbbfca-6d6875) webpage that generates colours which are well balanced together, I picked greys/blues/and purples.

*Logo*

I created a logo using a picture of the moon blended with one of the colours used as a background. With CSS styling and special font used, I believe the page works well as a whole.  


*Wireframe:*

[designs](https://github.com/sneachda/match-match-project2/tree/master/wireframes "designs")


------------


**FEATURES**

*Overlays*

When page is loaded at first, overlay with 'Click to Start' appears with transparent background.

Game starts as soon as this is clicked. Overlay disappears, clock starts counting down. 

The same kind of overlay appears when there is a victory - all cards are matched,  or game over - time has run out, with an appropriate text. 

If the game is won, victory screen will let user know how long they took to complete it and how many moves they made. There is an option to restart the game.

Game over overlay also gives a player a chance to restart it. 

*Main Page*

This is a single, responsive design, webpage application. 
Main game information is located below game's title. To the left you will find a clock and to the right a flip counter. In the centre there is a pop up modal which includes rules. As the clock starts automatically after hiding overlay, if rules button is called, timer will pause. 
At the centre you will also find high score, which will automatically update when the first game is finished. After that, you need to beat your own score for it to be updated again. It's a local storage function only, so if devices are changed, score will reset.

Game board consist of 16 cards. On smaller devices such as mobile phones, size of the cards is reduced and they are organised in 2 columns. On bigger screens (iPads and laptops) there are 4 columns. 
There is a low music running in the background of the application, with appropriate sound bites attached to different functions.

*Game Play*
- On the game board, only one card is allowed to turn at a time and after the second card dealt, the deck is blocked to prevent the player from further cards flipping.
- After checking that the two cards are the same, the cards stay locked.
- If the two cards are different, they are turned and released for further play.
- After all cards are matched, the game is over and the victory screen is displayed.
- If time runs out before all cards are matched, the game over screen is displayed.


------------



**Features Left to Implement**

In the future I would like to add to this project:

- New functions and menus - I would definitely like to expand the game to make it more challenging to the player. Possibly look into adding different levels.
- Leader Board - implement a database so I can create and manage a leader board.


------------



**Technology Used**

The following was used to create the website:

HTML, CSS & JavaScript - main languages used to create this single-page application game.

[PyCharm](https://www.jetbrains.com/pycharm/ "PyCharm") - coding platform that was used for the coding and storing a local repository.

[GitHub](https://github.com/) - this project uses GitHub to store and share all project code remotely. GitHub Pages is used to hosting the project live demo.

[Bootstrap](https://www.bootstrapcdn.com/ "Bootstrap") - used to simplify the structure and to make it responsive.

[FontAwesome](https://fontawesome.com/ "FontAwesome") - accessed for social media icons.

[jquery](https://jquery.com/ "jquery") - used to reference JavaScript modal

[Google Fonts](https://fonts.google.com/ "Google Fonts") - used to style the website fonts.

TrueType font - downloaded to create page title.

[Adobe XD](https://www.adobe.com/uk/products/xd.html?sdid=88X75SKR&mv=search&ef_id=Cj0KCQjwuZDtBRDvARIsAPXFx3CkjvkCMAGlNMBo5sLiFbGiWlBD_JhHCMMfJRGOsp8QwQMTbKwrj8AaAuOVEALw_wcB:G:s&s_kwcid=AL!3085!3!340667162876!e!!g!!adobe%20xd "Adobe XD") - tool used to create wireframe.


------------



**TESTING**

The code has been validated using:

[W3C Mark-up Validation Service](https://validator.w3.org/ "W3C Mark-up Validation Service")

[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/ "W3C CSS Validation Service")

[JSHint](https://jshint.com "JSHint")

This site has met the objective of creating online presence with minimalistic design and content. It has been tested and updated as different bugs were found along the way. 
I really struggled running this project on Safari. Especially problematic turned to be card flip rotations. I simply forgot to add prefix for all the browsers (webkit, o, moz). After that, game seemed to be working better. I am aware audio is not running perfectly on Safari. After some research, I found this: 
> Safari on iOS (for all devices), where the user may be on a cellular network and be charged per data unit, preload and auto play are disabled. No data is loaded until the user initiates it. This means the JavaScript play() and load() methods are also inactive until the user initiates playback, unless the play() or load() method is triggered by user action.

As technically game is running well on other browsers, sound glitches can go unnoticed on Safari and I decided, for now, to let the problem go. 

Link to the game has been sent out to my friends and family, all seemed to think page is running well and it's fun trying to beat your own score. 

All links included on this website have target=_blank attribute added, which means they will open in a new tab. That permits users to simply get back where they were within my page. All links have been manually tested to make sure they are linked to correct destination.

The website has been tested across multiple browsers (Chrome, Safari, FireFox) and across different screen sizes (Galaxy C5, various iPhones, Huawei, iPad, and laptops) to make sure is responsive. Bootstrap and CCS Grid has been used to achieve this.

All fonts, images and other attributes have been changed accordingly to fit different screen sizes. Media queries have been used to make them work.




------------



**DEPLOYMENT**

The site was developed using PyCharm. Using version control in PyCharm I was able to commit and push to GitHub.

**Those steps were taking in order to deploy my page from GitHub repository:**

1. On Github navigate to [sneachda/match-match-project2](https://github.com/sneachda/match-match-project2 "sneachda/match-match-project2")
2.  From the menu at the top click on settings
3.  Scroll down to the GitHub pages section
4. Under Source section click on dropdown menu and select Master Branch as your GitHub pages publishing source.
5. Select save.

**To create a local repository please follow those steps:**

1. Go to [Github Project Repository](https://github.com/sneachda/match-match-project2 "Github Project Repository")
2. Under the repository name click Clone or download
3. In the 'Clone with HTTPs section' clone URL for the repository.
4. Open Git Bash in your local platform.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type git clone, and then paste the URL copied earlier: git clone https://github.com/sneachda/match-match-project2.git
7. After pressing ENTER your local clone will be created.


------------



**CREDITS**

*Content*

All text in this project was written by the developer.

*Media*

All pictures included in this project have been taken from official NASA website: https://solarsystem.nasa.gov/planets/overview/

Audio has been downloaded from open source pages. 
Background music has been purchased from http://bandcamp.com : Tannhauser Gate, digital track by Aleks Michalski

*Code*

Code for flip Card animation and some functionalities like match cards, resettable, flip and unflip cards, disable and shuffle cards was learned, based and adapted from this video on [FreecodeCamp](https://www.youtube.com/watch?v=ZniVgo8U7ek)

*Idea*
I was inspired by watching CSS tutorials from *Web Dev Simplified*


------------



**ACKNOWLEDGMENTS**

Special thanks to all students active on Slack for their support and to Maranatha Ilesanmi - my course mentor, for all the useful tips :)


------------



**DISCLAIMER**

*The content of this website is for educational purposes only.*
