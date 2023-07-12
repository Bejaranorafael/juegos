const totalCards = 18;
const availableCards = [
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
  'img/5.jpg',
  'img/6.jpg',
  'img/7.jpg',
  'img/8.jpg',
  'img/15.jpg',
  'img/10.jpg',
  'img/11.jpg',
  'img/12.jpg',
  'img/13.jpg',
  'img/14.jpg',
  'img/15.jpg'
];
let cards = [];
let selectedCards = [];
let valuesUsed = [];
let currentMove = 0;
let currentAttempts = 0;

let cardTemplate = '<div class="card"><div class="back"></div><div class="face"></div></div>';

function activate(e) {
  if (currentMove < 2) {
    if ((!selectedCards[0] || selectedCards[0] !== e.target) && !e.target.classList.contains('active')) {
      e.target.classList.add('active');
      selectedCards.push(e.target);

      if (++currentMove === 2) {
        currentAttempts++;
        document.querySelector('#stats').innerHTML = currentAttempts + ' intentos';

        if (selectedCards[0].querySelectorAll('.face')[0].innerHTML === selectedCards[1].querySelectorAll('.face')[0].innerHTML) {
          selectedCards = [];
          currentMove = 0;

          if (checkGameFinished()) {
            showCongratulations();
            setTimeout(() => {
              hideCongratulations();
            }, 2000);
          }
        } else {
          setTimeout(() => {
            selectedCards[0].classList.remove('active');
            selectedCards[1].classList.remove('active');
            selectedCards = [];
            currentMove = 0;
          }, 300);
        }

        // Almacenar la cantidad de intentos en localStorage
        localStorage.setItem('intentos', currentAttempts);
      }
    }
  }
}




function randomValue() {
  let rnd = Math.floor(Math.random() * totalCards * 0.5);
  let card = valuesUsed.filter(value => value === rnd);

  if (card.length < 2) {
    valuesUsed.push(rnd);
  } else {
    randomValue();
  }
}

function getFaceValue(value) {
  let image = document.createElement('img');
  image.src = availableCards[value];
  image.classList.add('card-image');
  return image;
}

function checkGameFinished() {
  return document.querySelectorAll('.card.active').length === totalCards;
}

function showCongratulations() {
  document.getElementById('message').style.display = 'block';
}

function hideCongratulations() {
  document.getElementById('message').style.display = 'none';
}

function addIntentoToTable(intento) {
  const tbody = document.querySelector('#intentos-table tbody');
  const row = document.createElement('tr');
  const cell = document.createElement('td');
  cell.textContent = intento;
  row.appendChild(cell);
  tbody.appendChild(row);
}

// Recuperar la cantidad de intentos del almacenamiento al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  const storedAttempts = localStorage.getItem('intentos');
  if (storedAttempts) {
    currentAttempts = parseInt(storedAttempts);
    document.querySelector('#stats').innerHTML = currentAttempts + 'intentos';

    // Agregar intentos almacenados a la tabla
    for (let i = 1; i <= currentAttempts; i++) {
      addIntentoToTable(i);
    }
  }
});

function resetGame() {
  // Reiniciar el contador de intentos
  currentAttempts = 0;
  document.querySelector('#stats').innerHTML = currentAttempts + ' intentos';
  localStorage.removeItem('intentos');

  // Reiniciar el juego (borrar las tarjetas y reiniciar los valores)
  cards.forEach(card => { card.remove('active');
  card.style.transform = 'none';

  
});
  cards = [];
  selectedCards = [];
  valuesUsed = [];
  currentMove = 0;
  localStorage.setItem('intentos', currentAttempts);
  addIntentoToTable(currentAttempts);

  // Generar nuevas tarjetas
  for (let i = 0; i < totalCards; i++) {
    let div = document.createElement('div');
    div.innerHTML = cardTemplate;
    cards.push(div);
    document.querySelector('#game').append(cards[i]);
    randomValue();
    cards[i].querySelectorAll('.face')[0].appendChild(getFaceValue(valuesUsed[i]));
    cards[i].querySelectorAll('.card')[0].addEventListener('click', activate);
  }
}

// Agregar evento de clic al botón de reinicio
const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', () => {
  resetGame();
});

for (let i = 0; i < totalCards; i++) {
  let div = document.createElement('div');
  div.innerHTML = cardTemplate;
  cards.push(div);
  document.querySelector('#game').append(cards[i]);
  randomValue();
  cards[i].querySelectorAll('.face')[0].appendChild(getFaceValue(valuesUsed[i]));
  cards[i].querySelectorAll('.card')[0].addEventListener('click', activate);
}
document.getElementById('menu-toggle').addEventListener('click', function() {
  var menu = document.getElementById('menu');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
});

