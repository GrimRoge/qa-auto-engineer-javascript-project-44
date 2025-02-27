import readlineSync from 'readline-sync';

function isEven(number) {
    return number % 2 === 0;
}

export function brainEven() {
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question("May I have your name? ");
    console.log(`Hello, ${name}!`);
    console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".");

    let correctAnswers = 0;
    while (correctAnswers < 3) {
        const number = Math.floor(Math.random() * 100) + 1;
        console.log(`Question: ${number}`);
        const userAnswer = readlineSync.question("Your answer: ").trim().toLowerCase();
        
        const correctAnswer = isEven(number) ? "yes" : "no";
        
        if (userAnswer === correctAnswer) {
            console.log("Correct!");
            correctAnswers += 1;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    
    console.log(`Congratulations, ${name}!`);
};

brainEven();
