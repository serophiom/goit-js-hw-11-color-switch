const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  
const bodyRef = document.querySelector('body');
const startBtnRef = document.querySelector('button[data-action="start"]');
const stoptBtnRef = document.querySelector('button[data-action="stop"]');
console.log(startBtnRef);
console.log(bodyRef);
let colorSwithInterval;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// setInterval(() => {
//   console.log('Смена цвета');
// }, 1000);



startBtnRef.addEventListener('click', ()  => {
  colorSwithInterval = setInterval(() => {

    console.log('Смена цвета');
    bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length-1)];
  }, 1000);
});

stoptBtnRef.addEventListener('click', ()  => {
  clearInterval(colorSwithInterval);
});


// 'setInterval(colorSwith, 1000)'
// )
 

// function colorSwith (colors) {
//   bodyRef.className = randomIntegerFromInterval;
// }



