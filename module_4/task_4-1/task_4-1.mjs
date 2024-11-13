"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

const AccountType = {
    Normal: "Brukskonto",
    Savings: "Sparekonto",
    Credit: "Kredittkonto",
    Pension: "Pensjonkonto"
}
const CurrencyTypes = {
    NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
    EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
    USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
    GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
    INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
    AUD: { value: 0.1581, name: "Australienske dollar", denomination: "A$" },
    PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
    SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
    CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
    THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
}

class TAccount {
    #type;
    #balance;
    #withdrawCount;
    #currency;
    constructor(aType){
        this.#type = aType;
        this.#balance = 0;
        this.#withdrawCount = 0;
        this.#currency = CurrencyTypes.NOK;
    }

    toString(){
        return this.#type;
    }

    setType(aType){
        let text = "Account type has been changed from " + this.#type;
        this.#type = aType;
        this.#withdrawCount = 0;
        text += " to " + this.#type;
        printOut(text);
    }

    getBalance(){
        return this.#balance;
    }

    deposit(aAmount){
        this.#balance += aAmount;
        this.#withdrawCount = 0;
        printOut("Deposit of " + aAmount + ", new balance is " + this.#balance);
    }

    withdraw(aAmount){
        let canWithdraw = true;
        let text = "";
        switch (this.#type) {
            case AccountType.Savings:
                if(this.#withdrawCount < 3){
                    this.#withdrawCount++;
                    canWithdraw = true;
                }else {
                    canWithdraw = false;
                    text = "Cannot withdraw more than 3 times from a " + this.#type + " account. ";
                }
                break;
            case AccountType.Pension:
                canWithdraw = false;
                break;
            }
    if (canWithdraw) {
        this.#balance -= aAmount;
        printOut("Withdraw of " + aAmount + ", new balance is " + this.#balance);
        }else{
            printOut(text);
        }
    }
    currencyConvert(currency) {
        this.#balance = currency.value/this.#currency.value * this.#balance;
        printOut("The Account currency has change from " + this.#currency.name + " to " + currency.name);
        printOut("New balance is " + this.#balance + currency.denomination);
        this.#currency = currency;
    }

}

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(AccountType.Normal + ", "+ AccountType.Savings + ", " + AccountType.Credit + ", " + AccountType.Pension);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let myAccount = new TAccount(AccountType.Normal);
printOut("myAccount " + myAccount.toString());
myAccount.setType(AccountType.Savings);
printOut("myAccount: " + myAccount.toString());

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(100);
myAccount.withdraw(25);
printOut("My account balance is " + myAccount.getBalance());

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.deposit(25);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.setType(AccountType.Pension);
myAccount.withdraw(10);
myAccount.setType(AccountType.Savings);
myAccount.withdraw(10);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/



printOut(CurrencyTypes.toString());
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.currencyConvert(CurrencyTypes.SEK);

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);