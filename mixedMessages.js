// @ts-check
let array1 = ['hello', 'bye'];
let array2 = ['my', 'his'];
let array3 = ['cool kid', 'uncool kid'];

//Generates a number from 0 to length of array-1
const random = length => {
    return Math.floor(Math.random()*length);
}

//Choose one from each array
const randomizeChoose = array => {
    const randomArray = array[random(array.length)];
    return randomArray;
}

let concat = `${randomizeChoose(array1)} ${randomizeChoose(array2)} ${randomizeChoose(array3)}`;
console.log(concat);
console.log("test");