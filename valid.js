//Validtion Code For Inputs

const email = document.forms['form']['email'];
const password = document.forms['form']['password'];

const email_error = document.getElementById('email_error');
const pass_error = document.getElementById('pass_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

// Validation
function validated(){
	if (email.value.length < 9) {
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		email.focus();
		return false;
	}
	if (password.value.length < 6) {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}
	// Email Verification
	function email_Verify(){
		if (email.value.length >= 8) {
			email.style.border = "1px solid silver";
			email_error.style.display = "none";
			return true;
		}
	}
	// password Verification
	function pass_Verify(){