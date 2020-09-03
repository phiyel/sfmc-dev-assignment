// Vars
let fName = document.querySelector('#firstName');
let lName = document.querySelector('#lastName');
let eMail = document.querySelector('#email');
let phoneNumb = document.querySelector('#phone');
let addLine = document.querySelector('#addressLine');
let city = document.querySelector('#city');
let province = document.querySelector('#regionCode');
let postCode = document.querySelector('#postalCode');
let country = document.querySelector('#country');
let amountNumb = document.querySelector('#quantity');
let delivery = document.querySelector('#deliverytype');
let additionalInfor = document.querySelector('textarea');
let paymentType = document.querySelector('#paymentmethod');
let paymentPaypal = document.querySelector('#paypal');
let paymentCard = document.querySelector('#creditcard');
let paymentCardExpiryMonth = document.querySelector('#expirymonth');
let paymentCardExpiryYear = document.querySelector('#expiryyear');
let paymentCardCvv = document.querySelector('#cvv');
let inputNumbers = document.querySelectorAll('input[type="tel"]');
let submitBut = document.querySelector('.bestbuy-content__form--button');
let letterNumber = /^[0-9a-zA-Z]+$/;

//Pushing input data into Arr object for review
const formDetails = [];

//Restrict input with numbers
for(let i = 0; i < inputNumbers.length; i++){
    inputNumbers[i].addEventListener('keydown', (e) =>{
        let key = e.keyCode ? e.keyCode : e.which;
        if(!( [8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
        (key == 65 && ( e.ctrlKey || e.metaKey  ) ) || 
        (key >= 35 && key <= 40) ||
        (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||
        (key >= 96 && key <= 105)
      )){
            e.preventDefault();
        }
    })
}

//Payment format
//Rest payment type on input select change
paymentType.addEventListener ('change', function(){
    let hiddenCard = document.querySelector('#payment-card');
    let hiddenPaypal = document.querySelector('#payment-paypal');
    hiddenCard.style.display = (this.value == 'CardCard') ? 'block':'none';
    hiddenPaypal.style.display = (this.value == 'PayPal') ? 'block':'none';
    paymentCard.value = '';
    paymentCardCvv.value = '';
    paymentCardExpiryMonth.value = 1;
    paymentCardExpiryYear.value = 2020;
    paymentPaypal.checked = false;

});

//paypal
paymentPaypal.addEventListener('click', () =>{
    window.open('https://www.paypal.com/us/signin', '_blank', 'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400')
});

//Focus out validations
fName.addEventListener('focusout', function(){
    (fName.value == '') ? fName.classList.toggle('bestbuy-error') : fName.classList.toggle('bestbuy-error'); 
});

lName.addEventListener('focusout', function(){
    (lName.value == '') ? lName.classList.toggle('bestbuy-error') : lName.classList.toggle('bestbuy-error');   
});

city.addEventListener('focusout', function(){
    (city.value == '') ? city.classList.toggle('bestbuy-error') : city.classList.toggle('bestbuy-error');   
});

province.addEventListener('focusout', function(){
    (province.value == '') ? province.classList.toggle('bestbuy-error') : province.classList.toggle('bestbuy-error');   
});

postCode.addEventListener('focusout', function(){
    (postCode.value == '' || postCode.value.match(letterNumber)) ? postCode.classList.toggle('bestbuy-error') : postCode.classList.toggle('bestbuy-error');    
});

eMail.addEventListener('focusout', function(){
    (eMail.value.indexOf('@') < 1 || (eMail.value.lastIndexOf('.') - eMail.value.indexOf('@') < 2) ) ? eMail.classList.toggle('bestbuy-error') : eMail.classList.toggle('bestbuy-error');
});

phoneNumb.addEventListener('focusout', function(){
    (phoneNumb.value == '' || phoneNumb.value.length != 10 || isNaN(phoneNumb.value)) ? phoneNumb.classList.toggle('bestbuy-error') : phoneNumb.classList.toggle('bestbuy-error');
});

addLine.addEventListener('focusout', function(){
    (addLine.value == '' && addLine.value.match(letterNumber)) ? addLine.classList.toggle('bestbuy-error') : addLine.classList.toggle('bestbuy-error');
});

delivery.addEventListener('focusout', function(){
    (delivery.value == '') ? delivery.classList.toggle('bestbuy-error') : delivery.classList.toggle('bestbuy-error');   
});

paymentType.addEventListener('focusout', function(){
    (paymentType.value == '') ? paymentType.classList.toggle('bestbuy-error') : paymentType.classList.toggle('bestbuy-error');   
});

paymentCard.addEventListener('focusout', function(){
    (paymentCard.value == '') ? paymentCard.classList.toggle('bestbuy-error') : paymentCard.classList.toggle('bestbuy-error');   
});

paymentCardCvv.addEventListener('focusout', function(){
    (paymentCardCvv.value == '') ? paymentCardCvv.classList.toggle('bestbuy-error') : paymentCardCvv.classList.toggle('bestbuy-error');   
});

//ToDo
//Error message below each input ToDo

// Form Validation
function validate(e) {

    e.preventDefault();
    
    let inputCheck = document.querySelectorAll('input[type="text"]');
    let firstName = fName.value;
    let lastName = lName.value;
    let email = eMail.value;
    let contactNumber = phoneNumb.value;
    let address = addLine.value;
    let currentCity = city.value;
    let provincial = province.value;
    let postalCode = postCode.value;
    let countryCode = country.value;
    let orderQuantity = amountNumb.value;
    let deliver = delivery.value;
    let additionalRequest = additionalInfor.value;
    let paymentMethod = paymentType.value;
    let creditCardNumber = paymentCard.value;
    let cardExpiryMonth = paymentCardExpiryMonth.value;
    let cardExpiryYear = paymentCardExpiryYear.value;
    let cardCvv = paymentCardCvv.value;
        
    for(i = 0; i < inputCheck.length; i++){
        if(inputCheck[i].value == ''){
            inputCheck[i].classList.toggle('bestbuy-error'); 
        }
    }

    if(delivery.value == '' || 
    province.value == '' || 
    paymentType.value == '' || 
    paymentCard.value == '' || 
    paymentCardCvv.value == '' ||
    phoneNumb.value == '' || 
    eMail.value == ''){
        delivery.classList.toggle('bestbuy-error');
        province.classList.toggle('bestbuy-error');
        paymentType.classList.toggle('bestbuy-error');
        paymentCard.classList.toggle('bestbuy-error');
        paymentCardCvv.classList.toggle('bestbuy-error');
        phoneNumb.classList.toggle('bestbuy-error');
        eMail.classList.toggle('bestbuy-error');
    }
    formDetails.push({
        firstName, 
        lastName, 
        email, 
        contactNumber, 
        address, 
        currentCity, 
        provincial, 
        postalCode, 
        countryCode, 
        orderQuantity, 
        deliver, 
        additionalRequest, 
        paymentMethod,
        creditCardNumber,
        cardExpiryMonth,
        cardExpiryYear,
        cardCvv
    });
    console.log(formDetails);    

}
submitBut.addEventListener('click', validate);