//theme functionality
function theme(){
  const body = document.body;
  body.classList.toggle('dark');
  body.classList.toggle('light');
}

const themeButton = document.getElementById('theme');

themebutton.addEventListener('click', theme);

//sections' remove buttons functionality

function removeSec(){
  
}

const section = document.getElementsByClassName('section')

section.forEach((s) =>{
  s.addEventListner()
})

