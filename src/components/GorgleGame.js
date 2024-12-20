

import React, {useRef, useState} from 'react';

function GorgleGame () {
    var wordList = require('../assets/wordlist.json');
    var wordListLength = wordList.length;

    const randomIndex = useRef(Math.floor((Math.random()*wordListLength)/6))
    console.log(randomIndex)

    var correctWord = wordList[randomIndex.current];
    var correctWordLength = correctWord.length
    console.log(correctWord)
    console.log(correctWordLength)

    const [foundWord, setFoundWord] = useState([false])
    const [reachedMaxGuesses, setReachedMaxGuesses] = useState([false])

    var emptyBoxes = []

    for (let i = 0; i < correctWordLength; i++) {
        emptyBoxes.push("");
    }

    var letterBoxes = [...emptyBoxes];

    var currentLetter = 0;

    var maximumGuesses = correctWordLength;
    var currentGuesses = 0;

    function insertLetter (pressedKey) {
        
        if ((currentLetter === correctWordLength) || (foundWord === true)) {
            return
        }

        pressedKey = pressedKey.toLowerCase();

        let row = document.getElementsByClassName("letter-row")[currentGuesses]
        let currentBox = row.children[currentLetter]
        currentBox.textContent = pressedKey;

        letterBoxes[currentLetter] = pressedKey;

        currentLetter += 1

    }

    function deleteLetter () {
        if ((currentLetter === 0) || (foundWord === true)) {
            return
        }

        let row = document.getElementsByClassName("letter-row")[currentGuesses]
        let currentBox = row.children[currentLetter - 1]
        currentBox.textContent = "";

        letterBoxes[currentLetter - 1] = "";

        currentLetter -= 1;

    }

    function checkGuess () {
        // if not the last letter in the guess skip
        if ((currentLetter !== correctWordLength) || (foundWord === true)) {
            return
        }

        let row = document.getElementsByClassName("letter-row")[currentGuesses]

        for (let i = 0; i < correctWordLength; i++) {
            let currentBox = row.children[i]
            if (letterBoxes[i] === correctWord[i]) {
                currentBox.style.color = "green"
                shadeKeyBoard(letterBoxes[i], "green")
            }
            else if (correctWord.indexOf(letterBoxes[i]) !== -1) {
                currentBox.style.color = "#e1ba33"
                shadeKeyBoard(letterBoxes[i], "#e1ba33")
            }
            else {
                currentBox.style.color = "gray"
                shadeKeyBoard(letterBoxes[i], "gray")
            }
        }

        var guessedWord = letterBoxes.join('');

        if (guessedWord === correctWord) {
            currentGuesses = maximumGuesses;
            setFoundWord(true);
        }

        if ((currentGuesses + 1) === maximumGuesses) {
            setReachedMaxGuesses(true);
        }

        letterBoxes = [...emptyBoxes];

        currentGuesses += 1
        currentLetter = 0


    }

    function shadeKeyBoard(letter, color) {
        for (const elem of document.getElementsByClassName("keyboard-button")) {
            if (elem.textContent === letter) {
                let oldColor = elem.style.backgroundColor
                if (oldColor === 'green') {
                    return
                } 
    
                if (oldColor === '#e1ba33' && color !== 'green') {
                    return
                }
    
                elem.style.backgroundColor = color
                break
            }
        }
    }

    document.addEventListener("keyup", (e) => {
        if (maximumGuesses === currentGuesses) {
            return
        }
        let pressedKey = String(e.key)
        if (pressedKey === "Backspace" && currentLetter !== 0) {
            deleteLetter()
            return
        }
        if (pressedKey === "Enter") {
            checkGuess()
            return
        }
        let found = pressedKey.match(/[a-z]/gi)
        if (!found || found.length > 1) {
            return
        } else {
            insertLetter(pressedKey)
            return
        }
    })

    return (
    <div>

    {
        letterBoxes.map((index1) => (
            <row className="letter-row d-flex justify-content-center">
            {
            letterBoxes.map((index2) => (
                <div className="letter-box"> </div>
            ))
            }
            </row>

        ))
    }

    <div id="keyboard-cont">
        <div class="first-row">
            <button class="keyboard-button">q</button>
            <button class="keyboard-button">w</button>
            <button class="keyboard-button">e</button>
            <button class="keyboard-button">r</button>
            <button class="keyboard-button">t</button>
            <button class="keyboard-button">y</button>
            <button class="keyboard-button">u</button>
            <button class="keyboard-button">i</button>
            <button class="keyboard-button">o</button>
            <button class="keyboard-button">p</button>
        </div>
        <div class="second-row">
            <button class="keyboard-button">a</button>
            <button class="keyboard-button">s</button>
            <button class="keyboard-button">d</button>
            <button class="keyboard-button">f</button>
            <button class="keyboard-button">g</button>
            <button class="keyboard-button">h</button>
            <button class="keyboard-button">j</button>
            <button class="keyboard-button">k</button>
            <button class="keyboard-button">l</button>
        </div>
        <div class="third-row">
            <button class="keyboard-button">Del</button>
            <button class="keyboard-button">z</button>
            <button class="keyboard-button">x</button>
            <button class="keyboard-button">c</button>
            <button class="keyboard-button">v</button>
            <button class="keyboard-button">b</button>
            <button class="keyboard-button">n</button>
            <button class="keyboard-button">m</button>
            <button class="keyboard-button">Enter</button>
        </div>
    </div>

    {(foundWord === true) ? (
        <div className="px-5 pt-3">
        <h3 style={{ color: 'green' }}>Congratulations! Correct word found!</h3>
        </div>
        ) : (
        <div/>
    )}

    {(reachedMaxGuesses === true) ? (
        // If we reach maximum guesses
        <div className="px-5 pt-3">
        <h3 style={{ color: 'red' }}>Maximum guesses reached. Correct word was: {correctWord}</h3>
        </div>
        ) : (
        <div/>
    )}

    </div>
    );


}

export default GorgleGame;