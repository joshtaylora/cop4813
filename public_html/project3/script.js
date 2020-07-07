function calcSum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }

    console.log(`sum: ${sum}`);

    return sum;
}

function calcMean(array) {
    var mean = 0;
    var sum = calcSum(array);
    mean = sum / array.length;
    mean = mean.toFixed(2);
    return mean;
}

function calcMedian(array) {
    var median = 0;
    var midIndex = 0;

    var sortArray = array.sort(function(a, b){ return a-b });
    
    for (var x = 0; x < sortArray.length; x++) {
        console.log(sortArray[x]);
    }
    if (sortArray.length % 2 == 0) {
        midIndex = sortArray.length / 2 - 1;
        median = sortArray[midIndex];
        console.log(`median: ${median}`);
        return median;
    }
    else {
        midIndex = sortArray.length/2;
        median = sortArray[midIndex];
        console.log(`median: ${median}`);
        return median;
    }
}


function performStatistics() {
    // get input from textarea with id=p3-user-in
    var userIn = document.getElementById("p3UserIn").value;
    // make regex to match user-in to
    var reg = /\d+/g; 
    var userArray = userIn.match(reg);
    var getNum = /\d+/;
    
    console.log(`length of userArray: ${userArray.length}`);
    console.log(userArray);

    // converts string elements of userArray to integer values
    for (var i = 0; i < userArray.length; i++){
        userArray[i] = parseInt(userArray[i], 10);
    }

    var mean = calcMean(userArray);
    console.log(`mean: ${mean}`);

    var median = calcMedian(userArray);
    return false;
}

