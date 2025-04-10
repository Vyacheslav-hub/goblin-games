import './style.css'; // подключение стилей
import goblinImage from './img/goblin.png'; // подключаем изображение

// Создание игрового поля
const game = document.getElementById('game');
const cells = [];
for (let i = 0; i < 16; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  game.appendChild(cell);
  cells.push(cell);
}

// Создание изображения гоблина
const goblin = document.createElement('img');
goblin.src = goblinImage;
goblin.classList.add('goblin');

// Перемещение гоблина на случайные клетки
let currentIndex = -1;

function moveGoblin() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * cells.length);
  } while (newIndex === currentIndex); // не перемещаем в ту же ячейку

  cells[newIndex].appendChild(goblin);
  currentIndex = newIndex;
}

moveGoblin();
setInterval(moveGoblin, 1000); // перемещаем каждую секунду
