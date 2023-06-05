# Test de JavaScript

¡Es hora de poner a prueba cuanto sabes sobre JavaScript!

Esta lectura es una prueba de JavaScript. A diferencia de un examen, nadie te obligara a nada. **Puedes hacer trampa y saltar a la siguiente clase**, ese es el camino facil. Pero tengo mucha fe en ti, confio en que seguiras mis consejos y no avanzaras a la siguiente clase hasta superar esta prueba.

## Instrucciones para tomar esta prueba

- Evalua muy criticamente tu conocimiento.
- Si logras resolver la prueba, no importa cuanto te cueste, puedo asegurarte que tienes todo para continuar a las siguientes clases y tomar el resto del curso.
- Si no lo logras, no te preocupes, absolutamente nadie puede juzgarte, solo tu. Vuelve al [Curso Basico de JavaScript](https://platzi.com/cursos/basico-javascript/), anota los temas clave donde puedes mejorar, ubica las clases donde puedes aprenderlos y estudia vigorosamente.
- Es completamente valido hacer busquedas en Google, cursos y tutoriales de Platzi, incluso usar tu cuaderno de notas sin importar si es fisico o virtual.

Recuerda que **el exito no se mide por cuanto tiempo te toma aprender**, esa metrica es relativamente inutil. Mejor concentrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnologia.

¡Mucha suerte!

## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la seccion de comentarios:

- Que es una variable y para que sirve?
  R//Son Cajas o espacios en memoria donde podemos Guardar informacion (Dependiendo de los tipos
  y estructuras de datos que soporte nuestro Lenguaje)
- Cual es la diferencia entre declarar e inicializar una variable?
  R//Declarar es cuando le decimos a Javascript que vamos a crear una variable con el nombre tal.
  Mientras que inicializar es asiganarle un valor aun valor
- Cual es la diferencia entre sumar numeros y concatenar strings?
  R// + el operador que nos sirve para sumar es este = +
- Cual operador me permite sumar o concatenar?

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente informacion:

- Nombre = "String"
- Apellido = "String"
- Nombre de usuario en Platzi "strig" (@Luis2208)
- Edad = Numerico
- Correo electronico = string (rodriguesluis414@gmial.com)
- Mayor de edad = True o false
- Dinero ahorrado = number
- Deudas = number

### 3️⃣ Traduce a codigo JavaScript las variables del ejemplo anterior y deja tu codigo en los comentarios.

let nombre = "Luis" ;
let apellido = "Rodrigues";
let user = "Luis2208";
let edad = 20;
let correo = "rodriguesluis414@gmail.com";
let mayordeedad = true;
let dinero = 5000;
let deudas = 1200;

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
  R// let NombreComplete = nombre + ' ' + apellido;
- Dinero real (dinero ahorrado menos deudas)
  R// let DineroReal = dinero - deudas;

## Funciones

### 1️⃣ Responde las siguientes preguntas en la seccion de comentarios:

funtion nombrecompleto(name, lastname){
return name + ' ' +lastname
}

- Que es una funcion?
  R// las funciones guardar bloques de codigo para reutilizarlos y ejecutarlos en el Futuro
- Cuando me sirve usar una funcion en mi codigo?
  R// Nos Sirve Cuando tenemos variables muy parecidos con cambios que podrian ser parametros o argumentos. Que guardar para reutilizarlos mas de una vez en el futuro.

  Tambien nos sirva para ordenar la legibilidad de nuestro codigo

- Cual es la diferencia entre parametros y argumentos de una funcion?
  R// Las funciones Reciben parametros cuando las creamos y les enviamos argumentos cuando las ejecutamos

### 2️⃣ Convierte el siguiente codigo en una funcion, pero, cambiando cuando sea necesario las variables constantes por parametros y argumentos en una funcion:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function nombrecompleto (name, lastName){
    return name + ' ' + lastName
}
```

function saludo(name, lastname,username){
const completeName = nombrecompleto(name, lastname);
console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}
R//
saludo('luis','vanegas','luis2208')
Mi nombre es luis vanegas, pero prefiero que me digas Luis2208.

## Condicionales

### 1️⃣ Responde las siguientes preguntas en la seccion de comentarios:

- Que es un condicional?
  R// Son las formas en las que ejecuntamos un bloque de codigo y otro depiendo de alguna condicion o validacion
- Que tipos de condicionales existen en JavaScript y cuales son sus diferencias?
  R// if (else, else if), swifch

  /// IF =
  el condicional if (con else y else if) nos perminten hacer validaciones distintas en cada validacion o condicional. En cambio en el swirth todos los casos se comparan con la misma variabale o condicion que definimos en el swifth

- Puedo combinar funciones y condicionales?
  R// si las funciones puenden encapsular cualquier bloque de codigo, inclutendo condicionales.

### 2️⃣ Replica el comportamiento del siguiente codigo que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
//////////////////////////////////////
const tipodesuscripcion = "experDuo"
```

