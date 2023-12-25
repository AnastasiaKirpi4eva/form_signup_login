let passwordField = document.querySelector('input[name="Password"]');
let cPasswordField = document.querySelector('input[name="cPassword"]');

let passwordIcon = document.querySelector('.input-box i.bxs-lock-open-alt');
let cPasswordIcon = document.querySelectorAll('.input-box i.bxs-lock-open-alt')[1];

passwordIcon.addEventListener('click', function() {
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
});

cPasswordIcon.addEventListener('click', function() {
  if (cPasswordField.type === "password") {
    cPasswordField.type = "text";
  } else {
    cPasswordField.type = "password";
  }
});


function validation(){
  if (document.Formfill.Username.value === ""){
    document.getElementById("result").innerHTML = "Enter Username*";
    return false;
  }
  else if (document.Formfill.Username.value.length < 6){
    document.getElementById("result").innerHTML = "At least six letter*";
    return false;
  }
  else if (document.Formfill.Email.value === ""){
    document.getElementById("result").innerHTML = "Enter your Email*";
    return false;
  }
  else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(document.Formfill.Email.value)){
    document.getElementById("result").innerHTML = "Enter your Email correctly*";
    return false;
  }
  else if (document.Formfill.Password.value === "" ){
    document.getElementById("result").innerHTML = "Enter your Password*";
    return false;
  }
  else if (document.Formfill.Password.value.length < 6){
    document.getElementById("result").innerHTML = "Password must be at least 6 characters*";
    return false;
  }
  else if (document.Formfill.cPassword.value === ""){
    document.getElementById("result").innerHTML = "Enter Confirm Password*";
    return false;
  }
  else if (document.Formfill.Password.value !== document.Formfill.cPassword.value){
    document.getElementById("result").innerHTML = "Password don't match*";
    return false;
  }
  document.querySelector('.form-box').style.display = 'none';
  return false;
}
