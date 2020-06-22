function testLength(value, length) {
    console.log("-------------------------------- testLength ----------------------------------");
    console.log(`value.length: ${value.length}, length: ${length}`);
    if (value.length == length) {
        return true;
    }
    else {
        return false;
    }
}

function testNumber(value) {
    console.log("---------------------------------- testNumber ----------------------------------------");
    if (!(isNaN(value))) {
        return true;
    }
    else {
        return false;
    }
}

function validateControl(control, name, length) {
    console.log("----------------------------- validateControl -----------------------------------");
    console.log(`control.value: ${control.value}, control.value.length: ${control.value.length}, expected length: ${length}`)
    if (testLength(control.value, length)) {
        if (testNumber(control.value)) {
            return true;
        }
        else {
            console.log("Error: value is not a number");
            return false;
        }
    }
    else {
        console.log("Error: number not correct length");
        return false;
    }
}

function validateCreditCard(value) {
    console.log(value);
    // removes all of the spaces in the string input
    var creditCardNum = value.replace(/\s/g, "");
    console.log(creditCardNum);
    // makes an array of each digit in the input
    var cardArray = creditCardNum.split("");
    console.log(cardArray);
    if (testNumber(creditCardNum)) {
        console.log("value is a number");
        console.log(`${cardArray[0]}`);
        if (cardArray[0] == 3) {
            if (testLength(cardArray, 15)) {
                //console.log("Card is the correct length");
                return true;
            }
            else {
                console.log("Card number is not the proper length for the card type");
                return false;
            }
        }
        else if (cardArray[0] == 6) {
            if (testLength(cardArray, 16)) {
                //console.log("Card is the correct length");
                return true;
            }
            else {
                console.log("Card number is not the proper length for the card type");
                return false;
            }
        }
        else if (cardArray[0] == 5) {
            if (testLength(cardArray, 16)) {
                //console.log("Card is the correct length");
                return true;
            }
            else {
                console.log("Card number is not the proper length for the card type");
                return false;
            }
        }
        else if (cardArray[0] == 4) {
            if (testLength(cardArray, 16)) {
                //console.log("Card is the correct length");
                return true;
            }
            else {
                console.log("Card number is not the proper length for the card type");
                return false;
            }
        }
        else {
            console.log("Card number given is not a valid credit card number");
            return false;
        }
    }
}

function validateEmail(value) {
    console.log(`validateEmail function: email=${value}`)
    // use a regular expression to determine if value conforms to a typical email address
    var email = /([a-z]|[A-Z])+@([a-z]|[A-Z])+\.([a-z]|[A-Z])+/;
    // uncomment out to test if email input matches the RegEx
    //console.log(`${email.exec(value)[0]}`);
    if (email.exec(value)[0] === value) {
        return true;
    }
    else {
        console.log("User defined email does not match a valid email address");
        return false;
    }
}

function validateState(value) {
    // test whether the select state option is currently selected
    console.log(value);
}

function validateForm() {
    // call each of the functions to validate all of the form fields
    // validate the credit card number
    var creditCard = document.getElementById("p2cardnum");
    // uncomment out to test validator function without submitting form
    //creditCard.addEventListener("input", validateCreditCard(creditCard.value));
    //validateCreditCard(creditCard.value);

    // validate cvc/cvv2
    var cvc = document.getElementById("p2CVC");
    cvc.addEventListener("input", validateControl(cvc, "CVC/CVV2", 3));

    // validate email
    var email = document.getElementById("p2email");
    //validateEmail(email.value);
    // uncomment out to test validator function without submitting form
    email.addEventListener("input", validateEmail(email.value));

    // validate expiration date
    var date = document.getElementById("p2expdate");
    //validateDate(date.value);

    // validate state drop down menu value
    var state = document.getElementById("p2state");
    state.addEventListener("input", validateState(state.value));
    //validateState(state.value);
    
    // validate zip code value
    var zip = document.getElementById("p2zip");
    //validateControl(zip, "zip", 5);

}


var submit = document.getElementById("p2submit");
submit.addEventListener("submit", validateForm());
