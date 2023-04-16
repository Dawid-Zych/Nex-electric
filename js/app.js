const navLinks = document.querySelectorAll('.nav-link');
const nav = document.querySelector('.navbar-collapse');

const username = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#number');
const message = document.querySelector('#message');
const error = document.querySelectorAll('.error-text');
const submitBtn = document.querySelector('.submitBtn');
const form = document.querySelector('#form');
const select = document.querySelector('#select-table');

const year = document.querySelector('.year');
const currYear = new Date().getFullYear();
year.textContent = currYear;

/* HIDE NAV */
const hideNav = () => {
	nav.classList.remove('show');
};

/* FORM VALIDATE */
const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el);
		} else {
			clearError(el);
		}
	});
};

const showError = input => {
	const errorMsg = input.nextElementSibling;
	console.log(errorMsg);
	errorMsg.classList.add('error');
	input.classList.add('error');
};

const clearError = input => {
	const errorMsg = input.nextElementSibling;
	errorMsg.classList.remove('error');
	input.classList.remove('error');
};

const checkUserName = input => {
	var regName = /^[a-z ,.'-]+( [a-z ,.'-]+)+$/i;
	if (!regName.test(input.value)) {
		showError(input);
	} else {
		clearError(input);
	}
};

const checkMail = email => {
	const regMail =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (regMail.test(email.value)) {
		clearError(email);
	} else {
		showError(email);
	}
};

const checkPhone = input => {
	var regPhone = /^[0-9+]{8,13}$/;
	if (regPhone.test(input.value)) {
		clearError(input);
	} else {
		showError(input);
	}
};

const checkSelect = select => {
	console.log(select.value);
	if (select.value === '') {
		showError(select);
	} else {
		clearError(select);
	}
};

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.check');
	let errorCount = 0;
	allInputs.forEach(el => {
		if (el.classList.contains('error')) {
			errorCount++;
		}
	});

	if (errorCount === 0) {
		form.submit();
	}
};

/* YEAR IN FOOTER */

navLinks.forEach(el => el.addEventListener('click', hideNav));

submitBtn.addEventListener('click', e => {
	e.preventDefault();

	checkForm([username, email, phone, message]);
	checkUserName(username);
	checkMail(email);
	checkPhone(phone);
	checkSelect(select);
	checkErrors();
});
