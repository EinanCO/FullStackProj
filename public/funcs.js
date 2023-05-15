function submitLoginForm() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  alert('Logging in...');
  // Make an API call to validate username and password
  $.post('/api/login', { username, password })
    .done(function(response) {
      // Check the response from the server
      if (response.success) {
        alert('Login successful!');
        // Perform any additional actions or redirect the user to another page
      } else {
        alert('Invalid username or password. Please try again.');
      }
    })
    .fail(function(error) {
      console.error('An error occurred:', error);
    });
}

function submitSignupForm() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('ConfPassword').value;
  alert('Signing up...');

  // Check if the passwords match
  if (password !== confirmPassword) {
    alert('Passwords do not match. Please try again.');
    return;
  }

  // Make an API call to register a new user
  $.post('/api/signup', { username, password })
    .done(function(response) {
      // Check the response from the server
      if (response.success) {
        alert('Signup successful! You can now login with your new account.');
        // Perform any additional actions or redirect the user to another page
      } else {
        alert('Signup failed. Please try again.');
      }
    })
    .fail(function(error) {
      console.error('An error occurred:', error);
    });
}

function checkSignUp() {
    var uname = document.getElementById("username").value; //we will use it in the future
    var pass = document.getElementById("password").value;
    var ConfPass = document.getElementById("ConfPassword").value;
    if (pass === ConfPass)
        checkLogin()
    else
        alert("The password does not match");
}