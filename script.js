
// user stories:
// -moving image of pitcher
// -baseball image at different rotations
// -sound effects (if have times)
// -computer selects random word from list
// -user enters letter when pitcher throws
// -strike count goes up if user wrong and letter added to wrong letters
// -letter added to display and strikes reset if answers correct letter





const wordArray = ["BAT", "BALL", "HIT", "RUN", "BUNT", "CATCH", "STEAL", "SLIDE", "TAG", "WALK", "BASE", "DIVE", "FOUL", "GLOVE", "PITCH", "UMP", "ZONE", "CURVE", "SWING", "OUT", "HOME", "LINE", "PLAY", "TEAM", "FAIR", "TOSS", "DIRT", "SAFE"];





const wrongLettersListEl = document.getElementById('wrong-letters-list');
const strikesEl = document.getElementById('strikes');
const homeScreenEl = document.getElementById('home-screen');
const playGameButtonEl = document.getElementById('play-game-button');
const instructionsEl = document.getElementById('instructions');
const startButtonEl = document.getElementById('start-button');
const inputPopupEl = document.getElementById('input-popup');
const inputBoxEl = document.getElementById('input-box');
const inputButtonEl= document.getElementById('input-button');
const endGraphicsEl = document.getElementById('end-graphics');
const endGraphicsTextEl = document.getElementById('end-graphics-text');
const endGraphicsButtonsEls = document.querySelectorAll('.end-graphics-button');

//inputButtonEl.addEventListener('click', () => console.log(inputBoxEl.value));


const toggleHomeScreen = () => {
    homeScreenEl.classList.toggle('toggle');
}

const toggleInstructions = () => {
    instructionsEl.classList.toggle('toggle');
}

const toggleInputPopup = () => {
    inputPopupEl.classList.toggle('toggle');
}

const createDisplays = () => {
    let word = wordArray[Math.floor(Math.random() * wordArray.length)];
    for () {
        
    }
}


/*


create display function ()
    in the flexbox container
    word = random word ()
    for every character in word
        let idOfEl = 0
        create element in container
        setattribute of element in container with id of idOfEl
        setattricut of element in container with class of displayEl (make sure displayEl has a class in the css sheet with a line at the bottom)
        idforchar +=1

remove display function ()
    displays.remove();

add to displays function (userGuess)
    for i in userGuess //which is a string
        if userGuess[i] === userguess
            displays[i].textContent = userguess[i]  //adding userGuess to display with id of i

get user guess ()
    toggle input pop up ()
    add event listener for input and use e.target.value to find what letter was entered
        input.textContent = '';
        return guess

change strikes function ()
    if strikes === 0
        strikesEl.textContent = "Strikes: X"
    etc...

reset strikes function ()
    strikesEl.textContent = "Strikes: "

add to wrong letters ()
    createElement from userGuess
    append element to unordered list (create this in html first)

reset wrong letters ()
    clear unordered list

reset all ()
    remove displays ()
    reset strikes ()
    reset wrong letters ()

play again or quit ()
    endGraphicsButtonsEls.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (e.target.id === 'play-again-button') {
                    
            } else if (e.target.id === 'quit-button') {
                reset all ()
            }
        });
    });
    
    


toggle end graphics ()
    IF display.length === word.length
        endGraphicsTextEl.textContent = 'You Win!';
        play again or quit ()
    ELSE    
        endGraphicsTextEl.innerHTML = 'Game Over';
        play again or quit ()


start ()
    while strikes < 3 and correct < random word length
        create display ()
        let displays = document.querySelectorAll('.display');
        toggle instructions ()
        userGuess = get user guess() 
        IF guess is in word
            THEN bat crack noise and crowd cheer
            add to displays ()
            correct += 1
            strikes = 0
            reset strike display ()
        ELSE
            add to wrong letters ()
            strikes += 1
            add to strike display()

    toggle input popup ()
    toggle end graphics

onclick of play game. toggle instructions ()
onclick of start 
*/ 

