const imagen = document.querySelector(".blastoise")

imagen.addEventListener('click',() => {
  if(imagen.style.border === '5px solid red'){ 
    imagen.style.border='';
  }else{
    imagen.style.border='5px solid red'
  }
})


const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const input3 = document.querySelector('#input3')
const button = document.querySelector('.button-1')
const response = document.querySelector('.response')

button.addEventListener('click', () =>{
  let total = Number(input1.value) + Number(input2.value) + Number(input3.value)
  if (total > 10) {
    response.innerHTML = 'Llevas demasiados stickers'
  } else if (total === 10) {
    
    response.innerHTML = `Llevas ${total} stickers`
  } else {
    
    response.innerHTML = `Llevas ${total} stickers`
  }
})


const selector1 = document.querySelector("#uno")
const selector2 = document.querySelector("#dos")
const selector3 = document.querySelector("#tres")
const boton = document.querySelector('.button')
const resultado = document.querySelector('.resultado')

boton.addEventListener('click', () =>{
  let valor1 = Number(selector1.value)
  let valor2 = Number(selector2.value)
  let valor3 = Number(selector3.value)
  
  if (selector1.value == 9 && selector2.value == 1 && selector3.value == 1) {
  resultado.innerHTML = "contraseña 1 correcta"
  }else if (selector1.value == 7 && selector2.value == 1 && selector3.value == 4) {
    resultado.innerHTML = "contraseña 2 correcta"
 }else  {
   resultado.innerHTML = "contraseña incorrecta"   
 }
})