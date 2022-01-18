const getValueInput = () =>
{
    let inputValue = document.getElementById("domTextElement").value;
    document.getElementById("valueInput").innerHTML = inputValue;
    console.log(inputValue)
}