if (tipodesuscripcion === "free"){
console.log("Solo Puedes tomar los cursos gratis del curso gratis");
} else if (tipodesuscripcion === "basic"){
console.log("Puedes tomar cursos de platzi durante Un mes");
} else if (tipodesuscripcion === "experDuo"){
console.log("Puedes todos los cursos durante Un annio");
}

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

R//
function ConseguirTipoDeSub (suscripcion){
if (suscripcion === "free"){
console.log("Solo Puedes tomar los cursos gratis del curso gratis");
return;

} if (suscripcion === "basic"){
console.log("Puedes tomar cursos de platzi durante Un mes");
return;

} if (suscripcion=== "experDuo"){
console.log("Puedes todos los cursos durante Un annio");
return;
}
console.warn("Este tipo de Suscripcion no existe")
}

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafio a comentar como replicar este comportamiento con arrays o objetos y un solo condicional. 😏

R//
const TiposDeSubcrispciones = {
free: 'Solo puedes tomar los cursos gratis',
basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
expertDuo: 'Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un año'
};
function conseguirTipoSuscripcion(suscripcion){
if (TiposDeSubcrispciones[suscripcion]) {
console.log(TiposDeSubcrispciones[suscripcion])
return;
}

    console.warn('Este tipo de suscripcion no existe')

}
conseguirTipoSuscripcion('free') R// 'Solo puedes tomar los cursos gratis'

## Ciclos

### 1️⃣ Responde las siguientes preguntas en la seccion de comentarios:

- Que es un ciclo?
  R// Es la forma de ejecutar un bloque de codigo hasta que se cumpla cierta condicion o validacion.
- Que tipos de ciclos existen en JavaScript?
  R// el while , for , do while
- Que es un ciclo infinito y por que es un problema?
  R// Es algo que se repite por que no cumple las validaciones y condiciones establecidas dentro del codigo y termina danando la aplicacion de tanta validacion de codigo.
- Puedo mezclar ciclos y condicionales?
  R// Si, aunque los ciclos son unos espacios de condicionales, nada nos impide agregar mas condicionales.

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
////////////////////////
let i = 0;

while (i < 5){
  console.log("El Valor de i es:" + i);
  i++;
}
////////////////
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

///////////
let i = 10;
```

while (i >=2){
console.log("El valor de i es:" +i);
i--;
}

### 3️⃣ Escribe un codigo en JavaScript que le pregunte a los usuarios cuanto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la funcion prompt de JavaScript.

let respuesta;

while (respuesta != '4'){
let pregunta = prompt('Cuanto es 2 + 2')
respuesta = pregunta;
}

## Listas

### 1️⃣ Responde las siguientes preguntas en la seccion de comentarios:

- Que es un array?
  R// Es una Lista de Elementos.

const array = [1, "string", false, {nombre:"Luis", edad; 20}];

- Que es un objeto?
  R// Es una lista de elemtos, pero cada elemento tiene un nombre Clave.

const obj = {
nombre : "Luis",
Edad : 20.
};

- Cuando es mejor usar objetos o arrays?
  R// arrays cuando lo que haremos en un elemento es lo mismo que en todos los demas (la regla se puede incumplir). Mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo
- Puedo mezclar arrays con objetos o incluso objetos con arrays?
  R//Si, los arrays pueden guardar objetos. y los objetos pueden guardar arrays entre sus propiedades.

### 2️⃣ Crea una funcion que pueda recibir cualquier array como parametro e imprima su primer elemento.

function imprimirElemento(arr){
console.log(arr[0])
}
imprimirElemento(["Luis", "Camilo", "Daniel"])
Luis

### 3️⃣ Crea una funcion que pueda recibir cualquier array como parametro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

function imprimirelementoporelemento(arr){
for (let i = 0; i < arr.length; i++) {
console.log(arr[i])
}
}

imprimirelementoporelemento(["Luis", "Camilo","Carlos"])
Luis
Camilo
Carlos

### 4️⃣ Crea una funcion que pueda recibir cualquier objeto como parametro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

const object1 = {
Nombre: 'Luis',
Edad: 20,
mayor: true
};

console.log(Object.values(object1));
// Expected output: Array ["Luis", 20, True]

## Como te fue? 🏆

**¡Felicidades por completar la prueba de JavaScript!** Confio en que hayas completado cada paso y hayas pausado para repasar los temas de los ejercicios que se te complicaron.

Ahora si, continua a la siguiente clase, pero recuerda que **ya no puedes abandonar el curso**, debes completarlo hasta el final. No importa cuanto tiempo te tome. **Yo se que tu puedes. Y tu deberias de saberlo tambien.**

¡Te espero en la siguiente clase para comenzar!
