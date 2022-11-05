# FLASH-JS-map
Proyecto para conocer el funcionamiento de uno de los metodos funcionales de js

Mediante la función map es posible crear un nuevo arreglo a partir de uno existente, tan simple como eso ¿o no?.
Cómo podemos comprobar en el fragmento, la función map siempre regresará un nuevo arreglo, dejando intacto el arreglo origen, esto es importante por que mantiene la inmutabilidad del array origen, permitiendo crear tantas variantes del arreglo original sin afectar el original.

La función map recibe cómo parámetro una función (callback) la cual se ejecutará para cada elemento del array, sin embargo, en ECMAScript 6 es posible utiliza Arrow Functions en lugar de una callback.
Hace un momento dijimos que map recibe una función, sin embargo, falto detallar que esta función puede recibir 3 parámetros, los cuales son los siguientes:

currentValue: elemento actual que se esta procesando.
index: corresponde a la posición (index) donde se encuentra el currentValue dentro del array.
array: corresponde al array original que estamos procesando.
Cabe mencionar que si bien la función map no muta el array original, hay que tener cuidado con el parámetro array, pues dentro de la función callback podríamos mutar el array original, lo cual es un anti-patrón, pues debemos respetar la inmutabilidad de los parámetros.


![Sin título](https://user-images.githubusercontent.com/113071685/200095601-c84175e8-c4d2-4917-a4e5-a345d4d7dfb8.png)
