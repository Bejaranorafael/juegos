
// Definición de los colores de las caras del cubo
const COLORS = {
    FRONT: 'blue',
    BACK: 'green',
    LEFT: 'orange',
    RIGHT: 'red',
    UP: 'white',
    DOWN: 'yellow'
  };
  
  // Representación del estado del cubo de Rubik
  let cubeState = {
    F: COLORS.FRONT,
    B: COLORS.BACK,
    L: COLORS.LEFT,
    R: COLORS.RIGHT,
    U: COLORS.UP,
    D: COLORS.DOWN
  };
  
  // Función para rotar una cara del cubo en sentido horario
  function rotateFaceClockwise(face) {
    const temp1 = cubeState[face];
    cubeState[face] = cubeState[face === 'F' ? 'D' : face === 'D' ? 'B' : face === 'B' ? 'U' : 'F'];
    cubeState[face === 'F' ? 'D' : face === 'D' ? 'B' : face === 'B' ? 'U' : 'F'] = cubeState[face === 'F' ? 'U' : face === 'D' ? 'F' : face === 'B' ? 'D' : 'B'];
    cubeState[face === 'U' ? 'F' : face === 'B' ? 'D' : 'B'] = cubeState[face === 'U' ? 'D' : face === 'B' ? 'B' : 'F'];
    cubeState[face === 'U' ? 'D' : face === 'B' ? 'B' : 'F'] = temp1;
    applyColors();
    
    
  }
  
  // Función para realizar una rotación completa de una cara del cubo en sentido horario
  function rotateFace(face) {
    rotateFaceClockwise(face);
    applyColors();
    
    
  }
  
  // Función para aplicar los colores al cubo de Rubik
  function applyColors() {
    const faces = document.querySelectorAll('.face');
    for (let i = 0; i < faces.length; i++) {
      const className = faces[i].classList[1];
      faces[i].style.backgroundColor = cubeState[className];
    }
  }
  document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });

  
  

 
  
  

