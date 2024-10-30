"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 7;
if (wakeUpTime < 7) {
  printOut("I take the bus, the clock is " + wakeUpTime.toString());
} 
else if (wakeUpTime < 8) {
  printOut("I can take the train, the clock is " + wakeUpTime.toString());
}
else {
  printOut("I can take the car, the clock is " + wakeUpTime.toString());
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const tall1 = 0;
if(tall1 > 0) {
  printOut("Positive ");
}
else if(tall1 < 0 ) {
  printOut("Negative ");
}
else if (tall1 == 0){
  printOut("Tallet er null ");
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const ImageSize = Math.floor(Math.random() * 8) + 1;
printOut(`Bilde størrelse: ${ImageSize}`);

if (ImageSize >= 4) {
  printOut("godkjent");
} else {
  printOut("ikke godkjent");
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(`Bilde størrelse: ${ImageSize}`);

if (ImageSize >= 6) {
  printOut("godkjent");
} else {
  printOut("The image size is to big");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
  "Jun", "Juli", "August", "September", "October", "November", "December"];
  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

  if (monthName.toLowerCase().includes("r")) {
    printOut("You must take vitamin D");
  } else {
    printOut("You do not need to take vitamin D");
  }

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthIndex = Math.floor(Math.random() * noOfMonth);
const days = daysInMonth[monthIndex];

printOut(`Selected month: ${monthName}`);
printOut(`Number of days: ${days}`);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName === "March" || monthName === "Mai") {
  printOut("The gallery is closed for refurbishment.");
} else if (monthName === "April") {
  printOut("The gallery is open in temporary premises.");
} else {
  printOut("The gallery is open in its usual premises.");
}

printOut(newLine);
