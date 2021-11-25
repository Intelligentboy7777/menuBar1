let btn=document.querySelector('.nav-toggle');
let links=document.querySelector('.links');
let main=document.getElementById('main-header');
btn.addEventListener('click',()=>{
    links.classList.toggle('show-link');
    
})