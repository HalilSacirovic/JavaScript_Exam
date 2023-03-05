const megaArray = [
[
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
  ],

 [
    {
      id: "5",
      question: "Ko je napisao na Drini Cuprija",
      answer: ["Ivo Andric", "Nisam", "Ne znam"],
      correct: "Ivo Andric",
      points: 5,
    },
    {
      id: "6",
      question: "Glavni Grad Kanade",
      answer: ["Novi Pazar", "Otava", "Sjenica"],
      correct: "Otava",
      points: 8,
    },
    {
      id: "7",
      question: "Koliko dan ima minuta",
      answer: ["1440", "2569", "69125"],
      correct: "1440",
      points: 4,
    },
    {
      id: "8",
      question: "Za koliko ces preci 100 km ako se kreces 100km/h",
      answer: ["2h", "30min", "1h"],
      correct: "1h",
      points: 3,
    },
  ],
  [
    {
      id: "9",
      question: "Koji je glavni grad države:Francuske",
      answer: ["Pariz", "Kopenhagen", "Ne znam"],
      correct: "Pariz",
      points: 5,
    },
    {
      id: "10",
      question: "Koji je glavni grad države:Nemacke",
      answer: ["Novi Pazar", "Berlin", "Tutin"],
      correct: "Berlin",
      points: 8,
    },
    {
      id: "11",
      question: "Koji je glavni grad države:SAD",
      answer: ["Washingthon DC", "New York", "Ribarice"],
      correct: "Washingthon DC",
      points: 4,
    },
    {
      id: "12",
      question: "Koji je glavni grad države:Austrije",
      answer: ["Bec", "Beograd", "Keln"],
      correct: "Bec",
      points: 3,
    },
  ],
  [
    {
      id: "13",
      question: "Koji je glavni grad države:Irske",
      answer: ["Dublin", "Ne znam", "Kraljevo"],
      correct: "Dublin",
      points: 5,
    },
    {
      id: "14",
      question: "Koji je glavni grad države:Italije",
      answer: ["Rim", "Helsinki", "Raska"],
      correct: "Rim",
      points: 8,
    },
    {
      id: "15",
      question: "Koji je glavni grad države:Grcke",
      answer: ["Atina", "Krusevac", "Ljig"],
      correct: "Atina",
      points: 4,
    },
    {
      id: "16",
      question: "Koji je glavni grad države:Turske",
      answer: ["Istambul", "Ne znam", "Ankara"],
      correct: "Ankara",
      points: 3,
    },
  ],
  [
    {
      id: "5",
      question: "Koji je glavni grad države:",
      answer: ["P", "Nisam", "Ne znam"],
      correct: "P",
      points: 5,
    },
    {
      id: "6",
      question: "Koji je glavni grad države:",
      answer: ["Novi Pazar", "Otava", "Sjenica"],
      correct: "Otava",
      points: 8,
    },
    {
      id: "7",
      question: "Koliko dan ima minuta",
      answer: ["1440", "2569", "69125"],
      correct: "1440",
      points: 4,
    },
    {
      id: "8",
      question: "Za koliko ces preci 100 km ako se kreces 100km/h",
      answer: ["2h", "30min", "1h"],
      correct: "1h",
      points: 3,
    },
  ]
]

var placeForAnswers = document.getElementById("answers");
var itemquestion = document.getElementById("question");
var answeritem = document.getElementById("1");

let selectedQuestion;
let megaSelectedQuestion;
let indexpitanja = 0;
let megaIndex=0;
let bodovi = 0;

let megaItem;


function getNewQuestion() {
  
  megaItem = megaArray[megaIndex];
  
  itemquestion.innerHTML = "";
  answeritem.innerHTML= "";

  if (indexpitanja >= megaItem.length) {
  

    window.location.href = "kraj.html?bodovi=" + bodovi;
    return ;
  }
  selectedQuestion = megaItem[indexpitanja];
  var showquestion = document.createElement("h3");
  showquestion.innerHTML = megaItem[indexpitanja].question;
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
  if (selectedQuestion.id === id) {
    if (selectedQuestion.correct === ans) {
      // bodovi += selectedQuestion.points;
      bodovi+=selectedQuestion.points;
    }
    indexpitanja++;

  }
  
  getNewQuestion();
}



// document.getElementById("#").addEventListener("click",() => {
// const ans = document.getElementById("#").textContent;
// submitAnswer(selectedQuestion,ans);
// })



// /////////////////////////////////////////////////////////////////////////////////////////////////////


 // Define variable for storing score