const error = document.querySelector('.error')
const email = document.querySelector('#email')
const submit = document.querySelector('#submit');
const check = (node)=>console.log(node)

const checkLowerCase = ()=>{
    if(email.validity.patternMismatch) error.textContent = 'Email should be lowercase' 
        
    
    else   error.textContent = ''
    return !email.validity.patternMismatch;
    
}

submit.addEventListener('submit',()=>{
    checkLowerCase()
})

email.addEventListener('input',( )=>{
    checkLowerCase()
})

// const email = document.querySelector('#email');
// const submit = document.querySelector('#submit');
// let error = document.querySelector('.error');

// function validateEmail (event) {
//   if (email.validity.typeMismatch){
//     error.textContent = 'Please input a valid email.';
//     event.preventDefault()
//   } else {
//     error.textContent = '';
//   }
// };

// email.addEventListener('input', (event) => {
//   validateEmail(event);
//   con;sole.log('aaaa')
// })

// submit.addEventListener('click', (event) => {
//   event.preventDefault();
//   validateEmail(event);
// });