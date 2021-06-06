const submitBtn = document.getElementById('submit');

const form = document.querySelector('form');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const firstname = form['firstname'].value;
  const lastname = form['lastname'].value;
  const email = form['email'].value;
  const password = form['password'].value;

  if (firstname === '') {
    addToError('firstname', 'Firstname cannot be empty');
  } else {
    removeError('firstname');
  }
  if (lastname === '') {
    addToError('lastname', 'lastname cannot be empty');
  } else {
    removeError('lastname');
  }

  if (email === '') {
    form['email'].placeholder = 'email@example/com';
    addToError('email', 'email cannot be empty');
  } else if (!validateEmail(email)) {
    addToError('email', 'email not valid');
  } else {
    removeError('email');
  }

  if (password === '') {
    addToError('password', 'password cannot be empty');
  } else {
    removeError('password');
  }
});

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function addToError(element, message) {
  const formControl = form[element].parentNode;
  formControl.classList.add('error');
  const errorMessage = formControl.querySelector('.error-message');

  errorMessage.textContent = message;
  errorMessage.style.opacity = 1;
}

function removeError(element) {
  const formControl = form[element].parentNode;
  formControl.classList.remove('error');
}
