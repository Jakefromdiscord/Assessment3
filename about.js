console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully. Thank you!')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function compliments(){
	alert('You have nice tastes in cats!')
}

let pic = document.querySelector('img')
pic.addEventListener('mouseover', compliments)