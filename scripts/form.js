const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");
const pw1 = document.getElementById("pw1");
const pw2 = document.getElementById("pw2");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.textContent = range.value;
}
function checkSame() {
	if (pw1.value !== pw2.value) {
		message.textContent = "❗Password DO NOT MATCH!";
		message.style.visibility = "show";
		pw2.style.backgroundColor = "#fff0f3";
		pw2.value = "";
		pw2.focus();
	} else {
		message.style.display = "none";
		pw2.style.backgroundColor = "#fff";
		pw2.style.color = "#000";
	}
}