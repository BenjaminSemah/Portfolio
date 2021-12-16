const error = document.querySelector('.error');
const email = document.querySelector('#email');
const submit = document.getElementById('submit');


const checkLowerCase = () => {
  if (email.validity.patternMismatch) {
      e.preventDefault();
      error.textContent = 'The form has not been submitted. Please type email iin lowercase';
    }
  else error.textContent = '';
  return !email.validity.patternMismatch;
};

submit.addEventListener('submit', () => {
  checkLowerCase();
});

email.addEventListener('input', () => {
  checkLowerCase();
});

