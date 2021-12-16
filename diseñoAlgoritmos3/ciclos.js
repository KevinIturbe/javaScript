/* 
Ciclos, bucles, loops

while - permite que hagamos una tarea repetitiva según la cantidad de veces que asignemos
do while
for

While

primero 
let condicion = 1 - valor inicial
palabra reservada while(condicion){ 
    tu codigo 
modificacion a nuestro valor inicial}

condicion++ lo que hace es sumarle 1 a la condicion se llama incremento
*/


/* do while


for(declaramos variable, 
    recuerda usar punto y 
    coma aqui si es importante)
for(let control = 1; control<= 10; control++)

utiliza un contador 
*/


/* const numeros = [1, 4, 7, 9, 19, 15, 46, 27, 40, 123]
numeros.forEach(function(el){resultado.push(el *2)})
 */

const numeros = [1, 4, 7, 9, 19, 15, 46, 27, 40, 123]
const resultado = []

for(let i = 0; i < numeros.length; i++){
    let multiplicacion = numeros[i]*2
    resultado.push(multiplicacion)
    console.log(resultado[i])
}

console.log(resultado)
