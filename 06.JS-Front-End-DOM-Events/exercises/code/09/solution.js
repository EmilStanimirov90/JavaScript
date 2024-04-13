function solve() {
 
  const quizAnswerEls = document.querySelectorAll('.quiz-answer')

  const questions = {
    'Question #1: Which event occurs when the user clicks on an HTML element?': 'onclick',
    'Question #2: Which function converting JSON to string?': 'JSON.stringify()',
    'Question #3: What is DOM?': 'A programming API for HTML and XML documents',
  }

  let correctAnswers = 0
  for (const answerEL of quizAnswerEls){
    answerEL.addEventListener('click',(e) => {
      const sectionElement = e.currentTarget.parentElement.parentElement
      const questionTitle = sectionElement.querySelector('.question h2').textContent
      const answerText = answerEL.querySelector('.answer-text').textContent

      if (questions[questionTitle] == answerText) {
        correctAnswers += 1
        
      }
      console.log(correctAnswers);

      const nextSection = sectionElement.nextElementSibling
      sectionElement.classList.add('hidden')
      sectionElement.style.display = 'none'
      nextSection.classList.remove('hidden')
      nextSection.style.display = ('block')



      if (nextSection.id === 'results') {
        
        const headingEl = nextSection.querySelector('.results-inner h1')
        
        if (correctAnswers === 3){
          headingEl.textContent = "You are recognized as top JavaScript fan!"
        } else {
          headingEl.textContent = `You have ${correctAnswers} right answers`
        }
        
      }
    })
  }
}
