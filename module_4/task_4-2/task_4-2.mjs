"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < numbers.length; i++) {
    printOut(numbers[i].toString());
}

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(numbers.join('-'));

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const text = "Hei på deg, hvordan har du det?";

let words = text.split(" "); 

for (let i = 0; i < words.length; i++) {
    printOut(`Ord nr ${i + 1}: Indeks ${i}, Ordet er '${words[i]}'`);
}

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let names = [
    "Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
    "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina",
    "Maria", "Elisabeth", "Kristin"
];

function removeElement(array, element) {
    let index = array.indexOf(element);

    if (index !== -1) {
        array.splice(index, 1); 
        printOut(`Elementet "${element}" er fjernet.`);
    } else {
        printOut(`Elementet "${element}" finnes ikke i arrayet.`);
    }
}

removeElement(names, "Inger"); 
removeElement(names, "Ola");   


printOut("Oppdatert liste:");
for (let i = 0; i < names.length; i++) {
    printOut(names[i]);
}

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let boyNames = [
    "Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
    "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias",
    "Liam", "Håkon", "Theodor", "Magnus"
];

let allNames = names.concat(boyNames); 



printOut("Alle navnene:");
for (let i = 0; i < allNames.length; i++) {
    printOut(allNames[i]);
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class TBook {
    constructor(title, author, ISBN) {
        this.title = title;    
        this.author = author;  
        this.ISBN = ISBN;      
    }

    toString() {
        return `Tittel: ${this.title}, Forfatter: ${this.author}, ISBN: ${this.ISBN}`;
    }
}

let books = [
    new TBook("The Hobbit", "J.R.R. Tolkien", "978-0261103344"),
    new TBook("1984", "George Orwell", "978-0451524935"),
    new TBook("To Kill a Mockingbird", "Harper Lee", "978-0061120084")
];

for (let i = 0; i < books.length; i++) {
    printOut(books[i].toString());
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const EWeekDays = {
    WeekDay1: { value: 0x01, name: "Mandag" },
    WeekDay2: { value: 0x02, name: "Tirsdag" },
    WeekDay3: { value: 0x04, name: "Onsdag" },
    WeekDay4: { value: 0x08, name: "Torsdag" },
    WeekDay5: { value: 0x10, name: "Fredag" },
    WeekDay6: { value: 0x20, name: "Lørdag" },
    WeekDay7: { value: 0x40, name: "Søndag" },
    Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager" },
    Weekends: { value: 0x20 + 0x40, name: "Helg" },
};

const keys = Object.keys(EWeekDays);

for (let i = 0; i < keys.length; i++) {
    const key = keys[i]; 
    const element = EWeekDays[key]; 
    printOut(`${key}: Value = ${element.value}, Name = ${element.name}`);
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let randomNumbers = Array.from({ length: 35 }, () => Math.floor(Math.random() * 20) + 1);

let ascendingOrder = [...randomNumbers].sort((a, b) => a - b);

let descendingOrder = [...randomNumbers].sort((a, b) => b - a);

printOut("Original array:" + randomNumbers.toString());
printOut("Stigende rekkefølge:" + ascendingOrder.toString());
printOut("Synkende rekkefølge:" + descendingOrder.toString());

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let frequencyMap = {};
for (let num of randomNumbers) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1; 
}

let sortedByFrequency = Object.entries(frequencyMap) 
    .sort((a, b) => {
        if (b[1] === a[1]) {
            return a[0] - b[0]; 
        }
        return b[1] - a[1]; 
    });

printOut("Tall og deres frekvens:");
for (let [num, freq] of sortedByFrequency) {
    printOut(`Tall: ${num}, Frekvens: ${freq}`);
}

let frequencyGroups = {};
for (let [num, freq] of sortedByFrequency) {
    if (!frequencyGroups[freq]) {
        frequencyGroups[freq] = [];
    }
    frequencyGroups[freq].push(num);
}

printOut("\nFrekvenser og tilhørende tall:");
for (let freq of Object.keys(frequencyGroups).sort((a, b) => b - a)) {
    printOut(`Frekvens: ${freq}, Tall: ${frequencyGroups[freq].join(", ")}`);
}

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/


let twoDimensionalArray = [];


for (let row = 0; row < 5; row++) {
    let currentRow = [];
    for (let col = 0; col < 9; col++) {
        currentRow.push(`Rad ${row + 1}, Kolonne ${col + 1}`);
    }
    twoDimensionalArray.push(currentRow);
}

printOut("Innhold i 2D-arrayen:");
for (let row = 0; row < twoDimensionalArray.length; row++) {
    for (let col = 0; col < twoDimensionalArray[row].length; col++) {
        printOut(twoDimensionalArray[row][col]);
    }
}

printOut(newLine);
