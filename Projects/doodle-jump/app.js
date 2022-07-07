const grid = document.querySelector('.grid')
const doodle = document.createElement('div')
const startBtn = document.querySelector('.start-btn')
const platformCount = 5
const platformHeight = 15
const platformWidth = 85
const gridHeight = 900
const gridWidth = 600
const doodleWidth = 85
const platforms = []
let platformInterval
let jumpInterval
let fallInterval
let startPoint = 150
let doodleBottom = startPoint
let doodleLeft = 50
let isJumping
let isGoingLeft = false
let isGoingRight = false
let spaceBetweenPlatforms
let score = 0

function createdDoodle() {
    doodle.classList.add('doodle')
    doodle.style.bottom = `${platforms[0].bottom + platformHeight}px`
    doodleLeft = platforms[0].left + ((platformWidth - doodleWidth) / 2)
    doodle.style.left = `${doodleLeft}px`

    grid.appendChild(doodle)
}

class Platform {
    constructor(platformBottom) {
        this.bottom = platformBottom
        this.left = Math.floor(Math.random() * 515)
        this.visual = document.createElement('div')

        const visual = this.visual
        visual.classList.add('platform')
        visual.style.left = `${this.left}px`
        visual.style.bottom = `${this.bottom}px`
        grid.appendChild(visual)
    }
}

function createPlatforms() {
    for (let i = 0; i < platformCount; i++) {
        spaceBetweenPlatforms = gridHeight / platformCount
        let platformBottom = (i * spaceBetweenPlatforms) + 100
        let platform = new Platform(platformBottom)
        platforms.push(platform)
    }
    console.log(platforms)
}

function startGame() {
    createPlatforms()
    createdDoodle()
    platformInterval = setInterval(movePlatforms, 10)
    jump()
    startBtn.removeEventListener('click', startGame)
}

function movePlatforms() {
    if (doodleBottom > 100) {
        platforms.forEach(platform => {
            platform.bottom -= 2
            platform.visual.style.bottom = `${platform.bottom}px`

            if (platform.bottom <= 5) {
                platform.visual.style.visibility = 'hidden'
                platforms.shift()

                let newBottom = platforms[platforms.length - 1].bottom + spaceBetweenPlatforms
                let newPlatform = new Platform(newBottom)
                platforms.push(newPlatform)
                score++
            }
        })
    }

}

function jump() {
    isJumping = true
    clearInterval(fallInterval)
    jumpInterval = setInterval(function () {
        doodleBottom += 12
        doodle.style.bottom = `${doodleBottom}px`
        if (doodleBottom > startPoint + 400) {
            fall()
        }
        moveDoodle()
    }, 10)

}

function moveDoodle() {
    if (isGoingLeft && !isGoingRight) {
        if (doodleLeft >= 0) {
            doodleLeft -= 2
            doodle.style.left = `${doodleLeft}px`
        } else {
            isGoingLeft = false
            isGoingRight = true
        }
    } else if (!isGoingLeft && isGoingRight) {
        if ((doodleLeft + doodleWidth) <= gridWidth) {
            doodleLeft += 2
            doodle.style.left = `${doodleLeft}px`
        } else {
            isGoingRight = false
            isGoingLeft = true
        }
    }
}

function fall() {
    isJumping = false
    clearInterval(jumpInterval)
    fallInterval = setInterval(function () {
        doodleBottom -= 3
        doodle.style.bottom = `${doodleBottom}px`
        if (doodleBottom <= 0) {
            gameOver()
        }

        platforms.forEach(platform => {
            if ((doodleBottom >= platform.bottom) &&
                (doodleBottom <= (platform.bottom + platformHeight)) &&
                ((doodleLeft + doodleWidth) >= platform.left) &&
                (doodleLeft <= (platform.left + platformWidth))) {
                startPoint = doodleBottom
                jump()
            }
        })

        moveDoodle()

    }, 10)

}

function gameOver() {
    clearInterval(fallInterval)
    console.log("game over")
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild)
    }
    grid.innerHTML = score
}

function move(e) {
    if (e.key === 'ArrowLeft') {
        moveLeft()
    } else if (e.key === 'ArrowRight') {
        moveRight()
    } else if (e.key === 'ArrowUp') {
        moveStraight()
    }
}

function moveLeft() {
    isGoingLeft = true
    isGoingRight = false
}

function moveRight() {
    isGoingLeft = false
    isGoingRight = true

}

function moveStraight() {
    isGoingLeft = false
    isGoingRight = false
}

startBtn.addEventListener('click', startGame)
window.addEventListener('keydown', move)