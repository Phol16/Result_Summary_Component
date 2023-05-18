'use strict';

//using import assertion to be able to read the imported json file.
import data from './data.json' assert { type: 'json' };

const display = document.querySelector('.dataResult');
const colorFunction = (category) => {
  return category === 'Reaction'
    ? 'lightRed'
    : category === 'Memory'
    ? 'orangeYellow'
    : category === 'Verbal'
    ? 'greenTeal'
    : category === 'Visual'
    ? 'cobaltBlue'
    : null;
};

const displayResult = data
  .map((result) => {
    return `
  <div class='resultContainer ${colorFunction(result.category)}'>
  <section class="resultText">
  <img src='${result.icon}' alt='Icon'/>
  <h1>${result.category}</h1>
  </section>
  <p class='darkGrayBlue'>${result.score} 
  <span class='lightColorText'>/ 100</span>
  </p>
  </div>
  `;
  })
  .join('');

display.innerHTML = displayResult;

console.log(data);
