/* Son una colección de elementos
cuentan con métodos o funciones que nos permiten ordenar o manipular los datos que almacenemos
 
son estructuras de datos
son cajas pero separados, se usan para agrupar*/

/* para declarar un arreglo:
(se usan los corchetes cuadrados)
se pueden meter arreglos dentro de los arreglos */

const arreglo1 = [];
console.log(arreglo1);

/* hay otras formas de declarar arreglos: */

const Arreglo2 = array.of(1, "hola", true);
console.log(Arreglo2);

/* manera 3 */
const arrehlo3 = new array(3, true, "adios", [1, 2, 3, 4, 5]);

const frutas = ["manzana", "naranjas", "uvas", "sandias"];// notacion de corchetes
console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[4][4]);

/* Método lenght me permite conocer la longitud del arreglo */

const letras = ["a", "b", "c", "d"]
console.log(letras.length)

/* otro metodo push este añade un elemento al final de nuestro arreglo */
letras.push("e")

/* pop esto elimina el ultimo elemento */

letras.pop()

/* unshift agrega un elemento al inicio del elemento */
letras.unshift("a")

/* shift elimina el primer elemento */

frutas[2][2].push(elemento) /*  así se añade un push dentro de un arreglo dentro de un arreglo */