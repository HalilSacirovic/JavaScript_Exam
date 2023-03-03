const item = [
  {
    id: "1",
    question: "Dobro si?",
    answer: ["Elhamdulillah", "Dobro sam", "Very GUT"],
    correct: "Elhamdulillah",
    points: 5,
  },
  {
    id: "2",
    question: "Glavni Grad Tutina ",
    answer: ["Ribarice", "Tutin je Grad", "Ne znam"],
    correct: "Tutin je Grad",
    points: 8,
  },
  {
    id: "3",
    question: "Koliko je sati",
    answer: ["Kolko ti treba", "Jos malo pa sace", "Isto ko juce"],
    correct: "Jos malo pa sace",
    points: 4,
  },
  {
    id: "4",
    question: "Ne znam ni ja sam",
    answer: ["Isto", "Takode", "Ne znam"],
    correct: "Ne znam",
    points: 3,
  },
];

var placeForAnswers = document.getElementById("answers");
var itemquestion = document.getElementById("question");
var answeritem = document.getElementById("1");

let selectedQuestion;
let indexpitanja = 0;
let bodovi = 0;

function getNewQuestion() {
  itemquestion.innerHTML = "";
  answeritem.innerHTML= "";


  if (indexpitanja >= item.length) {
  
    window.location.href = "kraj.html";
    return;
  }

  selectedQuestion = item[indexpitanja];
  var showquestion = document.createElement("h3");
  showquestion.innerHTML = item[indexpitanja].question;
  itemquestion.appendChild(showquestion);


  for (var i = 0; i < 3; i++) {
    var testitem = document.createElement("button");
    testitem.textContent = selectedQuestion.answer[i];
    testitem.onclick = () => submitAnswer(
      selectedQuestion.id,
      selectedQuestion.correct,
    );
    answeritem.appendChild(testitem);
  }
  
}

function startTest(){
  getNewQuestion();
}

startTest();



function submitAnswer(id, ans) {
  console.log(ans)
  if (selectedQuestion.id === id) {
    if (selectedQuestion.correct === ans) {
      // bodovi += selectedQuestion.points;
      bodovi+=selectedQuestion.points;
    }
    indexpitanja++;
    console.log(bodovi)
  }
  console.log(id,ans)
  getNewQuestion();
}

// document.getElementById("#").addEventListener("click",() => {
// const ans = document.getElementById("#").textContent;
// submitAnswer(selectedQuestion,ans);
// })



// /////////////////////////////////////////////////////////////////////////////////////////////////////


 // Define variable for storing score

var bodoviDiv = document.getElementById("bodovi");
var divChild = document.createElement("a");

divChild.innerHTML = "Nesto";

bodoviDiv.appendChild(divChild);