var quotes = [];
var allQuotes = [];

const renderQuotes = () => {
  var parentEl = document.getElementById("listparent");
  parentEl.innerHTML = "";
  quotes.forEach(function (item, index) {
    var childEl = document.createElement("li");
    childEl.textContent = item.quoteText + " - " + item.quoteAuthor + " - " + item.quoteSource;
    parentEl.appendChild(childEl);
  });
}

fetch("https://js-course-server.onrender.com/quotes/get-all-quotes")
  .then((response) => response.json())
  
  .then((data)=> {
    quotes = data;
    allQuotes = data;
    renderQuotes();
  })
  .catch((err)=> {
    console.log("err", err);
  });

document.getElementById("search").addEventListener("keydown", ()=> {
  var searchValue = document.getElementById("search").value;
  quotes = allQuotes.filter((item, index) => {
    if (item.quoteText) {
      return item.quoteText.toLowerCase().includes(searchValue.toLowerCase());
    } else {
      return false;
    }
  });
  renderQuotes();
});