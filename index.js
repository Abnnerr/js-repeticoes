
// let soma = 0
// for (let num = 1; num <= 100; num++) { 
//     console.log(soma += num)
// }

// function enviar() {
//     let valor = document.querySelector('#oi').value
//     let valornum = Number(valor)
//     for (let num = 1; num <= valornum; num++) {

//         if (num % 2 == 0) {
//             alert(num)
//         }
//     }
// }

// let lista = ['jonas', 'abner', 'silva', 'vieira']


// for(let num = 0; num < 4; num++) {
//     console.log(lista[num])
// }

// for(let num = 0; num < 30; num++) {
//     if (num % 2 != 0) {
//         console.log(num)
//     }
// }



function contar(arr) {
    count = 0
    while(arr[count]) {
        count++;
    }
}
contar(['a','b','c'])
console.log(count)