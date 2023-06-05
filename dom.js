const h1 = document.querySelector("h1")
const form = document.querySelector("#form")
const input1 = document.querySelector("#calculo1")
const input2 = document.querySelector("#calculo2")
const btn = document.querySelector("#btnCalular")
const result = document.querySelector("#result")

/*form.addEventListener("submit", sumarinputvalue) // escucha el clik, y la funcion

function sumarinputvalue(event) {
  // creamos la funcion
  //console.log({ event })
  event.preventDefault()
  const sumaImputs = input1.value + input2.value
  result.innerText = "Resultado; " + sumaImputs
}*/

form.addEventListener("click", sumarinputvalue)

function sumarinputvalue(event) {
  // creamos la funcion
  //console.log({ event })
  //event.preventDefault()
  const sumaImputs = input1.value + input2.value
  result.innerText = "Resultado: " + sumaImputs
}
