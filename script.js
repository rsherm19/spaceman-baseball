/*
user stories:
-moving image of pitcher
-baseball image at different rotations
-sound effects (if have times)
-computer selects random word from list
-user enters letter when pitcher throws
-strike count goes up if user wrong and letter added to wrong letters
-letter added to display and strikes reset if answers correct letter




Psuedocode:

word list = [...]

rand word = find random word

query select display for word, display for wrong letters, and strikes
( )

query select pitcher and baseball

query select audio and any other graphics

declare the functions

onclick of play game. function show instructions 

create display function ()
    in the flexbox container
    for every character in word
        let idOfEl = 0
        create element in container
        setattribute of element in container with id of idOfEl
        setattricut of element in container with class of displayEl (make sure displayEl has a class in the css sheet with a line at the bottom)
        idforchar +=1

remove display function ()
    let elsToDel = select all elements with class of display
    elsToDel.remove();

add to display function (userGuess)
    let displays = document.querySelectorAll('.display');
    for i in userGuess //which is a string
        if userGuess[i] === userguess
            displays[i].textContent = userguess[i]  //adding userGuess to display with id of i


onclick of start.function game
    while strikes < 3 and correct < random word length
        pitcher animation ()
        userGuess = get user guess() 
            add event listener for input and use e.target.value to find what letter was entered
        IF guess is in word
            THEN bat crack noise and crowd cheer
            add guess to display ()
            correct += 1
            strikes = 0
            reset strike display ()
        ELSE
            add guess to display wrong letters ()
            strikes += 1
            add to strike display()

    IF display.length === word.length
        user wins graphics ()
        play again or quit ()
    ELSE    
        user looses graphics ()
        play again or quit ()
*/ 