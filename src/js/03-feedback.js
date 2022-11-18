import throttle from 'lodash.throttle';
const contactFormEl = document.querySelector('.feedback-form')
const emailEl = contactFormEl.querySelector('[name="email"]');
const massageEL = contactFormEl.querySelector('[name="message"]');
// console.log(contactFormEl);
// localStorage.setItem('feedback-form-state',JSON.stringify())

const userInput = JSON.parse(localStorage.getItem('feedback-form-state')) || {
  email: '',
  message: '',
};
// console.log(userInput);
emailEl.value = userInput.email;
massageEL.value = userInput.message;

const onContactFormElInput = (event) => {
    
     userInput[event.target.name] = event.target.value;
 
  localStorage.setItem('feedback-form-state', JSON.stringify(userInput));
  console.log(localStorage);
}
const clearForm = event => { 
    event.preventDefault();
   event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');    
}
contactFormEl.addEventListener('input', throttle(onContactFormElInput, 500));
contactFormEl.addEventListener('submit', clearForm);












