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
    var creditCard = {
        amex: {
            firstDigit: 3,
            length: 15
        },
        discover: {
            firstDigit: 6,
            length: 16
        },
        masterCard: {
            firstDigit: 5,
            length: 16
        },
        visa: {
            firstDigit: 4,
            length: 16
        }
    };
    var cardVal = value.trim();
    cardVal = cardVal.split("");

    if (testNumber(cardVal)) {
        if (cardVal[0] == creditCard.amex.firstDigit) {
            if (testLength(cardVal.length, creditCard.amex.length)) {
                return true;
            }
            // if the first digit matches a valid card but the length does not match -> return false
            else {
                return false;
            }
        }
        else if (cardVal[0] == creditCard.discover.firstDigit) {
            if (testLength(cardVal.length, creditCard.discover.length)) {
                return true;
            }
            // if the first digit matches a valid card but the length does not match -> return false
            else {
                return false;
            }
        }
        else if (cardVal[0] == creditCard.masterCard.firstDigit) {
            if (testLength(cardVal.length, creditCard.masterCard.length)) {
                return true;
            }
            // if the first digit matches a valid card but the length does not match -> return false
            else {
                return false;
            }
        }
        else if (cardVal[0] == creditCard.visa.firstDigit) {
            if (testLength(cardVal.length, creditCard.visa.length)) {
                return true;
            }
            // if the first digit matches a valid card but the length does not match -> return false
            else {
                return false;
            }
        }
        // if testNumber passes but the first digit does not match a valid credit card -> return false
        else {
            return false;
        }
    }
    // testNumber fails -> return false
    else {
        return false;
    }
}

function validateEmail(value) {
    // use a regular expression to determine if value conforms to a typical email address
}

function validateState(value) {
    // test whether the select state option is currently selected
    window.log(value);
}

function validateForm() {
    // call each of the functions to validate all of the form fields
    var creditCard = document.getElementById("p2cardnum");
    var cvc = document.getElementById("p2CVC");
    var email = document.getElementById("p2zip");
    var date = document.getElementById("p2expdate");
    var state = document.getElementById("p2state");
    var zip = document.getElementById("p2zip");
    // validate credit card input id = p2cardnum
    validateCreditCard(creditCard.firstChild.nodeValue);
    // validate cvc/cvv2
    validateControl(cvv, "cvc/cvv2", 3);
    // validate email
    validateEmail(email.firstChild.nodeValue);;
    // validate date
    validateDate(date.firstChild.nodeValue);
    // validate state
    validateState(state.firstChild.nodeValue);
    // validate zip
    validateControl(zip, "zip", 5);

}

