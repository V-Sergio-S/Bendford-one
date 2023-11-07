// (function () {
//
//   const formQuiz = document.getElementById('form-quiz')
//   const interrogationForms = document.querySelectorAll('[data-question]')
//   const interrogationFirst = document.querySelector('[data-question="Какой язык Вы рассматриваете для изучения?"]')
//
//   function showQuiz (item) {
//     item.classList.add('form__choice--quiz')
//   }
//
//   function hiddenQuiz (item) {
//     item.classList.remove('form__choice--quiz')
//   }
//
//   showQuiz (interrogationFirst)
//
//   interrogationForms.forEach(question => {
//     function questionTarget (e) {
//       let $that = e.currentTarget
//       let attr = $that.getAttribute('data-question')
//       const $elementThat = $that.nextElementSibling
//       let radioInputs = document.getElementsByName(attr)
//
//     for (radio of radioInputs) {
//
//
//         if (attr === 'Какой язык Вы рассматриваете для изучения?' && radio.checked === true) {
//           hiddenQuiz (question)
//           showQuiz ($elementThat)
//           formQuiz.appendChild(radio)
//         }
//
//         if (attr === 'Для кого рассматриваете возможность обучения?' && radio.checked === true) {
//           hiddenQuiz (question)
//           formQuiz.appendChild(radio)
//         }
//
//         if (attr === 'Для кого рассматриваете возможность обучения?' && radio.id === 'owen' && radio.checked === true) {
//           formQuiz.appendChild(radio)
//           hiddenQuiz (question)
//           showQuiz ($elementThat)
//         }
//
//         if (attr === 'Был ли у Вас опыт изучения желаемого языка?' && radio.checked === true) {
//           formQuiz.appendChild(radio)
//           hiddenQuiz (question)
//           showQuiz ($elementThat.nextElementSibling)
//         }
//
//         if (attr === 'Для чего вы хотели бы изучать иностранный язык?' && radio.checked === true) {
//           formQuiz.appendChild(radio)
//           hiddenQuiz (question)
//           showQuiz ($elementThat.nextElementSibling)
//         }
//
//         if (attr === 'Для кого рассматриваете возможность обучения?' && radio.id === 'my-child' && radio.checked === true) {
//           formQuiz.appendChild(radio)
//           hiddenQuiz (question)
//           showQuiz ($elementThat.nextElementSibling)
//         }
//
//         if (attr === 'Был ли опыт изучения языка у Вашего ребенка?' && radio.checked === true) {
//           formQuiz.appendChild(radio)
//           hiddenQuiz (question)
//           showQuiz ($elementThat.nextElementSibling)
//         }
//
//         if (attr === 'Для чего Вы хотели бы чтобы Ваш ребенок изучал иностранный язык?' && radio.checked === true) {
//           formQuiz.appendChild(radio)
//           hiddenQuiz (question)
//           showQuiz ($elementThat)
//         }
//       }
//
//     }
//
//     question.addEventListener('click', questionTarget)
//
//   })
// })()