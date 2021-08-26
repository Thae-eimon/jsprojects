//UI
const currencyone=document.getElementById('currency-one'),
     amountone=document.getElementById('amount-one');

const currencytwo=document.getElementById('currency-two'),
     amounttwo=document.getElementById('amount-two');
const rateel=document.getElementById('rate');
     const swap=document.getElementById('swap');

//Calcualte Exchange Rate and update by Ajax
function calculate(){
//     console.log('working');

     const currone=currencyone.value;
     const currtwo=currencytwo.value;

     fetch(`https://v6.exchangerate-api.com/v6/a13937fcd1354423a022d74d/latest/${currone}`)
     .then(res=>res.json())
     .then(data=>{
          console.log(data);

          const rate=data.conversion_rates[currtwo];
          console.log(rate);

     rateel.innerText=`1${currone}=${rate} ${currtwo}`;

     amounttwo.value=(amountone.value*rate).toFixed(2);
     }
          
     );


}





// Event Listener
currencyone.addEventListener('change',calculate);
amountone.addEventListener('input',calculate);
currencytwo.addEventListener('change',calculate);
amounttwo.addEventListener('input',calculate);
swap.addEventListener('click',()=>{
     const temp=currencyone.value;
     currencyone.value=currencytwo.value;
     currencytwo.value=temp;
     calculate();
});

calculate();


