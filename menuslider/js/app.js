//UI
const toggle=document.getElementById('toggle');
const open=document.getElementById('open');
const close=document.getElementById('close');
const modal=document.getElementById('modal');

//add event listener
toggle.addEventListener('click',()=>{
    // console.log('hello');
    document.body.classList.toggle('show-nav');
});
//show modal
open.addEventListener('click',()=>{
    // console.log('signup');

    modal.classList.add('show-modal');

});
//hide modal
close.addEventListener('click',()=>{
    console.log('close');
    modal.classList.remove('show-modal');
});

//hide modal by clicking window area
//Method 1

// window.addEventListener('click',function(e){
    //  console.log(e.target);
//     if(e.target===modal){
//          modal.classList.remove('show-modal');
//      }

// })

//method 2
//hide modal from clicking opacity
window.addEventListener('click',(e)=>e.target===modal? modal.classList.remove('show-modal'):false);
    



