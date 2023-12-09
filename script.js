
let username;
let number = 0;

function changetext1() {
    if (document.getElementById("text1").innerHTML === "Damn Daniel") {
        document.getElementById("text1").innerHTML = "Hello World";
    } else document.getElementById("text1").innerHTML = "Damn Daniel";
}
function changeimg() {
    if (document.getElementById("img").src.endsWith("Cirno.png")) {
        document.getElementById("img").src = "TheDowser.png";
    } else document.getElementById("img").src = "Cirno.png";
}

function increasenum() {
    for (let i = 0; i <= 200; i++) {
        document.getElementById("num").innerHTML = i;
    }
}

//Username
function getusername(){
    username = document.getElementById("myinput").value;
    document.getElementById("username").innerHTML = username;
}

//Counter

const counter = {
    decrease: function() {
        number -= 1;
        document.getElementById("counter").innerHTML = number;
    },

    reset: function() {
        number = 0;
        document.getElementById("counter").innerHTML = number;
    },

    increase: function() {
        number += 1;
        document.getElementById("counter").innerHTML = number;
    }
}
