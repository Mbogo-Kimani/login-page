document.getElementById('signup-form').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');
    
    if (password !== confirmPassword) {
      errorMessage.textContent = 'Passwords do not match';
      event.preventDefault();
    } else {
      errorMessage.textContent = '';
    }
  });