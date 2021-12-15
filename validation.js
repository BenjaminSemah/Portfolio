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