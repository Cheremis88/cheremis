const colors = [
  '#AA00FF',
  '#2E7D32',
  '#FF3D00',
  '#FFEA00',
  '#6A1B9A',
  '#66BB6A',
  '#78909C',
  '#9E9D24',
  '#3D5AFE',
  '#90A4AE',
  '#795548',
  '#00ACC1',
  '#F57C00',
];
let colorIndex = 0;
const title = document.querySelector('h1');
const button = document.querySelector('button');
button.addEventListener('click', () => {
  if (colorIndex === colors.length - 1) {
    colorIndex = 0;
  } else {
    colorIndex++;
  }
  title.style.color = colors[colorIndex];
});
