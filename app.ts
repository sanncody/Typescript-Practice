// let num1 = 3;


// const calculate = (num1: number, num2: number) => {
//     return num1 + num2;
// };


// console.log(calculate(num1, 2));


// const getTotal = (numbers: Array<number>) => {
//     return numbers.reduce((acc, currItem) => {
//         return acc + currItem;
//     }, 0);
// };
// console.log(getTotal([2, 3, 10, 50]));


// const user = {
//     firstName: "John",
//     lastName: "Doe",
//     role: "Professor"
// };

// console.log(user.lastName);


/** Type Alias
 * number
 * string
 * string[] or number[]
 * boolean  
 * Custom Type 
*/

// type User = {
//     name: string;
//     role: string;
//     age: number;
//     address?: string;   // optional property
// }

// const user: User = {
//     name: 'Janey',
//     role: "Professor",
//     age: 23
// }

// console.log(user);


// Function also uses type for return value.

// function login(userData: User): User {
//     return userData;
// }

// console.log(login(user));


/* Another Custom type */
// type ID = number | string;

// const userId: ID = "4tnkglnkl";

// console.log(userId);


/*  Interfaces */

/*interface Transaction {
    payerAccountNumber: number;
    payeeAccountNumber: number;
}

interface BankAccount {
    accountNumber: number;
    accountHolder: string;
    balance: number;
    isActive: boolean;
    transactions: Transaction[];
}

const transaction1: Transaction = {
    payerAccountNumber: 7583,
    payeeAccountNumber: 123
}

const transaction2: Transaction = {
    payerAccountNumber: 7583,
    payeeAccountNumber: 456,
}

const bankAccount: BankAccount = {
    accountNumber: 5492520,
    accountHolder: "Jamey Kale",
    balance: 5000,
    isActive: true,
    transactions: [transaction1, transaction2]
}

console.log(bankAccount);*/


// How do we use 2 interfaces or extend one from other?


/*interface Book {
    name: string;
    price: number;
}

interface Ebook extends Book {
    // name: string;
    // price: number;
    fileSize: number;
    format: string;
}

interface AudioBook extends Ebook {
    // name: string;
    // price: number;
    // fileSize: number;
    // format: string;
    duration: number;
}

const book: AudioBook = {
    name: "Half Broken",
    price: 7999,
    fileSize: 300,
    format: 'pdf',
    duration: 5
};

console.log(book);*/


// Merging of interfaces: If we need to merge more than 2 interfaces, like if we need to add some property later on

/*interface Book {
    name: string;
    price: number;
}

interface Book {
    size: number;
}

const book: Book  = {
    name: "Networking",
    price: 4999,
    size: 230
};

console.log(book);*/



// Difference between type and interface in Typescript?

// 1. It does not support declaration merging as it gives error of duplicate identifier

/*type Book = {
    name: string;
    price: number;
}

type Book = {
    size: number;
}*/

// 2. Types are more flexible and can define primitive, union, intersection, tuple, or different types of data.

/*type SanitizedString = string; // Primitive Type
type EvenNumber = number;*/ //Primitive Type



// Unions ( '|' Pipe Symbol )

/*type ID = string | number;


// Narrowing: In TypeScript, narrowing refers to the process of reducing the type of a variable from a broader type to a more specific type within a certain code block or context.

function printId(id: ID) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

printId('jsdtklsbdtbl12324');
printId(1);*/


// Union Another example ( '|' Pipe symbol )
/*function getFirstThree(x: string | Array<number>) {
    return x.slice(0, 3);
}

console.log(getFirstThree([54, 43, 6, 70, 23, 454, 6746]));
console.log(getFirstThree("Done that"));*/



// Generics

/*function logString(arg: string) {
    console.log(arg);

    return arg;
}

logString("testing");

function logNumber(arg: number) {
    console.log(arg);

    return arg;
}

logNumber(43);


function logArray(arg: any[]) {   // We can't really use any keyword in typescript as it still behaves as JS which we don't want
    console.log(arg);

    return arg;
}

logArray([43, 54, 76, "split"]);*/



// Note: As we can see there is lot of repeated code in each function, so let's create one function and see how generics solve the problem of ours


// Here 'T' is the placeholder which automatically infers the type via parameters we'll pass while calling function
/*function logAnything<T>(arg: T): T {
    console.log(arg);

    return arg;
}

logAnything([43, 54, 76, "split", true, { name: "John" }]);*/



// Next example on Generics


// Given age of people in an array, then this function returns the age which is most oldest
function getOldest(items: Array<number>) {
    return items.sort((a, b) => b - a)[0];
}

console.log(getOldest([43, 23, 54, 31, 42, 65]));