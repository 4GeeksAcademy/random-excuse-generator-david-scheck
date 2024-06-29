/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Hello World");
  displayResult();
  document
    .getElementById("generateExcuse")
    .addEventListener("click", displayResult);
};

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function randomAnswers() {
  var randomAnswerWho = who[Math.floor(Math.random() * who.length)];
  var randomAnswerAction = action[Math.floor(Math.random() * action.length)];
  var randomAnswerWhat = what[Math.floor(Math.random() * what.length)];
  var randomAnswerWhen = when[Math.floor(Math.random() * when.length)];

  return (
    randomAnswerWho +
    " " +
    randomAnswerAction +
    " " +
    randomAnswerWhat +
    " " +
    randomAnswerWhen
  );
}

function displayResult() {
  document.getElementById("theExcuse").innerHTML = randomAnswers();
}
