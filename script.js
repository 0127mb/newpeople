let inp1 = document.querySelector('.input1');
let inp2 = document.querySelector('.input2');
let plus = document.querySelector('.pLus');
let minus = document.querySelector('.minus');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let equals = document.querySelector('.equals');
let div = document.querySelector('.box')

plus.addEventListener('click', () => {
let input1 = Number(inp1.value) ;
let input2 = Number(inp2.value) ;

div.innerHTML = input1+input2
}

)
minus.addEventListener('click', () => {
let input1 = Number(inp1.value) ;
let input2 = Number(inp2.value) ;

div.innerHTML = input1-input2
}

)

multiply.addEventListener('click', () => {
let input1 = Number(inp1.value) ;
let input2 = Number(inp2.value) ;

div.innerHTML = input1*input2
}

)
divide.addEventListener('click', () => {
let input1 = Number(inp1.value) ;
let input2 = Number(inp2.value) ;

div.innerHTML = input1/input2
}

)