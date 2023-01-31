document.getElementById("addnew").addEventListener("click",function(){
    var text =document.getElementById("quote").value;
    var author =document.getElementById("author").value;
    var source =document.getElementById("source").value;

    document.getElementById("quote").value = ""
    document.getElementById("author").value = ""
    document.getElementById("source").value = ""



    var newQuote = {
        quoteText:text,
        quoteAuthor:author,
        quoteSource:source,
    };

    fetch("https://js-course-server.onrender.com/quotes/add-quote",{
        method:"POST",
        body:JSON.stringify(newQuote),
        headers: {
            accept:"application/json",
            "Content-Type": "application/json",
        },
    })
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log("The quote is added",data);
        alert("Vas citat je uspeno dodat")
    })
})