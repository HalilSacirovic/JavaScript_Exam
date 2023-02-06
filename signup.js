
document.getElementById("signupbutton").addEventListener("click", function () {
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
      document.getElementById("alertbox").style = "display:block"
    }
    
    var xbutton = document.getElementById("xbutton").addEventListener("click",function()
    {
      document.getElementById("alertbox").style = "display:none";

       document.getElementById("email").value= " ";
       document.getElementById("password").value= "";
       document.getElementById("confirmPassword").value= "";
      document.getElementById("fullName").value= " ";

      console.log(password);
      console.log(confirmPassword);
    })
  
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
  });