const questions =[];

 

const question1 = {

  category: "History",

  question: "Who where Brazil's first president?",

  choices: ["Getúlio Vargas", "Deodoro da Fonseca", "Juscelino Kubitschek"],

  answer: "Deodoro da Fonseca"

}

const question2 = {

  category: "Geography",

  question: "What's the biggest country in extendion in the world?",

  choices: ["Russia", "Canada", "China"],

  answer: "Russia"

}

const question3 = {

  category: "Science",

  question: "What planet is known as the red planet?",

  choices: ["Mars", "Jupiter", "Venus"],

  answer: "Mars"

}

const question4 = {

  category: "Literature",

  question: "Who wrote the book Dom Quixote?",

  choices: ["Miguel de Cervantes", "Machado de Assis", "William Shakespeare"],

  answer: "Miguel de Cervantes"

}

const question5 = {

  category: "Sports",

  question: "In which country Footbal was created?",

  choices: ["Brazil", "England", "Germany"],

  answer: "England"

}

 

questions.push(question1, question2, question3, question4, question5);

 

let randomQuestionObject = "";

 

function getRandomQuestion(arr){

  randomQuestionObject = arr[Math.floor(Math.random() * arr.length)];

  return randomQuestionObject;

}

 

let computerChoice = ""

 

function getRandomComputerChoice(arr){

  computerChoice = arr[Math.floor(Math.random() * arr.length)];

  return computerChoice

}

 

console.log(getRandomQuestion(questions));

console.log(getRandomComputerChoice(randomQuestionObject.choices));

 

function getResults(questionObj, computerChoice){

  if(computerChoice == questionObj.answer){

    return "The computer's choice is correct!"

  }else{

    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`

  }

 

}

 

console.log(getResults(randomQuestionObject, computerChoice));