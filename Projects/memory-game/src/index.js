const cards = [
    {
        name: 'cow',
        img: './images/cow.png'
    },
    {
        name: 'chicken',
        img: './images/chicken.png'
    },
    {
        name: 'frog',
        img: './images/frog.png'
    },
    {
        name: 'turkey',
        img: './images/turkey.png'
    },
    {
        name: 'sheep',
        img: './images/sheep.png'
    },
    {
        name: 'bird',
        img: './images/bird.png'
    },
    {
        name: 'cow',
        img: './images/cow.png'
    },
    {
        name: 'chicken',
        img: './images/chicken.png'
    },
    {
        name: 'frog',
        img: './images/frog.png'
    },
    {
        name: 'turkey',
        img: './images/turkey.png'
    },
    {
        name: 'sheep',
        img: './images/sheep.png'
    },
    {
        name: 'bird',
        img: './images/bird.png'
    }

]

const grid = document.querySelector('.grid')
const resultDisplay = document.getElementById('result')
let score = 0
let cardsPending = []
let cardsPendingIds = []
let cardsWon = 0

let numCardsRevealed = 0


function setCards() {
    cards.sort(() => 0.5 - Math.random())

    for (let i = 0; i < cards.length; i++) {
        const newCard = document.createElement('img')
        newCard.classList.add('card')
        newCard.setAttribute("src", "./images/blank.png")
        newCard.setAttribute("data-id", i)
        newCard.addEventListener('click', flipCard)
        grid.appendChild(newCard)
    }

}

setCards()
function flipCard() {

    cardsPendingIds.push(this.getAttribute('data-id'))
    this.setAttribute("src", cards[this.getAttribute('data-id')].img)
    cardsPending.push(cards[this.getAttribute('data-id')])
    numCardsRevealed++

    if (numCardsRevealed > 0 && numCardsRevealed % 2 === 0) {
        setTimeout(checkForMatch, 500)
    }
}

function checkForMatch() {
    const cardElements = document.querySelectorAll('img')
    // clicked same card twice
    if (cardsPendingIds[0] === cardsPendingIds[1]) {
        cardsPendingIds.pop()
        numCardsRevealed--
        cardsPending.pop()
    }

    //there is a match
    else if (cardsPending[0].name === cardsPending[1].name) {
        console.log("there is a match")
        cardsPending = []
        cardsPendingIds = []
        cardsWon += 2
        score++
        resultDisplay.textContent = score
    }
    //there is not a match
    else {
        console.log("there is no match")
        cardsPending = []
        cardElements[cardsPendingIds[0]].src = "./images/blank.png"
        cardElements[cardsPendingIds[1]].src = "./images/blank.png"
        numCardsRevealed = 0
        cardsPendingIds = []
    }

    checkForWin(cardElements)
}

function checkForWin(cardElements) {
    console.log(cardsWon)
    if (cardsWon === cards.length) {
        console.log("YOU WIN")
        resultDisplay.innerHTML = `
        ${score}
        <h3>YOU WIN</h3>`
    }
}