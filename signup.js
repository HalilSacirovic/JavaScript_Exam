
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
        } else {
          // neuspesno
          alert("Neuspesno");
        }
      });
  });