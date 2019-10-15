**- MEMORY CARD GAME -**
**- MATCH-MATCH -**


HTML/CSS3/JavaScript

**Interactive-Frontend-Development - Code Institute – Second Milestone Project**

This project has been designed to test my knowledge of last two modules stuedied at Code Institue: Javascript Fundamentals & Interactive Frontend Development.

Aim of this application is to entertain and to challenge user's memory skills by attempting to match all the cards. The webpage is space themed.  There is no age restriction for this game, but it will be more enjoyable by children with some basic understanding of computing. 

Give it a go [here](https://sneachda.github.io/memory-game-ms2/ "here")


**UX**

I had couple of goals in mind while designing this project. Main purpouse was to test player's memory skills. There is a pretty generous time given to complete the challenge: 60 seconds. The application also counts clicks/flips of the cards and at the end, if all cards are matched, a screen will tell you how long person took and how many times cards were flipped.

*Design*

This project has been designed to be responsive on all platfomrs most commonly used today (mobiles, iPads and laptops). I decided to restrict the amount of cards to 16 only, so there is not too much scrolling needed on smaller devices. Player also has an option to play in landscape mode. 

*Font and Color Scheme*

As the total theme of this webpage is space/universe, I decided to opt out for a little bit of an unusal fonts that would meet the needs. I found saurce online which provided me with True Font called **Tr2n**. I also took a font called **Orbitron** from Google Fonts. I believe both of them work well together.

Colors also had to match the theme running, so I decided to use a bit darker palette. With the help of [Coolors.co](https://coolors.co/2b061e-d2bf55-ffeed6-fbbfca-6d6875) webpage that generates colors which are well balanced together, I picked grays/blues/and puplules - they all blend well togther. 

*Logo*

I created a logo using picture of the moon blended with one of the colors used as a background. With CSS styling and special font used, I managed to make page tile stand out and hopefully it will invite people to try out the game. 

*Wireframe:*

design

drawings

**FEATURES**

*Overlays*

When page is loaded at first, overlay with 'Click to Start' appears with opeque background.

Game starts as soon as this is clicked. Overlay disapperas, clock starts counting down. 

The same kind of overlay appears when there is a victory or game over, with an approperiate text. 

If the game is won, vicotry screen will let user know how long they took to compete it and how many moves they made. There is an option to restart the game.

Game over overlay also gives a player a chance to restart it. 

*Main Page*

This is a single, responsive design, webpage application. Main game information is located on the top of the page. To the left you will find clock and to the right flip counter. In the center there is a pop up modal which includes rules. As the clock starts automaticaly after hiding overlay, if rules button is called, timer will pause. 
Game board consist of 16 cards. On smaller device,s size of the cards is reduced and they are organised in 2 colums. On bigger screens there are 4 columns. 
There is a low music running in the background of the application, with approperiate sound bites attached to different functions.

*Game Play*
On the game board, only one card is allowed to turn at a time and after the second card dealt, the deck is blocked to prevent the player from being able to flip other cards.
After checking that the two cards are the same, the cards remain turned and locked.
If the two cards are different, they are dealt face down again and released for further attempts.
After all cards match the game is over and the result screen is displayed.
If time runs out before all cards match, the game over screen is displayed.

**Features Left to Implement**

In the future I would like to add on this project:

New functions and menus - I would definetley like to expand the game to make it more challenging to the player. Possibly look into adding different levels.

LeaderBoard - Implement a database so I can create and manage a leaderboard.

A further idea is to create a mobile version that runs natively on Android and IOS.


**Technology Used**
The following was used to create the website:

HTML, CSS & Javascript ~ main languages used to create this single-page application game.

[PyCharm](http://https://www.jetbrains.com/pycharm/ "PyCharm") - coding platform that was used for the coding and storing a local repository.
[GitHub]() - this project uses GitHub to store and share all project code remotely. GitHub Pages is used to hosting the project live demo.

[Bootstrap](http://https://www.bootstrapcdn.com/ "Bootstrap") - used to simplify the structure and to make it responsive.

[FontAwesome](http://https://fontawesome.com/ "FontAwesome") - accessed for social media icons.

[jquery](http://https://jquery.com/ "jquery") - used to reference Javascript modal

[Google Fonts](http://https://fonts.google.com/ "Google Fonts") - used to style the website fonts.

TrueType font type - downloaded to create page title.

[Adobe XD](http://https://www.adobe.com/uk/products/xd.html?sdid=88X75SKR&mv=search&ef_id=Cj0KCQjwuZDtBRDvARIsAPXFx3CkjvkCMAGlNMBo5sLiFbGiWlBD_JhHCMMfJRGOsp8QwQMTbKwrj8AaAuOVEALw_wcB:G:s&s_kwcid=AL!3085!3!340667162876!e!!g!!adobe%20xd "Adobe XD") - tool used to create wireframe.


**TESTING**

The code has been validated using:

[W3C Mark-up Validation Service](https://validator.w3.org/ "W3C Mark-up Validation Service")

[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/ "W3C CSS Validation Service")

[JSHint](https://jshint.com "JSHint")

This site has met the objective of creating online presence with minimalistic design and content, but providing enough information and platform to enable fast contact.

All links included on this website have target=_blank attribute added, which means they will open in a new tab. That permits users to simply get back where they were within my page. All links have been manually tested to make sure they are linked to correct destination.

The website has been tested across multiple browsers (Chrome, Safari, FireFox) and across different screen sizes (Galaxy C5, various iPhones, Huawei, iPad, iPad Pro and laptops) to make sure is responsive. Bootstrap and CCS Grid has been used to achieve this.

On bigger screens (min 992px and up) you will be able to see 

Sections have 4 columns, displayed next to each other, but on smaller screens it changes to 2 on top of 2.

All fonts, images and other attributes have been changed accordingly to fit different screen sizes. Media queries have been used to make them work.



**DEPLOYMENT**

The site was developed using PyCharm. Using version control in PyCharm I was able to commit and push to GitHub.

**Those steps were taking in order to deploy my page from GitHub repository:**

1. On Github navigate to [sneachda/memory-game-ms2](https://github.com/sneachda/memory-game-ms2 "sneachda/memory-game-ms2")
2.  From the menu at the top click on settings
3.  Scroll down to the GitHub pages section
4. Under Source section click on dropdown menu and select Master Branch as your GitHub pages publishing source.
5. Select save.

**To create a local repository please follow those steps:**

1. Go to [Github Project Repository](https://github.com/sneachda/memory-game-ms2 "Github Project Repository")
2. Under the repository name click Clone or download
3. In the 'Clone with HTTPs section' clone URL for the repository.
4. Open Git Bash in your local platform.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type git clone, and then paste the URL copied earlier: git clone https://github.com/sneachda/memory-game-ms2.git
7. - After pressing ENTER your local clone will be created.


**MEDIA**

All pictures included in this project have been taken from official NASA website: https://solarsystem.nasa.gov/planets/overview/

Audio has been downloaded from open saurce pages. 
Background music has been purchased from http://bandcamp.com : Tannhauser Gate, digital track by Aleks Michalski


**ACKNOWLEDGMENTS**

The ....... inspired the layout.

I have based my hover effect over images in project section on code I came across on CodePen

Special thanks to all students active on Slack for their support and to Maranatha Ilesanmi - my course mentor, for all the useful tips :)

**DISCLAIMER**

*The content of this website is for educational purposes only.*
