function testLength(value, length) {
    if (value.length == length) {
        return true;
    }
    else {
        return false;
    }
}

function testNumber(value) {
    if (!(isNaN(value))) {
        return true;
    }
    else {
        return false;
    }
}

function validateControl(control, name, length) {
    if (testLength(control, length)) {
        if (testNumber(control.nodeValue)) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

function validateCreditCard(value) {
    console.log(value);
}

function validateEmail(value) {
    console.log(`validateEmail function: email=${value}`)
    // use a regular expression to determine if value conforms to a typical email address
    var email = /([a-z]|[A-Z])+@([a-z]|[A-Z])+\.([a-z]|[A-Z])+/;
    // uncomment out to test if email input matches the RegEx
    console.log(`${email.exec(value)[0]}`);
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
    window.log(value);
}

function validateForm() {
    // call each of the functions to validate all of the form fields
    // validate the credit card number
    var creditCard = document.getElementById("p2cardnum");
    var creditCardNum = document.getElementById("p2cardnum").value;
    validateCreditCard(creditCardNum);

    var cvc = document.getElementById("p2CVC");
    var email = document.getElementById("p2email");
    var date = document.getElementById("p2expdate");
    var state = document.getElementById("p2state");
    var zip = document.getElementById("p2zip");
    // validate cvc/cvv2
    //validateControl(cvc, "cvc/cvv2", 3);
    // validate email
    //validateEmail(email.value);
    // validate date
    //validateDate(date.value);
    // validate state
    //validateState(state.value);
    // validate zip
    //validateControl(zip, "zip", 5);

}


var submit = document.getElementById("p2submit");
submit.addEventListener("submit", validateForm());
