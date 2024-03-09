const body = document.querySelector('body');
const buttons= document.querySelectorAll('.button');

buttons.forEach((button)=>{
    button.addEventListener('click',function (event){
        body.style.backgroundColor = event.target.id;
    });
});
