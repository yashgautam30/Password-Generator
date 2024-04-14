const pass="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let slider=document.getElementById("myRange");
let displaySlider=document.getElementById("length");
let passLen=8;

let box1=document.getElementById("box-1");
let box2=document.getElementById("box-2");
let box3=document.getElementById("box-3");
let box4=document.getElementById("box-4");

slider.addEventListener("input", function(){
    passLen=slider.value;
    displaySlider.textContent=`${slider.value}`;
});

function generatePass(){
    box1.textContent=getPass();
    box2.textContent=getPass();
    box3.textContent=getPass();
    box4.textContent=getPass();
}

function getPass(){
    let password="";

    for(let i=0; i<passLen; i++){
        let random=Math.floor(Math.random() * pass.length);

        password+=pass[random];
    }

    return password;
}