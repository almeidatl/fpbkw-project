

let nota01 = document.querySelector('#nota01')
let nota02 = document.querySelector('#nota02')
let nota03 = document.querySelector('#nota03')
let nota04 = document.querySelector('#nota04')
let nota05 = document.querySelector('#nota05')

let res_display = document.querySelector('.resultado')


function media(){
    lista_notas = [parseFloat(nota01.value), parseFloat(nota02.value), parseFloat(nota03.value), parseFloat(nota04.value), parseFloat(nota05.value)]
    console.log(lista_notas)
    
    lista_notas.sort((a, b) => a - b)
    console.log(lista_notas)
    let nota_valida01 = lista_notas[1]
    let nota_valida02 = lista_notas[2]
    let nota_valida03 = lista_notas[3]

    media_final = (nota_valida01 + nota_valida02 + nota_valida03) / 3
    console.log(media_final)

    res_display.innerHTML = `${media_final.toFixed(2)}`
}

function zerar() {
    nota01.value = '';
    nota02.value = '';
    nota03.value = '';
    nota04.value = '';
    nota05.value = '';
    res_display.innerHTML = '';
}
