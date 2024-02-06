var idade = 66
if (idade < 16) {
    console.log('Não pode votar')
} else if (idade < 18 || idade > 65){
    console.log('Votar é opcional')
} else {
    console.log('Votar é obrigatório')
}