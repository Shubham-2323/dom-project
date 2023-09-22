const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(randomColor());
// const start = function start() {
//   document.getElementById('start').addEventListener('click', function (e) {
//     console.log('Start');
//   });
// }
// const stop = document
//   .getElementById('stop')
//   .addEventListener('click', function (e) {
//     console.log('Stop');
//   });
