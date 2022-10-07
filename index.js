


let loader = document.querySelector(".loader");

setTimeout(() => {
    loader.classList.add("active")
}, 4000);



let year = document.getElementById("years");
let data = new Date();

let birthday = data.getFullYear();

let brithyear = 2007;

let result = birthday - brithyear;

year.innerHTML = result;

console.log(result);


