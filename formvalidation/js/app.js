const form=document.querySelector('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const cfmpassword=document.getElementById('cfmpassword');

// //success
// function showsuccess(input){
//     const formcontrol=input.parentElement;
//     formcontrol.className="form-control success";

// }
// //error
// function showerror(input,message){
//     const formcontrol=input.parentElement;
//     formcontrol.className="form-control error";

//     const small=formcontrol.querySelector('small');
//     small.innerText=message;
// }
// //check valid email(using regular expression)
// function isvalidemail(email){
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }



// // event listener
// form.addEventListener('submit',function(e){
   
//     if(username.value=== ""){
//         //error
//         //console.log('yes');
//         showerror(username,'Username is required');
//     }else{

//         //success
//         // console.log('no');
//         showsuccess(username);
//     }
   
//     //email
//     if(email.value===""){

//         showerror(email,'Email is not required');
//     }else if(!isvalidemail(email.value)){
//         showerror(email,'Email is not invalid')
//     }
//    else{
//        showsuccess(email);
//    }

//    //password
//    if(password.value===""){
//        showerror(password,'Password is required');
//    }else{
//        showsuccess(password);
//    }
//    //cfm password
//    if(cfmpassword.value===""){
//        showerror(cfmpassword,'Confirm password is required');
//    }else{
//        //showsuccess(cfmpassword);

//        if(password.value !==cfmpassword.value){
//            showerror(cfmpassword,"password do not match");
//        }else{
//            showsuccess(cfmpassword);
//        }
//    }
//     e.preventDefault();
//     //console.log(username.value);

// });


//ADVANCE
//Event Listener
form.addEventListener('submit',function(e){
   console.log(username.value);
    e.preventDefault();

})

