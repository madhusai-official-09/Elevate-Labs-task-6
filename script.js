document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from submitting

  // Clear previous messages
  document.getElementById('formSuccess').innerText = '';
  document.getElementById('nameError').innerText = '';
  document.getElementById('emailError').innerText = '';
  document.getElementById('messageError').innerText = '';

  let isValid = true;

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validate name
  if (name === '') {
    document.getElementById('nameError').innerText = 'Name is required.';
    isValid = false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    document.getElementById('emailError').innerText = 'Email is required.';
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById('emailError').innerText = 'Enter a valid email.';
    isValid = false;
  }

  // Validate message
  if (message === '') {
    document.getElementById('messageError').innerText = 'Message is required.';
    isValid = false;
  }

  // If all fields are valid
  if (isValid) {
    document.getElementById('formSuccess').innerText = 'Form submitted successfully!';
    // Optionally reset form: document.getElementById('contactForm').reset();
  }
});
