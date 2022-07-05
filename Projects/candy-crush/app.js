const grid = document.querySelector('.grid')
const scoreDisplay = document.querySelector('.score')
const movesDisplay = document.querySelector('.moves')
const blocks = []
const height = 8
const width = 8
const candyColors = [
    "url(images/red-candy.png)",
    "url(images/yellow-candy.png)",
    "url(images/orange-candy.png)",
    "url(images/purple-candy.png)",
    "url(images/green-candy.png)",
    "url(images/blue-candy.png)"
]

let blockBeingDragged
let blockBeingReplaced
let colorBeingDragged
let colorBeingReplaced
let score = 0
let moves = 0

function startGame() {
    let newBlock
    for (let i = 0; i < (width * height); i++) {
        newBlock = document.createElement('div')
        newBlock.setAttribute('draggable', true)
        newBlock.setAttribute('id', i)
        newBlock.classList.add('block')
        newBlock.style.backgroundImage = candyColors[Math.floor(Math.random() * candyColors.length)]
        blocks.push(newBlock)
        grid.appendChild(newBlock)
    }

}

function dragStart() {
    blockBeingDragged = parseInt(this.id)
    colorBeingDragged = this.style.backgroundImage
}

function dragEnd() {

}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
}

function dragLeave() {

}

function dragDrop() {
    blockBeingReplaced = parseInt(this.id)
    let validMoves = [blockBeingDragged - 1, blockBeingDragged + 1, blockBeingDragged + width, blockBeingDragged - width]
    let validMove = validMoves.includes(blockBeingReplaced)
    console.log(validMove)
    console.log(blockBeingReplaced)
    if (validMove) {
        colorBeingReplaced = this.style.backgroundImage
        blocks[blockBeingReplaced].style.backgroundImage = colorBeingDragged
        blocks[blockBeingDragged].style.backgroundImage = colorBeingReplaced
        moves++
        movesDisplay.textContent = `Moves: ${moves}`
    }
    else {
        console.log("invalid move")
    }

}

function checkForRowOfThree() {
    for (let i = 0; i < 61; i++) {
        let rowOfThree = [i, i + 1, i + 2]
        let decidedColor = blocks[i].style.backgroundImage
        const isBlank = blocks[i].style.backgroundImage === ''
        const notValidSpaces = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55]

        if (notValidSpaces.includes(i)) {

        }

        else {
            if (rowOfThree.every(item => blocks[item].style.backgroundImage === decidedColor && !isBlank)) {
                score += 3
                scoreDisplay.textContent = `Score: ${score}`
                rowOfThree.forEach(item => blocks[item].style.backgroundImage = '')
            }
        }

    }

}

function checkForColumnOfThree() {
    for (let i = 0; i < 48; i++) {
        let columnOfThree = [i, i + width, i + width + width]
        let decidedColor = blocks[i].style.backgroundImage
        const isBlank = blocks[i].style.backgroundImage === ''

        if (columnOfThree.every(item => blocks[item].style.backgroundImage === decidedColor && !isBlank)) {
            score += 3
            scoreDisplay.textContent = `Score: ${score}`
            columnOfThree.forEach(item => blocks[item].style.backgroundImage = '')
        }

    }
}

function checkForRowOfFour() {
    for (let i = 0; i < 61; i++) {
        let rowOfFour = [i, i + 1, i + 2, i + 3]
        let decidedColor = blocks[i].style.backgroundImage
        const isBlank = blocks[i].style.backgroundImage === ''
        const notValidSpaces = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55]

        if (notValidSpaces.includes(i)) {
            //skip
        }

        else {
            if (rowOfFour.every(item => blocks[item].style.backgroundImage === decidedColor && !isBlank)) {
                score += 4
                scoreDisplay.textContent = `Score: ${score}`
                rowOfFour.forEach(item => blocks[item].style.backgroundImage = '')
            }
        }

    }
}

function checkForColumnOfFour() {
    for (let i = 0; i < 40; i++) {
        let columnOfFour = [i, i + width, i + width + width, i + width + width + width]
        let decidedColor = blocks[i].style.backgroundImage
        const isBlank = blocks[i].style.backgroundImage === ''

        if (columnOfFour.every(item => blocks[item].style.backgroundImage === decidedColor && !isBlank)) {
            score += 4
            scoreDisplay.textContent = `Score: ${score}`
            columnOfFour.forEach(item => blocks[item].style.backgroundImage = '')
        }

    }
}

function dropCandies() {
    for (let i = 0; i < 56; i++) {
        if (blocks[i + width].style.backgroundImage === '') {
            blocks[i + width].style.backgroundImage = blocks[i].style.backgroundImage
            blocks[i].style.backgroundImage = ''
        }
        const firstRow = [0, 1, 2, 3, 4, 5, 6, 7]
        if (firstRow.includes(i) && blocks[i].style.backgroundImage === '') {
            blocks[i].style.backgroundImage = candyColors[Math.floor(Math.random() * candyColors.length)]
        }
    }
}

startGame()

blocks.forEach(block => block.addEventListener('dragstart', dragStart))
blocks.forEach(block => block.addEventListener('dragend', dragEnd))
blocks.forEach(block => block.addEventListener('dragover', dragOver))
blocks.forEach(block => block.addEventListener('dragenter', dragEnter))
blocks.forEach(block => block.addEventListener('dragleave', dragLeave))
blocks.forEach(block => block.addEventListener('drop', dragDrop))

window.setInterval(() => {
    dropCandies()
    checkForRowOfFour()
    checkForColumnOfFour()
    checkForRowOfThree()
    checkForColumnOfThree()
}, 100)
