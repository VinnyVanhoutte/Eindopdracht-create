const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/Amartin743/psn");
xhr.setRequestHeader("X-RapidAPI-Key", "7d8d677684msh091121921f48e89p184261jsn5857acecc9cc");
xhr.setRequestHeader("X-RapidAPI-Host", "call-of-duty-modern-warfare.p.rapidapi.com");

xhr.send(data);

function init(){
    listenToToggle();
}

const toggleDarkmode = function () {
    const body = document.body;
    body.classList.toggle("darkmode");
}

const listenToToggle = function () {
    const toggle = document.querySelector(".js-toggle");
    toggle.addEventListener("change", toggleDarkmode);
}

document.addEventListener('DOMContentLoaded',init);