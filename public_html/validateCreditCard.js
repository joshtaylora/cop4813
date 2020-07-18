
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
    switch() {

    }
    console.log(value);
    var cardVal = value.split(" ");
    console.log(cardVal);

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
