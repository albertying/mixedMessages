// @ts-check
// You will be ____ today.
// ____ ____
const emotion = ['happy', 'sad', 'angry', 'frusterated', 'surprised', 'embarrassed', 'excited', 'proud', 'scared', 'depressed'];
const phrase1 = ['Work hard', 'Relax', 'Have fun', 'Chill out', 'Be grateful', 'Be happy', 'Be humble'];
const phrase2 = ['good things will happen', 'luck is in your favor', 'opportunities awaits', "it's your lucky day", 'fortune awaits', 'you will be granted great fortune', 'you will be rich'];

// Generates a number from 0 to length of array-1
const random = length => {
    return Math.floor(Math.random()*length);
}

// Choose one from each array
const randomizeChoose = array => {
    const randomArray = array[random(array.length)];
    return randomArray;
}

const concat1 = `You will be ${randomizeChoose(emotion)} today.`;
const concat2 = `${randomizeChoose(phrase1)}, ${randomizeChoose(phrase2)}.`;
console.log(concat1);
console.log(concat2);