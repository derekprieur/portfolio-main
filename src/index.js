const hamburger = document.getElementById('hamburger')
const navList = document.querySelector('.nav-bar')

hamburger.addEventListener('click', () => {
    navList.classList.toggle('show')
    console.log("hamburger click")
})