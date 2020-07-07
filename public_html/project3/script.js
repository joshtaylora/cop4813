
function performStatistics() {
    // get input from textarea with id=p3-user-in
    var userIn = document.getElementById("p3UserIn").nodeValue;
    // make regex to match user-in to
    var reg = /((\d)+\s)+/; 
    var regUserMatch = reg.exec(userIn);
    console.log(regUserMatch);
    return false;
}

var userEnterText = document.getElementById("p3UserIn");
userEnterText.addEventListener("input", performStatistics());

var submit = document.getElementById("p3Submit");
submit.addEventListener("submit", performStatistics());
