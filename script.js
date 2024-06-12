
// user stories:
// -moving image of pitcher
// -baseball image at different rotations
// -sound effects (if have times)
// -computer selects random word from list
// -user enters letter when pitcher throws
// -strike count goes up if user wrong and letter added to wrong letters
// -letter added to display and strikes reset if answers correct letter





const wordArray = ["BAT", "BALL", "HIT", "RUN", "BUNT", "CATCH", "STEAL", "SLIDE", "TAG", "WALK", "BASE", "DIVE", "FOUL", "GLOVE", "PITCH", "UMP", "ZONE", "CURVE", "SWING", "OUT", "HOME", "LINE", "PLAY", "TEAM", "FAIR", "TOSS", "DIRT", "SAFE"];



let word = wordArray[Math.floor(Math.random() * wordArray.length)];
console.log(word);

/*
query select display for wrong letters, strikes, start game screen, instructions screen, and end graphics
querySelector the buttons individually!!!

query select audio and any other graphics

//declare the functions

toggle home screen ()
    home.setAttribute('class', 'toggle')

toggle instructions ()
    instructions.setAttribute('class', 'toggle')

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


toggle input screen ()

get user guess ()
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

play again or quit ()
    


toggle end graphics ()
    IF display.length === word.length
        endGraphicsEl.innerHTML = 'congrats etc...';
        play again or quit ()
    ELSE    
        endGraphicsEl.innerHTML = 'you loose etc...';
        play again or quit ()


reset all ()
    remove displays ()
    reset strikes ()
    reset wrong letters ()
    toggle end graphics ()

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


onclick of play game. toggle instructions ()
onclick of start 
*/ 

