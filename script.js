const btnConfirm = document.getElementById('confirm');

var cardNumber = document.getElementById('cardNumber');
const cardName = document.getElementById('cardName');
const expiry = document.getElementById('expiry');
const cvv = document.getElementById('cvv');
const thankYou = document.getElementById('thankYou');



// INPUTS
const nameInput = document.getElementById('nameInput').value;
var numberInput = document.getElementById('numberInput').value;
const month = document.getElementById('month').value;
const year = document.getElementById('year').value;
const cvvInput = document.getElementById('cvvInput').value;




// btnConfirm.addEventListener('click', function(){    
//     // 
//     console.log(cardNumber.defaultValue);
    
// })


document.getElementById("cardDetails").addEventListener("submit", function(event) {
    event.preventDefault();    
    
    cardNumber.innerHTML = document.getElementById('numberInput').value;
    cardName.innerHTML = document.getElementById('nameInput').value;
    expiry.innerHTML = document.getElementById('month').value + '/' + document.getElementById('year').value;
    cvv.innerHTML = document.getElementById('cvvInput').value;    

    thankYou.style.display = 'flex';

  });