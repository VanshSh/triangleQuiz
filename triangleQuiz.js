const triangleQuiz = document.getElementById('triangleQuiz')
const result = document.getElementById('result')
const question = document.querySelectorAll('.question')

const correctAns = ['3', '2', '0', '15', '62.35']

triangleQuiz.addEventListener('submit', (event) => {
  event.preventDefault()

  let index = 0,
    score = 0

  const quizAns = new FormData(triangleQuiz)

  for (let [, value] of quizAns) {
    if (value === correctAns[index]) {
      score += 1
      question[index].style.border = '5px solid green'
    } else {
      question[index].style.border = '0.13rem solid red'
    }
    index += 1
  }
  result.innerText = `Score: ${score}/10`
})
