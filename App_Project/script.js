function activeSpinenr(){
 
    document.getElementById("loading").style = "display: flex; height:100vh; justify-content: center; align-items:center;"
    document.getElementById("login").style = "display: none;"
}

function deactivateSpinenr(){
 
  document.getElementById("loading").style = "display:none"
  document.getElementById("login").style = "display: flex;"
}



document.getElementById("loading").style = "display: none;"
document.getElementById("loginbutton").addEventListener("click", function () {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var loginData = {
    email: username,
    password: password,
  };


  // if(!username.includes("@") || password.length<6 || password.length>20)
  // {
  //   alert("Email ili Sifra nisu u dobrom formatu");

  // }


  
activeSpinenr();

  fetch("https://js-course-server.onrender.com/user/login", {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.userId) {
        localStorage.setItem("auth_token", data.token);
        localStorage.setItem("userId", data.userId);
        alert("Prijava uspesna!");
        window.location.href = "pitanje.html";
      } else {
        deactivateSpinenr()
      }
    });
});
