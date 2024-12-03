// Decison Making (if-else)

function ticketpricing (){
    let age = parseInt(prompt("Please enter your age:"));
if (age<=12){
    return "your ticket price is $10";
}
else if (age>=13 && age<=17){
    return "your ticket price is $15";
}
else {
    return "your ticket price is $20";
}
}
console.log(ticketpricing ())


function weatherclothingadviser(){
    let temperature = parseInt(prompt("What is the current temperature in degrees Celsius?"));
    if( temperature<=0){
        return "It's freezing! Wear a heavy winter coat, gloves, and a hat.";
    }
    else if ( temperature>=5 && temperature<=10){
        return "It's quite cold. Wear a warm jacket and layers.";
    }
    else if ( temperature>=12 && temperature<=20 ){
        return "The weather is cool. A light jacket or sweater should be enough.";
    }
    else {
        return "It's hot outside. Wear comfortable, breathable clothes like a tank top and shorts.";
    }
}
console.log(weatherclothingadviser())


// Recrusion 

function fibonnacisequence(n) {
    if (n<=1){
        return n
    }
return  fibonnacisequence (n-1)+ fibonnacisequence (n-2)
}
console.log(fibonnacisequence(8))


function powerfucntion(n,x){
    if (n===0){
        return 1 
    }
   return x*powerfucntion(n-1 ,x)
}
console.log(powerfucntion(2,4))