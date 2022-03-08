var emoji = require("node-emoji");
const monocole = emoji.get("face_with_monocle");
const iKnowYaar = emoji.get("smirk");
const tasty = emoji.get("yum");
const weary = emoji.get("weary");

console.log(`Welcome to the EatXtra! ${tasty} \n `);
console.log(
  `How Well Do You Know Indian Cuisine? ${monocole}\nI know everything ${iKnowYaar}\nLet's not make me hungry again ${weary}`
);
console.log("Lets Start!\n");

const readLineSync = require("readline-sync");
let correctAnswers = 0;
let questionCount = 1;

const questionsList = [
  {
    question:
      "Which of the following street foods is largely found on most streets across India?",
    options: [
      "Pani Puri",
      "Dahi Bhalle",
      "Dal Makhani",
      "Chicken Tikka Masala",
    ],
    answer: "1",
  },
  {
    question:
      "Which of these was considered as the ‘food of gods’ in ancient India?",
    options: ["Fruits", "Milk", "Yoghurt", "Ghee"],
    answer: "3",
  },
  {
    question: "Which city is famous for its Pav Bhaji & Vada Pav?",
    options: ["Bengaluru", "Kolkata", "Mumbai", "Bihar"],
    answer: "3",
  },
  {
    question: "Choose the correct dish that belongs to the Udupi cuisine?",
    options: ["Idli", "Dosa", "Rasam", "All of the above"],
    answer: "4",
  },
  {
    question: "Which state gifted us the mouth-watering sweet Kheer Kadam?",
    options: ["Kolkata", "Sikkim", "Madhya Pradesh", "Tamil Nadu"],
    answer: 1,
  },
];

function displayQuestion(question) {
  console.log(
    `Q: ${questionCount} ${question.question} \n 1. ${question.options[0]} \n 2. ${question.options[1]} \n 3. ${question.options[2]} \n 4. ${question.options[3]} \n`
  );
  const selectedAnswer = readLineSync.question("Enter your response! 🤔\n");
  if (selectedAnswer == question.answer) {
    correctAnswers++;
    console.log("It's correct 😎\n");
  } else {
    console.log("Lol better luck next time! 😂\n");
  }
  questionCount++;
}

questionsList.forEach(displayQuestion);
console.log(`You scored ${correctAnswers} out of ${questionsList.length}! 😗`);
