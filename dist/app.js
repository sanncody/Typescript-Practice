"use strict";
// let num1 = 3;
function logPoint(p) {
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
