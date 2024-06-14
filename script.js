
// user stories:
// -moving image of pitcher
// -baseball image at different rotations
// -sound effects (if have times)
// -computer selects random word from list
// -user enters letter when pitcher throws
// -strike count goes up if user wrong and letter added to wrong letters
// -letter added to display and strikes reset if answers correct letter





const wordArray = ["BAT", "BALL", "HIT", "RUN", "BUNT", "CATCH", "STEAL", "SLIDE", "TAG", "WALK", "BASE", "DIVE", "FOUL", "GLOVE", "PITCH", "UMP", "ZONE", "CURVE", "SWING", "OUT", "HOME", "LINE", "PLAY", "TEAM", "FAIR", "TOSS", "DIRT", "SAFE"];




const displaysParentEl = document.getElementById('displays');
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

const createDisplays = (word) => {
    for (i = 0; i < word.length; i++) {
        let displayEl = document.createElement('div');
        displayEl.setAttribute('id', `${i}`);
        displayEl.setAttribute('class', 'display'); 
        displaysParentEl.append(displayEl);
    }
}

const removeDisplays = (nodeList) => {
    // let displays = document.querySelectorAll('.display');
    nodeList.forEach((display) => {
        display.remove();
    });  
}

const getUserGuess = (word, nodeList) => {
    toggleInputPopup();
    inputButtonEl.onclick = () => {
        addToDisplays(inputBoxEl.value, word, nodeList)
        inputBoxEl.value = '';
    };
}

const updateStrikes = () => {
    if (strikes === 0) {
        strikesEl.textContent = 'Strikes: 🔲🔲🔲';
    } else if (strikes === 1) {
        strikesEl.textContent = 'Strikes: ❌🔲🔲';
    } else if (strikes === 2) {
        strikesEl.textContent = 'Strikes: ❌❌🔲';
    } else if (strikes === 3) {
        strikesEl.textContent = 'Strikes: ❌❌❌';
    }
}

const resetStrikes = () => {
    strikesEl.textContent = "Strikes: 🔲🔲🔲"
}

let wrongLettersArray = [];
const addToWrongLetters = (guess) => {
    if (!wrongLettersArray.includes(guess)) {
        wrongLettersArray.push(guess);
        let wrongLetter = document.createElement('li');
        wrongLetter.textContent = guess;
        wrongLetter.setAttribute('class', 'wrong-letter');
        wrongLettersListEl.append(wrongLetter);     
    }  
}

const removeWrongLetters = () => {
    let wrongLetters = document.querySelectorAll('.wrong-letter');
    wrongLetters.forEach((letter) => {
        letter.remove();
    });
}

const resetAll = (nodeList) => {
    removeDisplays(nodeList);
    resetStrikes();
    removeWrongLetters();
    word = ''
    strikes = 0;
    correct = 0;
    wrongLettersArray = [];

}


const removeEndGraphics = () => {
    endGraphicsEl.classList.toggle('toggle');
}

const playAgain = (nodeList) => {
    removeEndGraphics();
    resetAll(nodeList);
    start();
}

const quit = (nodeList) => {
    removeEndGraphics();
    resetAll(nodeList);
    toggleHomeScreen();
}

// const playOrQuit = (nodeList) => {
//     endGraphicsButtonsEls.forEach((button) => {
//         button.addEventListener('click', (e) => {
//             if (e.target.id === 'play-again-button') {
//                 playAgain(nodeList);
//             } else if (e.target.id === 'quit-button') {
//                 quit(nodeList);
//             }
//         });
//     });
// }

const playOrQuit = (nodeList) => {
    endGraphicsButtonsEls.forEach((button) => {
        button.onclick = (e) => {
            if (e.target.id === 'play-again-button') {
                playAgain(nodeList);
            } else if (e.target.id === 'quit-button') {
                quit(nodeList);
            }
        };
    });
}



const showEndGraphics = (displayChildrenEls, word) => {
    endGraphicsEl.classList.toggle('toggle');
    let finalGuess = '';
    for (let childEl of displayChildrenEls) {
        if (childEl.textContent !== '') {
            finalGuess += childEl.textContent;
        }
    }
    if (finalGuess === word) {
        endGraphicsTextEl.textContent = 'You Win!';
    } else if (finalGuess !== word) {
        endGraphicsTextEl.textContent = 'Game Over';
    }
    playOrQuit(displayChildrenEls);
}

let correct = 0;
let strikes = 0;


const addToDisplays = (guess, word, nodeList) => {
    if (word.includes(guess)) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                nodeList[i].textContent = guess;  
            }
        }
        correct +=1;
        strikes = 0;
        resetStrikes();
    } else {
        addToWrongLetters(guess);
        strikes += 1;
        updateStrikes();
    } 
    
    if (strikes >= 3 || correct >= word.length) {
        toggleInputPopup();
        showEndGraphics(nodeList, word);
    }
}

// let word;
// let displayChildrenEls;

const start = () => {
    let word = wordArray[Math.floor(Math.random() * wordArray.length)];
    console.log(word);
    createDisplays(word);
    let displayChildrenEls = document.querySelectorAll('.display');
    // let strikes = 0;
    // let correct = 0;
    getUserGuess(word, displayChildrenEls);
    // if (strikes < 3 && correct < word.length) {
    //     strikes ++;
    //     getUserGuess();
    //     toggleInputPopup();
    //     showEndGraphics(displayChildrenEls, word);
    // } 
}

playGameButtonEl.onclick = () => {
    toggleHomeScreen();
    toggleInstructions();
    startButtonEl.onclick = () => {
        toggleInstructions();
        start();
    };
};


/*


start ()
    let word = wordArray[Math.floor(Math.random() * wordArray.length)];
    create display ()
    let displayChildrenEls = document.querySelectorAll('.display');
    while strikes < 3 and correct < random word length 
        let strikes = 0
        let correct = 0    
        get user guess() 
            IF guess is in word
                THEN bat crack noise and crowd cheer
                add to displays ()
                correct += 1
                strikes = 0
                reset strike display ()
            ELSE
                add to wrong letters ()
                strikes += 1
                update strikes ()

    toggle input popup ()
    toggle end graphics

play game ()
    toggle instructions()
    start button. add event listener ('click', start())


play game button. add event listener ('click', play game());
*/