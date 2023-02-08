function Escape(){
  
  document.getElementById("email").value= " ";
  document.getElementById("password").value= "";
  document.getElementById("confirmPassword").value= "";
 document.getElementById("fullName").value= " ";

 console.log(password);
 console.log(confirmPassword);

 document.getElementById("alertbox").style = "display:none";


}
 ////////////////////////////////////////////////
 ////////////////////////////////////////////////
 ////////////////////////////////////////////////



function SignUpWithEnter (){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var fullName = document.getElementById("fullName").value;
  var loginData = {
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    fullName: fullName,
  };
  
  
  alertbox = document.getElementById("alertbox");
  
  
  if(!email.includes("@") || password.length<6 || password.length>20)
  {
    document.getElementById("alertbox").style = "display:block";

    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape") {
        Escape();
      }
    });
  }
  

   ////////////////////////////////////////////////
 ////////////////////////////////////////////////
 ////////////////////////////////////////////////

  document.getElementById("xbutton").addEventListener("click",function()
  {
    Escape();
 
  })

   ////////////////////////////////////////////////
 ////////////////////////////////////////////////
 ////////////////////////////////////////////////


  fetch("https://js-course-server.onrender.com/user/signup", {
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
        // uspesno
        alert("Uspesna regisracija");
        window.location.href = "login.html";
      } 
      
    });
}



 ////////////////////////////////////////////////
 ////////////////////////////////////////////////
 ////////////////////////////////////////////////


 document.getElementById("signupbutton").addEventListener("click", function () {
      SignUpWithEnter();
  });

  

  document.getElementById("confirmPassword").addEventListener("keydown",function(event){
    if (event.key === "Enter") {
      SignUpWithEnter();
    }
  })

