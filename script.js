let number = document.getElementsByClassName("firstbox")
let from = document.getElementsByClassName("opt1")
// let to = document.getElementsByClassName("opt2")
let button = document.getElementsByClassName("btn")
let result = document.getElementsByClassName("output")


function feh(){
    console.log(`feh is running`);
    let  F = parseInt(number[0].value)
    console.log(F);
    let C =( (F - 32) *5/9).toFixed(2)
    console.log(typeof from[0].value);
    console.log(C);
    result[0].innerHTML = `${C} degree celcius`
}

function changeFromKelvin(){
    console.log(`changeFromKelvin is running`);
    console.log(from[0].value);
    let K = parseInt(number[0].value)
    console.log(K);
    let C = (K - 273.15).toFixed(2)
    console.log(C);
    result[0].innerHTML = `${C} degree celcius`
}

button[0].addEventListener("click", ()=>{
    (from[0].value === "F") ? feh() : changeFromKelvin()
})



