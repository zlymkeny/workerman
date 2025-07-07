/*let message = document.getElementById("message")
let btn1 = document.getElementById("no1")
let btn2 = document.getElementById("no2")
let btn3 = document.getElementById("no3")
let btn4 = document.getElementById("no4")
let btn5 = document.getElementById("no5")
let btn6 = document.getElementById("no6")
let btn7 = document.getElementById("no7")
let btn8 = document.getElementById("no8")
let btn9 = document.getElementById("no9")
let btn0 = document.getElementById("no0")
let plus = document.getElementById("plusbtn")
let minus = document.getElementById("minusbtn")
let multiply = document.getElementById("multbtn")
let divide = document.getElementById("divbtn")
let equal = document.getElementById("equbtn")
let clear = document.getElementById("clear")


btn1.onclick = function () {
    message.textContent += "1";
    

};

btn2.onclick = function () {
    message.textContent += "2";

};

btn3.onclick = function () {
    message.textContent += "3";

};

btn4.onclick = function () {
    message.textContent += "4";

};

btn5.onclick = function () {
    message.textContent += "5";

};

btn6.onclick = function () {
    message.textContent += "6";

};

btn7.onclick = function () {
    message.textContent += "7";

};

btn8.onclick = function () {
    message.textContent += "8";

};

btn9.onclick = function () {
    message.textContent += "9";

};

btn0.onclick = function () {
    message.textContent += "0";
}

plus.onclick = function () {
    message.textContent += "+";

};

minus.onclick = function () {
    message.textContent += "-";
};

divide.onclick = function () {
    message.textContent += "/";

};

clear.onclick = function () {
    message.textContent = "";

};

equal.onclick = function () {
    message.textContent =  eval(message.textContent);

};

multiply.onclick = function () {
    message.textContent += "*";
    message.textContent += "";    
}; */




let message = document.getElementById("message");

let btn = document.getElementById("gobtn");

let word = document.getElementById("word");

btn.onclick = function () {
    message.textContent += (word.value + "hey");
};

const arr = [1, 5, 6, 7, 3, 2, 4, 8, 9, 0];

const target = 10


const name = (array, target) => {
    let map = {}
    
    for (let i = 0; i < array.length; i++) {
        let complement = target - array[i];
        if (map.hasOwnProperty(complement)) {
            return [array[i], complement];
        }
        map[array[i]] = i;
    }
    return null;
}

name(arr, target);






// O(N)^2
// O(N)
// O(1)


// function name(x, y) {

// }

// const name = (array, target) => {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] + array[j] === target) {
//                 return [array[i], array[j]];
//             }
//         }
//     }
//     return null;
// }




const obj = [
    {
        name: "John",
        age: 30,
        city: "New York"
    },
    {
        name: "Jane",
        age: 25,
        city: "Los Angeles"
    },
    {
        name: "Mike",
        age: 35,
        city: "Chicago"
    },
    {
        name: "Sara",
        age: 28,
        city: "Miami"
    },
    {
        name: "Tom",
        age: 32,
        city: "Houston"
    },
    {
        name: "Emma",
        age: 27,
        city: "Seattle"
    },
    {
        name: "Liam",
        age: 29,
        city: "San Francisco"
    },
    {
        name: "Olivia",
        age: 31,
        city: "Boston"
    },
    {
        name: "Noah",
        age: 26,
        city: "Phoenix"
    },
    {
        name: "Ava",
        age: 24,
        city: "Dallas"
    }
]

// map (60%),
// filter (10%),
// reduce (2%),
// forEach (5%),
// find(10%),
// some (1%),
// include (9%),
// hasOwnProperty (3%),



obj.map((object, index) => (
    console.log(object.name, index)
))

obj.find((object) => (
    console.log(object.name === "Ava",)
))

obj.filter((object) => (
    console.log(object.age > 30)
))

obj.forEach((a) => (
    console.log(a.city)
)) 


obj.reduce((prev, next) => {
    // console.log(prev, next.age)
    prev = prev + next.age;
    console.log(prev);
    return prev;
}, 0)

obj.map((object) => (
    console.log(object.hasOwnProperty("name"))
))