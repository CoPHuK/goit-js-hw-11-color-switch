const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let isChanging = false;

// Получение ссылок

const startButtonRef = document.querySelector('[data-action=start]');
const stopButtonRef = document.querySelector('[data-action="stop"]');

// Генерация случайного числа

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//Изменение  цвета

const changeBcgColor = () => {
  let i = randomIntegerFromInterval(0, colors.length - 1);
  document.body.style.backgroundColor = colors[i];
};

startButtonRef.addEventListener('click', () => {
  if (isChanging) {
    return;
  }
  isChanging = true;
  timerId = setInterval(changeBcgColor, 1000);
});

stopButtonRef.addEventListener('click', () => {
  isChanging = false;
  clearInterval(timerId);
});
