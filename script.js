const getValueInput = (value) =>
{
    let inputValue = document.getElementById("domTextElement").value;
    {value === 0? frase = encript(inputValue): frase = desencript(inputValue)}
    document.getElementById("valueInput").innerHTML = frase;
}

function encript(frase) {
    let stru = frase.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    return stru
}

function desencript(frase) {
    let stru = frase.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    return stru
}