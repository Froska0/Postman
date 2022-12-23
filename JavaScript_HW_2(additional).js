//4***:
//Преобразовать задание 3* таким образом, 
//чтобы возраст вводится используя функцию prompt в привязанной верстке
//Предположим, что наш клиент не очень умный человек, и может ввести возраст например так: ""'12'
//Мы хотим, чтобы даже при таком введении возраста, мы могли получить цифру 12 и сравнить её с тем, что нам нужно.
//Но при введении данных таким образом: ""'1"2' запись считалась бы строкой, а не числом.

let num = prompt("Write your age here");
let num_arr = num.split('');
//console.log(num_arr);

let nums = num_arr.length - 1;
do {
    if (num_arr[nums] == "'" || num_arr[nums] == '"') {
        let removed = num_arr.pop(1);
        nums--;
    }
}
while (num_arr[nums] == "'" || num_arr[nums] == '"');
//console.log("new", num_arr);

let numz = 0;
do {
    if (num_arr[numz] == "'" || num_arr[numz] == '"') {
        let removed = num_arr.shift(1);
    }
}
while (num_arr[numz] == "'" || num_arr[numz] == '"');
//console.log("new2", num_arr);

let age = +num_arr.join("");

let age_1 = 0;
let age_2 = 18;
let age_3 = 60;

if (typeof age != "number" && typeof age != "string") {
    console.log("Error! You have to write a number! But you wrote", typeof (age));
} else if (age <= age_1) {
    console.log("You wrote number", age, ". You should write number that >=", age_1);
} else if (age < age_2 && age > age_1) {
    console.log("You don’t have access cause your age is", age, ". It’s less then", age_2);
} else if (age >= age_2 && age < age_3) {
    console.log("Welcome  !");
} else if (age > age_3) {
    console.log("Keep calm and look Culture channel");
} else if (age == age_3) {
    console.log("Technical work");
} else {
    console.log("Error! You should write a number! But you wrote string");
} 
