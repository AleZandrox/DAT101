"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printTodaysDate() {
    const today = new Date();
    const norwegianDate = today.toLocaleDateString('no-NB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    printOut(`I dag er det ${norwegianDate}`);
  }
  
  printTodaysDate();


printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function getTodaysDate() {
    const today = new Date();
    const norwegianDate = today.toLocaleDateString('no-NB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    printOut(`I dag er det ${norwegianDate}`);
    return today;
  }
  function daysUntil2XKOLaunch() {
    const today = new Date();
    const launchDate = new Date('2025-05-14');
    const timeDifference = launchDate - today;
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysLeft;
  }
  function displayDateAndCountdown() {
    const today = getTodaysDate();
    const daysLeft = daysUntil2XKOLaunch();
    printOut(`I dag er det ${today.toLocaleDateString('no-NB')}`);
    printOut(`Det er ${daysLeft} dager igjen til lanseringen av 2XKO!`);
  }
  
  displayDateAndCountdown();


printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function circleProperties(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;
  
    printOut(`Diameter: ${diameter}`);
    printOut(`Omkrets: ${circumference.toFixed(2)}`);
    printOut(`Areal: ${area.toFixed(2)}`);
  }
  
  circleProperties(5);


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function rectangleProperties(rectangle) {
    const { width, height } = rectangle;
    const circumference = 2 * (width + height);
    const area = width * height;
  
    printOut(`Omkrets: ${circumference}`);
    printOut(`Areal: ${area}`);
  }
  
  rectangleProperties({ width: 10, height: 5 });


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/*
Create a function that handles the conversion between Celsius, Fahrenheit, and Kelvin. Use three different
numbers and print all three combinations as integers (no decimals). Design the function to take two
parameters: first the temperature, then the temperature type/id. Use these parameters to convert to the
other two temperature types and print them. Formula:
//Fahrenheit = (Kelvin - 237.15)*9/5 + 32;
//Celsius = Kelvin - 237.15
//Celsius = (Fahrenheit - 32) * 5/9;
*/
/* Put your code below here!*/
const ETemperaturType = {Celsius: 1, Fahrenheit: 2, Kelvin :3}
function convertTemperature(aTemperature, aType){
    let Fahrenheit = 0;
    let Celsius = 0;
    let Kelvin = 0;
    switch(aType){
        case ETemperaturType.Celsius:
            printOut("Convert from Celsius");
            //convert to Fahrenheit
            //Fahrenheit = (Kelvin - 237.15)*9/5 + 32;

            Celsius = aTemperature;
            Fahrenheit = (Celsius * 9/5)*9/5 + 32;
            Kelvin = Celsius + 237.25;
            break;
        case ETemperaturType.Fahrenheit:
            printOut("Convert from Fahrenheit");
            break;
        case ETemperaturType.Kelvin:
            printOut("Convert from Kelvin");
            break;
    }

    printOut("Celsius = " + Celsius.toFixed(0));
    printOut("Fahrenheit = " + Fahrenheit.toFixed(0));
    printOut("Kelvin = " + Kelvin.toFixed(0));
}

convertTemperature(0, ETemperaturType.Celsius);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateNetPrice(aPrice, aTaxGroup){
    let net = NaN;
    let taxGroup = aTaxGroup.toUpperCase();
    let vat = NaN;
    printOut("TaxGroup = " + taxGroup);

    switch(taxGroup){
        case "NORMAL":
        vat = 25;
    }

    if(Number.isNaN(vat)){
        net = (100 * aPrice) / (vat + 100);
    }

    return net;
}
const netPrice1 = calculateNetPrice(100, "normal");
if(Number.isNaN(netPrice1)) {
    printOut("Unknown VAT group!");
}else{
    printOut("netPrice1 = " + netPrice1.toFixed(2))
}

const netPrice2 = calculateNetPrice(100, "goblins");
if(Number.isNaN(netPrice2)) {
    printOut("Unknown VAT group!");
}else{
    printOut("netPrice2 = " + netPrice2.toFixed(2))
}

printOut("");


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function testIfMathIsFun(){
    let op = 1;
    let line = 1;
    // Left side
    let ok = false;
    do{
    let sumLeft = 0;
    for(let left = 0; left < line + 1; left++){
        sumLeft += op;
        op++;
        
    }

    let sumRight = 0;
    for (let right = 0; right < line; right++){
        sumRight += op;
        op++;

    }

    if(sumLeft !== sumRight){
        ok = false;
        printOut("Error in line " + line.toString());
    }else{
        ok = true;
    }
    line++;

    if(line > 200){
        printOut("Math is fun!");
        break;
    }

} while (ok);

}

testIfMathIsFun();


printOut(" ");

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const countTo = 10;
function count2(aNumber){
    if(aNumber <= countTo){
        printOut(aNumber.toString());
        count2(aNumber + 1);
        printOut(aNumber.toString());
    }
}

count2(1);
printOut("Replace this with you answer!");
printOut(newLine);
