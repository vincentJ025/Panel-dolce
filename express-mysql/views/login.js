document.getElementById('loginForm').addEventListener('submit', function(event) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username === '' || password === '') {
        alert('Both fields are required');
        event.preventDefault();
    }
  });
  