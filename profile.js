function colorBtn(){
    alert("My favorie color is Evergreen")
}

function placeBtn(){
    alert('My favorite place is Powder Mountain')
}

function ritualBtn(){
    
    alert('I go to the gym at the same time every day')
}

let color = document.getElementById('color')
color.addEventListener('click', colorBtn)

let place = document.getElementById('place')
place.addEventListener('click', placeBtn)

let ritual = document.getElementById('ritual')
place.addEventListener('click', ritualBtn)