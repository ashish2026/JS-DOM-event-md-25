// Option 1 directly set on the Html element

//  <button onclick="console.log(65)">Another Button</button>


// Option 2 add onclick function on the HTML element 
//  <button onclick="makeRed()">Make Red</button>

function makeRed() {
          document.body.style.backgroundColor = 'red'
}

//  Option 3
const makeBlueButton = document.getElementById('make-blue')
console.log(makeBlueButton)
makeBlueButton.onclick = makeBlue;
function makeBlue() {
          document.body.style.backgroundColor = 'blue'
}

// Option 3 another [we will use this sometime]
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
          document.body.style.backgroundColor = 'purple';
}
// option 4 
const pinkButton = document.getElementById('make-pink')
pinkButton.addEventListener('click', makePink)

function makePink() {
          document.body.style.backgroundColor = 'pink'
}
// option 4 another
const makeGreenButton = document.getElementById('make-green')
makeGreenButton.addEventListener('click', function makeGreen() {
          document.body.style.backgroundColor = 'green'
})
// option 4 final
// important : we will use this many time
document.getElementById('make-goldenrod').addEventListener('click', function () {
          document.body.style.backgroundColor = 'goldenrod'
})