//theme functionality
function theme(){
  const body = document.body;
  body.classList.toggle('dark');
  body.classList.toggle('light');
}

const themeButton = document.getElementById('themeButton');

themebutton.addEventListener('click', theme);

//sections' remove buttons functionality

function removeSec(){
  section.style.display = 'none';
  console.log('removed a button');
}

const section = document.getElementsByClassName('section')
const button = document.querySelector('section button')

section.forEach((s) =>{
  button.addEventListener('click', removeSec);
})

