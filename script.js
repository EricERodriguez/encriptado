const getValueInput = (value) =>
{
    let inputValue = document.getElementById("domTextElement").value;

    // frase = encript(inputValue)

    console.log(value)

    {value === 0? frase = encript(inputValue): frase = desencript(inputValue)}
    document.getElementById("valueInput").innerHTML = frase;
    console.log(frase)
}

function encript(frase) {
    let letraE = /e/g;
    let letraI = /i/g;
    let letraA = /a/g;
    let letraO = /o/g;
    let letraU = /u/g;

    let stre = frase.replace(letraE, "enter");
    let stri = stre.replace(letraI, "imes");
    let stra = stri.replace(letraA, "ai");
    let stro = stra.replace(letraO, "ober");
    let stru = stro.replace(letraU, "ufat");

    return stru

}

function desencript(frase) {
    
    let letraE = /enter/g;
    let letraI = /imes/g;
    let letraA = /ai/g;
    let letraO = /ober/g;
    let letraU = /ufat/g;

    let stre = frase.replace(letraE, "e");
    let stri = stre.replace(letraI, "i");
    let stra = stri.replace(letraA, "a");
    let stro = stra.replace(letraO, "o");
    let stru = stro.replace(letraU, "u");

    return stru
}