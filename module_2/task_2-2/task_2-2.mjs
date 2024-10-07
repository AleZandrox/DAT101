"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const x = 2 + 3 * (2 - 4) * 6;
printOut("2 + 3 * 2 - 4 * 6 = " + x.toString());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const meter = 25.34
let mm = 25.4
mm = mm / 1000
const inches = meter / mm;
const exactInches = inches.toFixed(2);
printOut("inches =" + exactInches.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const part2_Answer = 
 (3 * hoursInDay * minutesInHour) +
 (12 * minutesInHour) +
 14 +
 (45 / secondsInMinute);
printOut("part2_Answer = " + part2_Answer.toString());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const numberOfMinutes = 6322.52;
let part4_Calc = numberOfMinutes / (60 * 24);
const part4_days = Math.floor(part4_Calc);
printOut("Days = " + part4_days);

part4_Calc = part4_Calc - part4_days
part4_Calc = part4_Calc * hoursInDay;
const part4_Hours = Math.floor(part4_Calc);
printOut("Hours = " + part4_Hours);

part4_Calc = part4_Calc - part4_Hours;
part4_Calc = part4_Calc * minutesInHour;
const part4_Minutes = Math.floor(part4_Calc);
printOut("Minutes = " + part4_Minutes);

part4_Calc = part4_Calc - part4_Minutes;
part4_Calc = part4_Calc * secondsInMinute;
const part4_Seconds = Math.floor(part4_Calc);
printOut("Seconds = " + part4_Seconds);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const NOK = 76 / 8.6;
const USD = 8.6 / 76;
let amountUSD = 54;
const amountNOK = Math.round(amountUSD * NOK);
printOut( amountUSD + " dollars is " + amountNOK + " kroner");
amountUSD = Math.round(amountNOK *USD);
printOut( amountNOK + " kroner is " + amountUSD + " dollars");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let text = "There is much between heaven and earth that we do not understand.";
let length = text.length;
let letter = text.charAt(19);
let letter358 = text.substr(34, 8);
let result = text.indexOf("earth");
printOut("the text has = " + length + " characters ");
printOut("the character number positioned at 19 is = " + letter);
printOut("the characters is going from = " + letter358);
printOut("the word (earth) is starting at = " + result);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const number1 = 5;
const number2 = 3;
if(number1 > number2){
    printOut("5 > 3 = True!");
} else if (number1 < number2){
    printOut("5 < 3 = False!");
}else {
    printOut("5 < 3 = False!");
}
const opp1 = 7;
const opp2 = 7;
if(opp1 == opp2){
    printOut("7 == 7 = True!");
} else if (opp1 > opp2){
    printOut("7 > 7 = false!");
}

const tall1 =  "a" > "b";
printOut(tall1.toString());

const tall2 = "1" < "a";
printOut(tall2.toString());

const tall3 =  "2500" < "abcd";
printOut(tall3.toString());

const navn1 = "Arne" !== "thomas";
printOut(navn1.toString());

const tall4 = "2" === "5";
printOut(tall4.toString());

const tall5 = "abcd" >"bcd";
printOut(tall5.toString());


printOut("Done");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const nulltall = "254";
const nytall = parseInt(nulltall); 
printOut(nulltall.toString());

const tallmed = "57.23";
const tallet = parseInt(tallmed);
printOut(tallmed.toString());

const kroner = "25 kroner";
const merkroner = parseInt(kroner);

printOut(kroner.toString());
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const r = Math.floor(Math.random() * 360) + 1;


printOut(r.toString());
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("131 days");
let uker = (131 - 131 % 7) / 7;
let nydager = 131 % 7;

printOut(uker.toString() + " weeks");

printOut(nydager.toString() + " days");
printOut(newLine);