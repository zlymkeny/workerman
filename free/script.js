/*document.querySelector("button").onclick = function () {
    let age = document.getElementById("ageInput").value;
    let birthyear = 2025 - age;
    alert("this dude was born in," + birthyear)
}*/

document.querySelector("button").onclick = function () {
    let weight = parseFloat(document.getElementById("weightinput").value);
    let message =""
    let img = document.getElementById("resultimage");
    let text = document.getElementById("resulttext");
    
    if (!weight) {
        text.textContent = "TYPE YOUR WEIGHTTT😭😭 SCAREDY CAT";
    return;
}

    if (weight > 100) {
        message = "Sheesh 😬 youre kinda big, dont retry your luck";
        img.src = "speed gif.gif"
    }
    else {
        message = " ayee you're good "
        img.src = "speed clap gif.gif"
    }

    text.textContent = message
    img.style.display = "block";
};
