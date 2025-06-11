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

/*interface HasAge {
    age: number;
}


function getOldest(people: HasAge[]) {
    return people.sort((a, b) => b.age - a.age)[0];
}

const people: HasAge[] = [{ age: 23 }, { age: 12 }, { age: 32 }];

console.log(getOldest(people).age); // 32

interface Player extends HasAge {
    name: string;
}

const players: Player[] = [{ name: "John", age: 23 }, { name: "Jane", age: 12 }, { name: "Joe", age: 32 }];*/


// Assertion

// const person = getOldest(players) as Player; ('as' Type is an assertion type like zabardasti type assign karna which is not efficient)
// person.age and person.name are accessible


// Using generics we can solve this

/*interface HasAge {
    age: number;
}

interface Player extends HasAge {
    name: string;
}

function getOldest<T extends HasAge>(people: T[]): T {
    return people.sort((a, b) => b.age - a.age)[0];
}

const players: Player[] = [{ name: "John", age: 23 }, { name: "Jane", age: 12 }, { name: "Joe", age: 32 }];

const person = getOldest(players);
console.log(person.age); //32
console.log(person.name); //Joe
*/

// Next example on Generics

/* Convention: When we create Type we use 'T' as initial (like TPost). When we create Interface, we use 'I' as initial (like IPost) */

interface IPost {
    title: string;
    id: number;
    description: string;
}

interface IUser {
    id: number;
    name: string;
    age: number;
}

// const fetchPostData = async (path: string): Promise<IPost[]> => {
//     const response = await fetch(`https://example.com${path}`);

//     return response.json();
// };

// const fetchUsersData = async (path: string): Promise<IUser[]> => {
//     const response = await fetch(`https://example.com${path}`);

//     return response.json();
// };


// General function for any kind of data (No need of creating functions again and again as above)
/*const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
    const response = await fetch(`https://example.com${path}`);

    return response.json();
}; 

(async () => {
    // const posts = await fetchPostData("/posts");
    const users = await fetchData<IUser[]>("/users");
    console.log(users[0]);
})();*/


// Duck Typing/ Structural Typing (Types are checked by structure not exact match)

/* 

- Duck typing in TypeScript, also known as structural typing, focuses on the shape of an object rather than its explicit type. If an object has the required properties and methods of a certain type, it is considered compatible with that type, regardless of whether it explicitly declares that relationship. 

- This concept is derived from the saying: "If it walks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck." 

*/


// Example 1: Example generated by Google AI

interface Point {
    x: number;
    y: number;
}

function logPoint(p: Point) {
    console.log(`x: ${p.x}, y: ${p.y}`);
}

// const point1 = {
//     x: 5,
//     y: 2
// };

// const point2 = {
//     x: 20,
//     y: 55,
//     z: 32
// };

// logPoint(point1); // Valid (x: 5, y: 2 as output)
// logPoint(point2); // Valid, Extra property 'z' gets ignored

// logPoint({ x: 20, y: 55, z: 32 });  // Invalid When you pass an object literal directly to a function or variable of a specific type, TypeScript performs a stricter check.It enforces only the properties declared in the target type.

// const point3 = {
//     x: 54, 
//     z: 3
// };

// logPoint(point3); // Error: Property 'y' is missing in type '{ x: number; z: number; }'


// Example 2 : Rakesh Sir example

// interface ICredential {
//     username: string;
//     password: string;
// }

// function login(credentials: ICredential) {
//     console.log(`Credentials : { Username: '${credentials.username}', Passcode: '${credentials.password}' }`);
// }

// const user = {
//     username: "John Doe",
//     password: "passSecret",
//     isAdmin: true
// };

// login(user); // Valid
// login({ username: "John Doe", password: "passSecret", isAdmin: true }); // Invalid



// How to define function created in object in corresponding interface
/*interface IAuth {
    username: string;
    password: string;
    login(username: string, password: string): boolean;
}

const auth: IAuth = {
    username: "Jane Doe",
    password: "passSecret",
    login(username: string, password: string) {
        return true;
    }
};

console.log(auth);*/

// Inference
/* Under the hood typescript infers the types automatically */
let num = 43; // TS infers number automatically under the hood
let str = "Camp"; // TS infers string automatically under the hood