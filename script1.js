function validateForm() {
    // Get form elements
    var email = document.getElementById("SignUpEmailAddress");
    var Uname = document.getElementById("uname");    
    var password = document.getElementById("psw");
    var confirmPassword = document.getElementById("psw-repeat");
  
    // Clear existing error messages
    clearErrorMessages();
  
    // Validate email format
    var emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email.value)) {
      displayErrorMessage("email", "Please enter a valid email address.");
       return false;
    }
  
    // Validate username format
    var UnameRegex = /^[a-zA-Z0-9._-]{3,}$/;
    if (isEmpty(Uname) || !UnameRegex.test(Uname.value)) {
      displayErrorMessage("uname", "Your name  is required and must be at least 2 characters.");
       return false;
    }
  
   
  
  
    // Validate password strength
    var passwordRegex = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password.value)) {
      displayErrorMessage(
        "psw",
        "Password must contain at least one number, one uppercase letter, one lowercase letter, and one special character, and be at least 8 characters long."
      );
      
      return false;
    }
  
    // Confirm password match
    if (password.value !== confirmPassword.value) {
      displayErrorMessage("psw-repeat", "Passwords do not match.");      
      return false;
    }
  
    // Use AJAX to send form data to the server
    var formData = {
      email: email.value,
      username: username.value,
      firstname: firstname.value,
      lastname: lastname.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    };
  
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "auth/signup", true);
    xhr.setRequestHeader("Content-Type", "application/json");
  
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Form submission successful
        document.forms[0].submit();
      } else {
        // Form submission failed, display error
        var response = JSON.parse(xhr.responseText);
        
      }
    };
  
    // Convert formData object to JSON and send it
    xhr.send(JSON.stringify(formData));
  
    return false; // Prevent default form submission
  }
  
  function isEmpty(field) {
    return field.value.trim() === "";
  }
  
  function displayErrorMessage(id, message) {
    var errorMessage = document.getElementById(id);
    errorMessage.textContent = message;
  }
  
 
  
  function clearErrorMessages() {
    var errorMessages = document.querySelectorAll("#errordiv");
    errorMessages.forEach(function (errorMessage) {
      errorMessage.textContent = "";
    });
  }