var form = document.getElementById('form');

form.addEventListener('submit', function(event){
event.preventDefault() // prevents the form from autosubmitting

var name = document.getElementById('name').value

console.log(name)

var email = document.getElementById('email').value

console.log(email)
});