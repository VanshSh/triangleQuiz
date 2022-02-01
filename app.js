const firstAngle = document.getElementById('firstAngle')
const secondAngle = document.getElementById('secondAngle')
const thirdAngle = document.getElementById('thirdAngle')
const formCheckTriangleResult = document.getElementById(
  'formCheckTriangleResult'
)
const triangleResult = document.querySelector('.triangle_result')

const baseAngle = document.getElementById('baseAngle')
const perpendicularAngle = document.getElementById('perpendicularAngle')
const hypotenuseResult = document.querySelector('.hypotenuse_result')
const formCheckHypotenuseResult = document.getElementById(
  'formCheckHypotenuseResult'
)

const baseArea = document.getElementById('baseArea')
const heightArea = document.getElementById('height')
const areaResult = document.querySelector('.area_result')
const formCheckAreaResult = document.getElementById('formCheckAreaResult')

const generateAngle = document.getElementById('generateAngle')
const firstAngleGuess = document.getElementById('firstAngleGuess')
const secondAngleGuess = document.getElementById('secondAngleGuess')
const thirdAngleGuess = document.getElementById('thirdAngleGuess')
const guessAngleResult = document.querySelector('.guess_angle_result')
const guessResultButton = document.getElementById('guessResultButton')

// Guess Angle

guessResultButton.addEventListener('click', () => {
  let firstAngle = Number(firstAngleGuess.childNodes[0].nodeValue)
  let secondAngle = Number(secondAngleGuess.childNodes[0].nodeValue)
  let thirdAngle = Number(thirdAngleGuess.value)

  let triangle = firstAngle + secondAngle + thirdAngle

  if(triangle === 180){
    guessAngleResult.style.display = 'block'
    guessAngleResult.innerHTML = `<h1>Congrats! You have correctly guessed the angles!</h1>`
  }else{
    guessAngleResult.style.display = 'block'
    guessAngleResult.style.color = 'red'
    guessAngleResult.innerHTML = `<h1>Sorry, you have not correctly guessed the angles!</h1>`
  }
})

//  Check Area
formCheckAreaResult.addEventListener('click', () => {
  const base = Number(baseArea.value)
  const height = Number(heightArea.value)
  const triangleArea = (base * height) / 2

  if (base === 0 || height === 0) {
    validInput(areaResult)
  } else {
    areaResult.style.display = 'block'
    areaResult.innerHTML = `<h1>The area of the triangle is ${triangleArea}</h1>`
  }
})

//  Hypotenuse
formCheckHypotenuseResult.addEventListener('click', () => {
  let base = baseAngle.value
  let perpendicular = perpendicularAngle.value
  let hypotenuse = Math.sqrt(
    Math.pow(base, 2) + Math.pow(perpendicular, 2)
  ).toFixed(2)

  if (base === '' || perpendicular === '') {
    validInput(hypotenuseResult)
  } else {
    hypotenuseResult.style.display = 'block'
    hypotenuseResult.innerHTML = `<h1>Hypotenuse of the given Triangle is ${hypotenuse}<h1>`
  }
})

// is it Triangle?
formCheckTriangleResult.addEventListener('click', () => {
  let firstAngleValue = Number(firstAngle.value)
  let secondAngleValue = Number(secondAngle.value)
  let thirdAngleValue = Number(thirdAngle.value)

  let triangle = firstAngleValue + secondAngleValue + thirdAngleValue
  if (triangle === 0) {
    validInput(triangleResult)
  } else if (triangle === 180) {
    triangleResult.style.display = 'block'
    triangleResult.innerHTML = `<h1>This is a Triangle</h1>`
  } else {
    triangleResult.style.display = 'block'
    triangleResult.style.color = 'red'
    triangleResult.innerHTML = `<h1>This is not a Triangle</h1>`
  }
})

// Error Message
function validInput(output) {
  output.style.display = 'block'
  output.style.color = 'red'
  output.innerHTML = `<h1>Please enter a valid input</h1>`
}

// Generate Angle
generateAngle.addEventListener('click', () => {
  let x = Math.floor(Math.random() * (180 - 0) + 0)
  let y = Math.floor(Math.random() * (180 - 0) + 0)

  while (1) {
    if (x + y >= 180) {
      if (x > y) {
        x = Math.floor(Math.random() * (180 - 0) + 0)
      } else {
        y = Math.floor(Math.random() * (180 - 0) + 0)
      }
    } else {
      break
    }
  }

  firstAngleGuess.innerHTML = `${x}`
  secondAngleGuess.innerHTML = `${y}`
})
