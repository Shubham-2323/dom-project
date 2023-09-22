const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
console.log(randomColor());
const startChanging = function () {
  if (!intervalId) {
    intervalId = setInterval(colorr, 1000);
  }

  function colorr() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChanging = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.getElementById('start').addEventListener('click', startChanging);

document.getElementById('stop').addEventListener('click', stopChanging);
