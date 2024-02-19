// prevent from refreshing the page
function validateForm(event) {
  event.preventDefault();

  // Get form elements
  var email = document.getElementById("email");
  var uname = document.getElementById("uname");
  var password = document.getElementById("psw");
  var confirmPassword = document.getElementById("psw-repeat");

  // Clear existing error messages
  clearErrorMessages();

  // Validate email format
  var emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email.value)) {
    displayErrorMessage("Please enter a valid email address.");
    return false;
  }
  // Validate username format and length (at least 3 characters) not starting with a number

  var UnameRegex = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
  if (isEmpty(uname) || !UnameRegex.test(uname.value)) {
    displayErrorMessage(
      "Your name is required and must be at least 3 characters long and not start with a number."
    );
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

  // Confirm password match
  if (password.value !== confirmPassword.value) {
    displayErrorMessage("Passwords do not match.");
    return false;
  }
}
function isEmpty(field) {
  return field.value.trim() === "";
}

function displayErrorMessage(message) {
  var errorMessage = document.getElementById("errordiv");
  errorMessage.innerHTML = message;
}

function clearErrorMessages() {
  var errorMessages = document.querySelectorAll(".errormessage");
  errorMessages.forEach(function (errorMessage) {
    errorMessage.textContent = "";
  });
}
