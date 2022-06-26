const bob = document.querySelector('.bob-head')
const smallbob = document.querySelector('.smallbob-head')
const bobText = document.querySelector('.bob-info-text')
let bobPosition = 0
let randNum = Math.floor(Math.random() * 3)

bob.addEventListener('click', moveTheBob)
smallbob.addEventListener('click', resetBob)

function moveTheBob() {
    bobPosition += 300
    bob.style.marginLeft = `${bobPosition}px`

    if (bobPosition > 1800) {
        hideBob()
    }
}

function hideBob() {
    bob.style.visibility = "hidden"
    bobPosition = 0
    bob.style.marginLeft = `${bobPosition}px`
    bobText.innerHTML = "Goodbye Bob :("
    smallbob.style.visibility = "visible"
}

function resetBob() {
    bobPosition = 0
    bob.style.visibility = "visible"
    smallbob.style.visibility = "hidden"
    bobText.innerHTML = "Bob is back! :D"
    randNum = Math.floor(Math.random() * 3)
    console.log(randNum)
    if (randNum == 1) {
        bob.style.backgroundColor = "blue"
        smallbob.style.backgroundColor = "blue"
    }
}