function validateForm(event) {
  event.preventDefault();

  // Get form elements
  var email = document.getElementsByName("email");
  var password = document.getElementById("psw");

  // Clear existing error messages
  clearErrorMessages();

  // Validate email format
//   var emailRegex =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value==="") {
    displayErrorMessage("Please enter an email address.");
    return false;
  }

  // Validate password strength
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  if (!passwordRegex.test(password.value)) {
    displayErrorMessage(
      "Password must contain at least one number, one uppercase letter, one lowercase letter, and one special character, and be at least 8 characters long."
    );
    return false;
  }

  // Prepare request data
  var data = {
    email: email.value,
    password: password.value,
  };
  const jsonData = JSON.stringify(data);

  // Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Configure it: POST-request for the URL /signup
  xhr.open("POST", "https://nishkaam.onrender.com/login", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  // Setup the onload function
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      var responseData = JSON.parse(xhr.responseText);
      var errorMessage = responseData.error;
      // if the request was successful, display a success message
      if (!errorMessage) {
        // redirect to signup-success.html
        window.location.href = "index.html";
      }
      displayErrorMessage(errorMessage);
    }
  };

  // Send the request
  xhr.send(jsonData);
}

function isEmpty(field) {
  return field.value.trim() === "";
}

function displayErrorMessage(message) {
  var errorMessage = document.getElementById("errordiv");
  errorMessage.textContent = message;
}

function clearErrorMessages() {
  var errorMessages = document.querySelectorAll(".errormessage");
  errorMessages.forEach(function (errorMessage) {
    errorMessage.textContent = "";
  });
}
