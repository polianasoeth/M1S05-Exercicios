function classificarIdade() {
    const idade = Number(document.getElementById('idade').value)
    const resultado = exiba(idade)
    alert(resultado)
}


function exiba(idade) {
    if (idade <= 15) {
        return "Pessoa Jovem!"
    } else if (idade <= 64) {
        return "Pessoa Adulta!"
    } else {
        return "Pessoa Idosa!"
    }
}