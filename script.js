let celcius= document.querySelector('#celcius > input')
let Fahrenheit= document.querySelector('#fahrenheit > input')
let kelvin= document.querySelector('#kelvin > input')


let btn= document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

celcius.addEventListener('input', function(){
    let ctemp= parseFloat(celcius.value)
    let ftemp= ctemp*(9/5) + 32
    let ktemp = ctemp + 273.15


    Fahrenheit.value = roundNumber(ftemp)
    kelvin.value = roundNumber(ktemp)
 })

 Fahrenheit.addEventListener('input', function(){
     let ftemp= parseFloat(Fahrenheit.value)
     let ctemp= (ftemp-32)*(5/9)
     let ktemp = (ftemp - 32)*(5/9) + 273.15


    celcius.value = roundNumber(ctemp)
    kelvin.value = roundNumber(ktemp)
 })

 kelvin.addEventListener('input', function(){
    let ktemp= parseFloat(Fahrenheit.value)
    let ctemp= ktemp - 273.15
    let ftemp = (ktemp - 273.15)*(9/5) + 32


   celcius.value = roundNumber(ctemp)
   kelvin.value = roundNumber(ftemp)
})

btn.addEventListener('click' , ()=>{
    celcius.value = ""
    Fahrenheit.value=""
    kelvin.value = ""
})