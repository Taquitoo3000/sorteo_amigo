# Sorteo de Amigos
Esta aplicación recibe los nombres de amigos que quieras sortear y selecciona uno al azar y muestra al amigo sorteado

## Ejecución
Para la ejecucion del proyecto debes de entrar a la pagina [https://taquitoo3000.github.io/sorteo_amigo/](https://taquitoo3000.github.io/sorteo_amigo/) en la cual se te redirigira a un cuadro en el cual puedes poner el nombre de tus amigos, irlos añadiendo con el botón `Añadir` y una vez que tienes a todos los participantes das click en `Sortear Amigo` y listo, ya tienes a tu amigo seleccionado. Puedes usarlo segun tus necesidades.

## index.html
Aquí se encuentran varios elementos html que se usan para la lógica de programación como lo es el holder para poder escribir el nombre de un amigo.  
```
<input type="text" id="amigo" class="input-name" placeholder="Escribe un nombre">
```
Otro elemento a utilizar es el botón `Añadir` el cual captura el texto en el holder
```
<button class="button-add" onclick="agregarAmigo()">Añadir</button>
```
El otro botón que dice `Sortear Amigo` viene dado por la siguiente linea
```
<button class="button-draw" onclick="sortearAmigo()" aria-label="Sortear amigo secreto">
```
Mientras que los textos a modificar segun la lógica de programación, son la que muestra los amigos añadidos al sorteo y al amigo seleccionado
```
<ul id="listaAmigos" class="name-list" aria-labelledby="listaAmigos" role="list"></ul>
<ul id="resultado" class="result-list" aria-live="polite"></ul>
```

## app.js
En javascript se desarrolla la logica del programa. donde se 