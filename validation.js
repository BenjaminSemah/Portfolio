const error = document.querySelector('.error');
const email = document.querySelector('#email');
const submit = document.querySelector('#submit');

const checkLowerCase = () => {
  if (email.validity.patternMismatch) error.textContent = 'The form has not been submitted. Please type email iin lowercase';
  else error.textContent = '';
  return !email.validity.patternMismatch;
};

submit.addEventListener('submit', () => {
  checkLowerCase();
});

email.addEventListener('input', () => {
  checkLowerCase();
});
