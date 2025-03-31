/* Form */
const password1 = document.querySelector("#pwd1");
const password2 = document.querySelector("#pwd2");
const feedback = document.querySelector("#fdbk");

password2.addEventListener('focusout', confirmation)

function confirmation() {
    if (password1.value !== password2.value) {
        password1.value = "";
        password2.value = "";
        password1.focus();
        feedback.textContent = "Passwords do not match. Please try again."
    } else {
        feedback.textContent = "";
    }
};

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}