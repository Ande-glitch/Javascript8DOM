// // Oppgave 1

const textBox = document.getElementById("result1");
document.getElementById("Fahrenheit").addEventListener("click", toFahrenheit)
document.getElementById("Celcius").addEventListener("click", toCelcius)

function toFahrenheit() {
    const Temp = Number(document.getElementById("Temp").value)
    let result = Temp * (9/5) + 32;
    textBox.textContent = `You have converted ${Temp} degrees Celcius into ${Math.round(result)} Fahrenheit`
}
function toCelcius() {
    const Temp = Number(document.getElementById("Temp").value)
    let result = (Temp - 32) * 5/9;
    textBox.textContent = `You have converted ${Temp} degrees Fahrenheit into ${Math.round(result)} Celcius`
}



// // Oppgave 2

const textBox2 = document.getElementById("result2");

function comparison() {
    let number1 = Math.round(Math.random()*9)+1;
    let number2 = Math.round(Math.random()*9)+1;

    document.getElementById("number1").value = number1;
    document.getElementById("number2").value = number2;

    if (number1 > number2) {
        textBox2.textContent = `${number1} is greater than ${number2}`;
    }
    else if (number2 > number1) {
        textBox2.textContent = `${number2} is greater than ${number1}`;
    }
    else {
        textBox2.textContent = `The numbers are alike`
    }
}

// // Oppgave 3

const textBox3 = document.getElementById("result3")

function palindrome() {
    const palinText = document.getElementById("palinText").value;
    adjusted = palinText.toUpperCase().split("").join("")
    reversed = palinText.toUpperCase().split("").reverse().join("") // comparing arrays wont work as intended, so after reversal make them into strings
    console.log(adjusted);
    console.log(reversed);

    if (adjusted === reversed) { 
        textBox3.textContent = `The word ${palinText} is a palindrome`
    }
    else {
        textBox3.textContent = `The word ${palinText} is NOT a palindrome`
    }
}

// // Oppgave 4

const redColor = document.getElementById("red");
const blue = document.getElementById("blue");
const random = document.getElementById("randomColor"); // eventlistener prompt must be used with strings

red.addEventListener("click", function() {
    document.getElementById("divEn").style.backgroundColor = 'red'
})

blue.addEventListener("click", function() {
    document.getElementById("divTo").style.backgroundColor = 'blue'
})

random.addEventListener("click", function() {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    document.getElementById("divTre").style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})


// // Oppgave 5

const starButton = document.querySelector("#starfish");

starButton.addEventListener("click", function() {
    let width = document.getElementById("width").value
    let height = document.getElementById("height").value
    let rektangel = '';

    for (let i = 0; i < width; i++) {
        rektangel += "*"}
    rektangel += "\n";

    for (let i = 0; i < height - 2; i++) {
        rektangel += "*";
        for (let j = 0; j < width - 2; j++) {
            rektangel += " ";}
        if (width > 1) {
            rektangel += "*";
        }
        rektangel += "\n";
    }
    if (height > 1) {
        for (let i = 0; i < width; i++) {
            rektangel += "*";
        }
    }

    document.getElementById("rektangel").textContent = rektangel;
})