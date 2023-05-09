const firstQuestion = document.getElementById('first-q')
const secondQuestion = document.getElementById('second-q')
const thirdQuestion = document.getElementById('third-q')
const fourthQuestion = document.getElementById('fourth-q')
const fifthQuestion = document.getElementById('fifth-q')

firstQuestion.addEventListener('click', function() {
    toggleAnswer(firstQuestion, '#first-p', 'first-arrow', 'first-heading');
  });

  secondQuestion.addEventListener('click', function() {
    toggleAnswer(secondQuestion, '#second-p', 'second-arrow','second-heading');
  });  

  thirdQuestion.addEventListener('click', function(){
    toggleAnswer(thirdQuestion, '#third-p', 'third-arrow','third-heading')
  })
  
  fourthQuestion.addEventListener('click', function() {
    toggleAnswer(fourthQuestion, '#fourth-p', 'fourth-arrow','fourth-heading');
  });

  fifthQuestion.addEventListener('click', function() {
    toggleAnswer(fifthQuestion, '#fifth-p', 'fifth-arrow','fifth-heading');
  });

  firstQuestion.onclick = toggleAnswer(firstQuestion, '#first-p', 'first-arrow', 'first-heading');
  secondQuestion.onclick = toggleAnswer(firstQuestion, '#second-p', 'second-arrow', 'second-heading');
  thirdQuestion.onclick = toggleAnswer(firstQuestion, '#third-p', 'third-arrow', 'third-heading');
  fourthQuestion.onclick = toggleAnswer(firstQuestion, '#fourth-p', 'fourth-arrow', 'fourth-heading');
  fifthQuestion.onclick = toggleAnswer(firstQuestion, '#fifth-p', 'fifth-arrow', 'fifth-heading');



function toggleAnswer(question, answer, arrow,heading) {
    let answerEl = document.querySelector(answer)
    let headingEl = document.getElementById(heading)
    console.log(answerEl)
    if (answerEl.style.display === 'none') {
        answerEl.style.display = 'block'
        document.getElementById(arrow).style.transform = 'rotate(180deg)';
        question.removeEventListener('click', toggleAnswer);
        headingEl.classList.add('toBold')
    } else {
      answerEl.style.display = 'none'
      document.getElementById(arrow).style.transform = 'rotate(360deg)';
      question.addEventListener('click', toggleAnswer);
      headingEl.classList.remove('toBold')
    }
  }
