//1*:
//Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
//Пример: const checkAge = function(age) {
//Ваши преобразования
//}

let age_1 = 0;
let age_2 = 18;
let age_3 = 60;

function Check_age(age) {
if (age < age_2 ) {
    console.log("You don’t have access cause your age is" , age , ". It’s less then" , age_2);   
} else if (age >=  age_2 && age <  age_3) {
    console.log("Welcome  !");
} else if (age  > age_3) {
    console.log("Keep calm and look Culture channel");
} else {
    console.log("Technical work")
}
};

Check_age (17);
Check_age (18);
Check_age (61);


//2*:
//Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. 
//И если он не Number - кидалась ошибка.

console.log("++++++++++++++++++++++++++++++++++++++++++");

function Check_age(age) {
    if (typeof age != "number") {
        console.log("Error! You have to write a number! But you wrote", typeof (age));   
    } else if (age < age_2 ) {
        console.log("You don’t have access cause your age is" , age , ". It’s less then" , age_2);   
    } else if (age >=  age_2 && age <  age_3) {
        console.log("Welcome  !");
    } else if (age  > age_3) {
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work")
    }
    };
    
    Check_age ("17");
    Check_age (true);
    Check_age (61);


    //3**:
    //Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) 
    //пропускалось, преобразовываясь в number
    //от себя добавлю ещё проверку, чтобы возраст был больше 0

    console.log("++++++++++++++++++++++++++++++++++++++++++");
    console.log("++++++++++++++++++++++++++++++++++++++++++");

    function Check_age(age) {
    if (typeof age != "number" && typeof age != "string") {
        console.log("Error! You have to write a number! But you wrote", typeof (age));
    } else if (age <= age_1) {
        console.log("You wrote number", age, ". You should write number that >", age_1);
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
};

Check_age ("-17");
Check_age (true);
Check_age ('sixty one');


//4***:
//Преобразовать задание 3* таким образом, 
//чтобы возраст вводится используя функцию prompt в привязанной верстке
//Предположим, что наш клиент не очень умный человек, и может ввести возраст например так: ""'12'
//Мы хотим, чтобы даже при таком введении возраста, мы могли получить цифру 12 и сравнить её с тем, что нам нужно.
//При введении данных таким образом: ""'1"2' запись тоже преобразовывалась бы к числу 12.

console.log("++++++++++++++++++++++++++++++++++++++++++");
console.log("++++++++++++++++++++++++++++++++++++++++++");
console.log("++++++++++++++++++++++++++++++++++++++++++");

let num = prompt("Write your age here");
let num_arr = num.split('');
//console.log(num_arr);

let new_arr = num_arr.filter(function(f) { return f !== '"' && f !== "'"} )
//console.log(new_arr)

let age = +new_arr.join("");

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
