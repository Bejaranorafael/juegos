# juegos
# JUEGOS DIDACTICOS/COGNITIVOS

## Índice
1. [Introducción](#introducción)


2. [Uso](#uso)



## Introducción
Este es una primera presentacion de una web con un menu con juegos didacticos y de memoria cognitiva




## Uso
Descarga los archivos y montalo en algun editor , editalo y juega con el codigo 






### Código de muestra
`<!DOCTYPE html>
<html>
   <head>
      <link rel="stylesheet" href="style.css">
   </head>
   <body>
    <button id="menu-toggle">Menu</button>
    
    <div id="menu">
      <ul>
        <li><a href="index.html">Memoria</a></li>
        <li><a href="rubik.html">Rubik</a></li>
        <li><a href="pasap.html">Pasapalabra</a></li>
        <li><a href="puntajes.html">Puntajes</a></li>
        <li><a href="tesoro.html">Tesoro</a></li>
      </ul>
    </div>
    
      <div id="stats"> intentos 0</div>
      <div id="message" style="display: none;">¡Felicitaciones ahora eres un SAYAYIN!</div>
      
      
      <button id="reset-button">Reiniciar</button>
      <div id="wrapper">
         <div id="game"></div>
      </div>
      <script src="app.js"></script>
   </body>
</html>
