console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert(`Form has been submitted!`)
}

function alertImg() {
	alert(`You smell good`)
}


let form = document.querySelector('#contact');
let img = document.querySelector(`img`)

form.addEventListener('submit', handleSubmit);
// img.addEventListener(`mouseover`, alertImg)
