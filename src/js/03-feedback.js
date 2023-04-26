import throttle from 'lodash.throttle';
import '../css/03-feedback.css';

const STORAGE_KEY = 'feedback-form-state';
let formValues = JSON.parse(localStorage.getItem(STORAGE_KEY));

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea'),
  input: document.querySelector('.feedback-form input')
};

const { email, message } = refs.form.elements;
const onFormInput = throttle(event => {
  formValues = {
    email: email.value,
    message: message.value
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formValues));
}, 500);

if (formValues) {
  email.value = formValues.email;
  message.value = formValues.message;
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onFormInput);


function onFormSubmit(evt) {
  evt.preventDefault();

if (!email.value || !message.value) {
  alert("Всі поля повинні бути заповнені");
}

console.log('Form Data:', formValues);

evt.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);
  
}



