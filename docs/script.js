let  megaIndex = 0

function activeSpinenr(){
 
    document.getElementById("loading").style = "display: flex; height:100vh; justify-content: center; align-items:center;"
    document.getElementById("login").style = "display: none;"
}

function deactivateSpinenr(){
 
  document.getElementById("loading").style = "display:none"
  document.getElementById("login").style = "display: flex;"
}


var labelalert = document.getElementById("labelalert");

labelalert.style="display:none"




alertbox = document.getElementById("alertbox");
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
  //  alertbox=  setTimeout(function(){
  //     document.getElementById("alertbox").style = "display:block";
  //   },100)
  // }

  // alertbox = setTimeout(function(){
  //   document.getElementById("alertbox").style = "display:none";
  // },3000)

  
  // if(!username.includes("@") || password.length<6 || password.length>20)
  // {
  //   alert("Email ili Sifra nisu u dobrom formatu");

  // }
  
  
labelalert.style="display:none"


document.getElementById("username").style= "border-bottom: 2px solid #ddd7f0;";
document.getElementById("password").style= "border-bottom: 2px solid #ddd7f0;";

  if(username === loginData.email || password === loginData.password){
    console.log("RADI")
  }
  else {
    console.log("Ne radi")
  }
  if(!username.includes("@") && (password.length>20 || password.length<5 ))
  {
    labelalert.textContent = "Invalid Username & Password"
    document.getElementById("username").style= "border-bottom:2px solid red";
    document.getElementById("password").style= "border-bottom:2px solid red";
    labelalert.style= "display:block;color:red";
    console.log("Treci uslov")
  }
  else if(password.length>20 || password.length<5 )
  {
    document.getElementById("password").style= "border-bottom:2px solid red";
    labelalert.style= "display:block;color:red";
    labelalert.textContent = "Invalid Password"
    console.log("DRUGI uslov")
  }
  else if (!username.includes("@")  ){
    document.getElementById("username").style= "border-bottom:2px solid red";
    labelalert.style= "display:block;color:red"
    labelalert.textContent = "Invalid Username"
    console.log("Prvi uslov");
    
  }




  alertbox = setTimeout(function(){
    document.getElementById("alertbox").style = "display:none";
  },3000)
 

  
  
  
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
      const urlParams = new URLSearchParams(window.location.search);
      if (data.userId) {
        let megaIndex = urlParams.get("megaIndex");
        localStorage.setItem("auth_token", data.token);
        localStorage.setItem("userId", data.userId);
        // alert("Prijava uspesna!");
        window.location.href = "pitanje.html?megaIndex=0";
      } else {
        deactivateSpinenr()
        alertbox= 
          document.getElementById("alertbox").style = "display:block";


        alertbox = setTimeout(function(){
          document.getElementById("alertbox").style = "display:none";
        },3000)
      }
    }).catch(()=>{
      deactivateSpinenr()
        alertbox= 
          document.getElementById("alertbox").style = "display:block";


        alertbox = setTimeout(function(){
          document.getElementById("alertbox").style = "display:none";
        },3000)
    })
});
