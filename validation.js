let error = document.querySelector('.error');
const email = document.getElementById('email');
const myForm = document.getElementById('myform');
let testBol = false;
let emailChecker = '';

email.addEventListener('keyup', () => {
  emailChecker = email.value.toLowerCase();
});

myForm.addEventListener('submit', (e) => {
  if (emailChecker !== email.value) {
    error.innerText = 'Form not submitted. Please type email in lowercase';
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
