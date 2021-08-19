document.getElementById('login-submit').addEventListener('click',function(){
    // get user email
    const userEmail = document.getElementById('user-email');
    const emailValue = userEmail.value;

    // get user password
    const userPassword = document.getElementById('user-password');
    const passwordValue = userPassword.value;

  if(emailValue == "admin@gmail.com" && passwordValue == "password"){ 
    window.location.href='banking.html';
  }
 
});

