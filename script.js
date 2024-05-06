function togglePasswordVisibility() {
    var passwordInput = document.getElementById("passwordInput");
    
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      
    } else {
      passwordInput.type = "password";
      
    }
  }


const togglePassword = document.getElementById("togglePassword");

  togglePassword.addEventListener("click", function () {
  
      document.body.classList.toggle("black-background");
  });