
const wordsArray = ["BAT", "BALL", "HIT", "RUN", "BUNT", "CATCH", "STEAL", "SLIDE", "TAG", "WALK", "BASE", "DIVE", "FOUL", "GLOVE", "PITCH", "UMP", "ZONE", "CURVE", "SWING", "OUT", "HOME", "LINE", "PLAY", "TEAM", "FAIR", "TOSS", "DIRT", "SAFE"];


const displaysParentEl = document.getElementById('displays');
const wrongLettersListEl = document.getElementById('wrong-letters-list');
const strikesEl = document.getElementById('strikes');
const homeScreenEl = document.getElementById('home-screen');
const playGameButtonEl = document.getElementById('play-game-button');
const instructionsEl = document.getElementById('instructions');
const startButtonEl = document.getElementById('start-button');
const inputPopupEl = document.getElementById('input-popup');
const inputBoxEl = document.getElementById('input-box');
const inputButtonEl = document.getElementById('input-button');
const endGraphicsEl = document.getElementById('end-graphics');
const endGraphicsTextEl = document.getElementById('end-graphics-text');
const endGraphicsButtonsEls = document.querySelectorAll('.end-graphics-button');


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

const removeDisplays = (displayChildrenEls) => {
    displayChildrenEls.forEach((display) => {
        display.remove();
    });
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

const resetAll = (displayChildrenEls) => {
    removeDisplays(displayChildrenEls);
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

const playAgain = (displayChildrenEls) => {
    removeEndGraphics();
    resetAll(displayChildrenEls);
    start();
}

const quit = (displayChildrenEls) => {
    removeEndGraphics();
    resetAll(displayChildrenEls);
    toggleHomeScreen();
}

const playOrQuit = (displayChildrenEls) => {
    endGraphicsButtonsEls.forEach((button) => {
        button.onclick = (e) => {
            if (e.target.id === 'play-again-button') {
                playAgain(displayChildrenEls);
            } else if (e.target.id === 'quit-button') {
                quit(displayChildrenEls);
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

const addToDisplays = (guess, word, displayChildrenEls) => {
    if (word.includes(guess) && guess !== '') {
        for (i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                displayChildrenEls[i].textContent = guess;
                correct += 1;
            }
        }
        strikes = 0;
        resetStrikes();
    } else {
        addToWrongLetters(guess);
        strikes += 1;
        updateStrikes();
    }
    if (strikes >= 3 || correct >= word.length) {
        toggleInputPopup();
        showEndGraphics(displayChildrenEls, word);
    }
}

const getUserGuess = (word, displayChildrenEls) => {
    toggleInputPopup();
    inputBoxEl.focus(); // We may have learned this already, but I used stack overflow to focus the text cursor automatically. https://stackoverflow.com/questions/10910822/how-to-show-textarea-cursor-automatically
    (inputButtonEl.onclick) = () => {
        addToDisplays(inputBoxEl.value, word, displayChildrenEls)
        inputBoxEl.value = '';
        inputBoxEl.focus();
    };
}

const start = () => {
    let word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    createDisplays(word);
    let displayChildrenEls = document.querySelectorAll('.display');
    getUserGuess(word, displayChildrenEls);
}

playGameButtonEl.onclick = () => {
    toggleHomeScreen();
    toggleInstructions();
    startButtonEl.onclick = () => {
        toggleInstructions();
        start();
    };
};