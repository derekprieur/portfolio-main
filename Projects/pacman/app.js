const grid = document.querySelector('.grid')
const scoreDisplay = document.getElementById('score')
const winDisplay = document.querySelector('.win')
const width = 28
const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
]

const squares = []
let numCollectibles = 0
let score = 0

// 0 = dot, 1 = wall, 2 = ghost base, 3 = power, 4 = empty

function generateBoard() {
    for (let i = 0; i < layout.length; i++) {
        const square = document.createElement('div')
        grid.appendChild(square)
        squares.push(square)

        if (layout[i] === 0) {
            squares[i].classList.add('dot')
            let dot = document.createElement('div')
            dot.classList.add('dot-icon')
            squares[i].appendChild(dot)
            numCollectibles++
        } else if (layout[i] === 1) {
            squares[i].classList.add('wall')
        } else if (layout[i] === 2) {
            squares[i].classList.add('base')
        } else if (layout[i] === 3) {
            squares[i].classList.add('power')
            let power = document.createElement('div')
            power.classList.add('power-icon')
            squares[i].appendChild(power)
            numCollectibles++
        } else if (layout[i] === 4) {
            squares[i].classList.add('empty')
        } else {
            console.log("ERROR IN ARRAY")
        }
    }

}

function movePacman(e) {
    squares[pacmanLocation].classList.remove('pacman')
    let tempLocation = pacmanLocation
    switch (e.keyCode) {
        case 37:
            if (pacmanLocation === 364) {
                pacmanLocation = 391
                break;
            }
            tempLocation = pacmanLocation - 1
            if (squares[tempLocation].classList.contains('wall')) {
                break;
            }
            pacmanLocation = tempLocation
            break;
        case 38:
            tempLocation = pacmanLocation - 28;
            if (squares[tempLocation].classList.contains('wall')) {
                break;
            }
            pacmanLocation = tempLocation
            break;
        case 39:
            if (pacmanLocation === 391) {
                pacmanLocation = 364
                break;
            }
            tempLocation = pacmanLocation + 1
            if (squares[tempLocation].classList.contains('wall')) {
                break;
            }
            pacmanLocation = tempLocation
            break;
        case 40:
            tempLocation = pacmanLocation + 28;
            if (squares[tempLocation].classList.contains('wall')) {
                break;
            }
            pacmanLocation = tempLocation
            break;
    }
    squares[pacmanLocation].classList.add('pacman')
    checkForPoint()
}

function checkForPoint() {
    if (squares[pacmanLocation].classList.contains('dot')) {
        score++
        scoreDisplay.innerHTML = score
        squares[pacmanLocation].classList.remove('dot')
        squares[pacmanLocation].classList.add('empty')
        squares[pacmanLocation].innerHTML = ''
        numCollectibles--
    } else if (squares[pacmanLocation].classList.contains('power')) {
        score = score + 10
        scoreDisplay.innerHTML = score
        squares[pacmanLocation].classList.remove('power')
        squares[pacmanLocation].classList.add('empty')
        squares[pacmanLocation].innerHTML = ''
        numCollectibles--
    }

    checkForWin()
}

function checkForWin() {
    if (numCollectibles === 0) {
        winDisplay.style.visibility = "visible"
        document.removeEventListener('keydown', movePacman)
    }
}

generateBoard()

let pacmanLocation = 490
squares[pacmanLocation].classList.add('pacman')

document.addEventListener('keydown', movePacman)

class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.timerId = NaN
        this.onNonEmptySpace = false
        this.previousIndex = startIndex
    }
}

const ghosts = [
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500)
]

ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghost')
})

ghosts.forEach(ghost => moveGhost(ghost))

function moveGhost(ghost) {

    ghost.previousIndex = ghost.currentIndex
    // possible directions
    const directions = [1, -1, width, -width]
    // get random direction
    let direction = directions[Math.floor(Math.random() * directions.length)]
    //set time interval for each ghost
    ghost.timerId = setInterval(() => {
        // if not currently in the base
        if (!squares[ghost.currentIndex].classList.contains('base')) {
            // if new space isn't wall/ghost/base
            if (!squares[ghost.currentIndex + direction].classList.contains('wall') &&
                !squares[ghost.currentIndex + direction].classList.contains('ghost') &&
                !squares[ghost.currentIndex + direction].classList.contains('base')) {
                // remove ghost classes from current space
                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost')
                //update current space
                ghost.currentIndex = ghost.currentIndex + direction
                //set ghost classes on updated space
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')

                if (squares[ghost.currentIndex].classList.contains('dot')) {
                    ghost.onNonEmptySpace = true
                    console.log(ghost.onNonEmptySpace)
                }
            }

        } else if (
            !squares[ghost.currentIndex + direction].classList.contains('wall') &&
            !squares[ghost.currentIndex + direction].classList.contains('ghost')) {
            squares[ghost.currentIndex].classList.remove(ghost.className)
            squares[ghost.currentIndex].classList.remove('ghost')
            ghost.currentIndex = ghost.currentIndex + direction
            squares[ghost.currentIndex].classList.add(ghost.className)
            squares[ghost.currentIndex].classList.add('ghost')
        }
        direction = directions[Math.floor(Math.random() * directions.length)]
    }, ghost.speed)

}