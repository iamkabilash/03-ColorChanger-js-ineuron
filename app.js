const canvas = document.getElementById("canvas");
const button = document.getElementById("button");

const numbers = "0123456789ABCDEF";

const changeColor = () =>{
    let hex = "#";
    
    for (let i=0; i<6; i++){
        hex = hex + numbers[Math.floor(Math.random()*16)];
    }
    console.log(hex);

    canvas.style.backgroundColor = hex;
}

button.addEventListener("click", changeColor);