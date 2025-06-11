// let num1 = 3;
function logPoint(p) {
    console.log("x: ".concat(p.x, ", y: ").concat(p.y));
}
var auth = {
    username: "Jane Doe",
    password: "passSecret",
    login: function (username, password) {
        return true;
    }
};
console.log(auth);
