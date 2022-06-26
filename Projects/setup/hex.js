const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #f15025
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
    // get random hex value
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = randomNumber
    color.textContent = randomNumber;
});

function getRandomNumber() {
    let randomHex = '#';
    for (let i = 0; i < 6; i++) {
        randomHex += hex[Math.floor(Math.random() * hex.length)];
    }
    return randomHex;
};