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

  // If there are still questions left, display the next question
  if (indexpitanja >= item.length) {
    // Redirect to the end page with a query parameter to indicate the test has ended
    window.location.href = "kraj.html?bodovi=" + bodovi;
    return;
  }
  selectedQuestion = item[indexpitanja];
  var showquestion = document.createElement("h3");
  showquestion.innerHTML = item[indexpitanja].question;
  itemquestion.appendChild(showquestion);


  for (var i = 0; i < 3; i++) {
    let nesto =  selectedQuestion.answer[i]

    var testitem = document.createElement("button");
    testitem.textContent = selectedQuestion.answer[i];
    testitem.onclick = () => submitAnswer(
      selectedQuestion.id,
      nesto,
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