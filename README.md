##Nuevo carousel responsive sin jquery muy simple de entender

### Carousel ###
>v.0.1.0

###Caracteristicas:
* Responsive
* Acepta cualquier cantidad de items
* Personalizable Css
* Facil de aplicar 
* Sin Jquery

> Probado en IE10, Chrome, Safari, Firefox, Opera, iPhone, iPad, (cualquier navegador que acepte la proriedad flexbox).


### 1.Como empezar
Agrega estos archivos en tu html.


```html
<!-- Estilos basicos -->
<link rel="stylesheet" href="carousel.css">
 
<!-- Incluir archivo javascript -->
<script src="carousel.js"></script>
```
### 2.Set up your HTML
Muestra de la estructura a usar en el html.
El contenedor que envuelve el carousel puede ser obviado solo hace el efecto de overflow hidden.

```html
<div class="contenedor"> <!-- opcional -->
	<ul id="carousel" class="carousel">
	  <li> <figure> TU IMAGEN </figure> </li>
	  <li> <figure> TU IMAGEN </figure> </li>
	  <li> <figure> TU IMAGEN </figure> </li>
	  <li> <figure> TU IMAGEN </figure> </li>
	  <li> <figure> TU IMAGEN </figure> </li>
	  <li> <figure> TU IMAGEN </figure> </li>
	  <li> <figure> TU IMAGEN </figure> </li>
	  ...
	</ul>
</div>
```
### 3.Listo para usar
Esperabas mas configuracion?, pues esto es todo.


License
------------
The MIT License (MIT)