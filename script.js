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

query select pitcher and baseball

query select audio and any other graphics

declare the functions

onclick of play game. function show instructions 

onclick of start.function game
    while strikes < 3 and correct < random word length
        pitcher animation ()
        get user guess()
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