let num =[5 , 8 , 9 , 2 , 3]

/*
num[5] = 1
num.push(7)
*/

let comp = num.length

console.log(`Nosso vetor é o ${num}. Ele possui ${comp} elementos.`)

/*
for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} possui o valor ${num[pos]}`)
}
*/

/*
for(let pos in num) {
    console.log(`A posição ${pos} possui o valor ${num[pos]}`)
}
*/

numOrd = num.sort()

console.log(`Nosso vetor ordenado é o ${numOrd}.`)

let valor = 5

let busca = numOrd.indexOf(valor)

if (busca == -1){
    console.log('Número não encontrado, tente outro valor.')
} else {
    console.log(`A posição do número buscado é ${numOrd.indexOf(busca)}.`)
}
