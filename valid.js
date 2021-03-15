//Validtion Code For Inputs

const email = document.forms['form']['email'];
const password = document.forms['form']['password'];

const email_error = document.getElementById('email_error');
const pass_error = document.getElementById('pass_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

// Validation
function validated(){