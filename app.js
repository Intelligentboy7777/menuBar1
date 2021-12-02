let clock=document.querySelector('.clock');
let hour=document.getElementById('hours');
let min=document.getElementById('minutes');
let secund=document.getElementById('seconds');
let timeStatus=document.getElementById('timeStatus');
let buttons=document.querySelectorAll('button');
let format;
function clockFunc(){
    let format=clock.getAttribute('data-madina');
    // console.log(format);
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    if(format==='12'){
        h=h>12?h%12:h;
    }
    hour.innerHTML=h<10?'0'+h:h;
    min.innerHTML=m<10?'0'+m:m;
    secund.innerHTML=s<10?'0'+s:s;
}
setInterval(clockFunc,1000);
// setTimeout(salom,1000);
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        // console.log(e.target);
        format=button.getAttribute('data-madina');
        // console.log(format);
        clock.setAttribute('data-madina',format);
    })
})

let loading=document.getElementById('loading');
setTimeout(()=>{
    loading.remove();
    countdown.style.display='flex';
},3000);
setInterval(Down,1000);