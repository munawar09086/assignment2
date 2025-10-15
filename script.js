// Attach the form submit event
document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent actual form submission

  clearErrors(); // Clear previous error messages

  const username = getInputValue('username');
  const email = getInputValue('email');
  const password = getInputValue('password');

  if (validateForm(username, email, password)) {
    alert("Form submitted successfully!");
    // You can submit form data via AJAX or proceed
    // this.submit(); // Uncomment if you want to allow normal form submission
  }
});

// Get the value of a form input
function getInputValue(id) {
  return document.getElementById(id).value.trim();
}

// Set error message for a field
function setError(id, message) {
  document.getElementById(id + 'Error').textContent = message;
}

// Clear all error messages
function clearErrors() {
  setError('username', '');
  setError('email', '');
  setError('password', '');
}

// Validate the full form
function validateForm(username, email, password) {
  let isValid = true;

  if (username === "") {
    setError('username', 'Username is required.');
    isValid = false;
  }

  if (email === "") {
    setError('email', 'Email is required.');
    isValid = false;
  } else if (!validateEmail(email)) {
    setError('email', 'Invalid email format.');
    isValid = false;
  }

  if (password.length < 6) {
    setError('password', 'Password must be at least 6 characters.');
    isValid = false;
  }

  return isValid;
}

// Validate email format
function validateEmail(email) {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  return pattern.test(email.toLowerCase());
}
