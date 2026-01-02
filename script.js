//theme functionality
function theme(){
  const body = document.body;
  body.classList.toggle('dark');
  body.classList.toggle('light');
}

const themeButton = document.getElementById('themeButton');
themeButton.addEventListener('click', theme);

//sections' remove buttons functionality
const sections = document.querySelector('.section');

sections.forEach((section) =>{
  button.addEventListener('click', => {
    const button = document.querySelector('section button');
    
    section.style.display = 'none';
    console.log('section has been removed');
  })
})

//special buttons functionality

const allBtn = document.getElementById('all')
const activeBtn = document.getElementById('active')
const inactiveBtn = document.getElementById('inactive')

allBtn.addEventListener('click', sort('all'));
activeBtn.addEventListener('click', sort('active'));
inactiveBtn.addEventListener('click', sort('inactive'));


function sort(type){
  const section = document.querySelector('section')
  const checkbox = document.querySelector('input[type='checkbox']');
  const isActive = checkbox.checked;
 if(type === 'all'){
   section.style.display = 'grid';
 } else if(type === 'active' && isActive){
   section.style.display = 'grid';
 } else if(type ==='inactive' && !isActive){
   section.style.display = 'grid';
 } else{
   section.style.display = 'none';
 }
}

