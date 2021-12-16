const error = document.querySelector('.error');
const email = document.getElementById('email');
const submit = document.getElementById('submit');
const myForm = document.getElementById('myform');
let testBol = false;
let emailChecker = '';

//ddddddddddddddddddddd
email.addEventListener('keyup', () => {
  emailChecker = email.value.toLowerCase();
});

myForm.addEventListener('submit', (e) => {
  if (emailChecker !== email.value) {
    error.innerText = 'The form has not been submitted. Please type email iin lowercase';
    if (testBol === false) {
      error.classList.toggle('hideError');
    }
    testBol = true;
  
    email.addEventListener('click', () => {
      if (testBol === true) {
        error.classList.toggle('hideError');
        testBol = false;
      }
      
    });
    e.preventDefault();
  } else error = '';
});
