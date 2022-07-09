const hamburger = document.getElementById('hamburger')
const navList = document.querySelector('.nav-bar')
const toggleContainer = document.querySelector('.theme')
const toggleBtn = document.querySelector('.theme-btns')
const darkIcon = document.querySelector('.fa-moon')
const lightIcon = document.querySelector('.fa-sun')
const links = document.getElementsByTagName('a')
const name = document.getElementById('name')
const description1 = document.querySelector('.desc1')
const description2 = document.querySelector('.desc2')
const contactInfo = document.querySelectorAll('.contact-item')
const logo = document.querySelector('.logo')
let currentMode = "light"

hamburger.addEventListener('click', () => {
    navList.classList.toggle('show')
    console.log("hamburger click")
})

toggleBtn.addEventListener('click', toggleMode)

function toggleMode() {
    if (currentMode == "light") {
        console.log("dark")
        currentMode = "dark"
        changeDarkMode()
    } else {
        console.log("light")
        currentMode = "light"
        changeLightMode()
    }
}

function changeDarkMode() {
    document.body.style.background = "black"
    lightIcon.style.color = "#d3d3d3"
    lightIcon.style.backgroundColor = "#d3d3d3"
    darkIcon.style.background = "black"
    toggleContainer.style.border = "1px solid white"
    name.style.color = "white"
    description1.style.color = "white"
    description2.style.color = "white"
    logo.style.color = "white"
    contactInfo.forEach(contact => { contact.style.color = "white" })
    for (let i = 0; i < links.length; i++) {
        links[i].style.color = "white"
    }
}

function changeLightMode() {
    document.body.style.background = "white"
    lightIcon.style.color = "black"
    lightIcon.style.backgroundColor = ""
    darkIcon.style.background = "#d3d3d3"
    toggleContainer.style.border = "1px solid black"
    name.style.color = "black"
    description1.style.color = "black"
    description2.style.color = "black"
    logo.style.color = "black"
    contactInfo.forEach(contact => { contact.style.color = "black" })
    for (let i = 0; i < links.length; i++) {
        links[i].style.color = "black"
    }
}