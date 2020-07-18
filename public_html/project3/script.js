function calcSum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }

    //console.log(`sum: ${sum}`);

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
        //console.log(sortArray[x]);
    }
    if (sortArray.length % 2 == 0) {
        midIndex = sortArray.length / 2 - 1;
        median = sortArray[midIndex];
        //console.log(`median: ${median}`);
        return median;
    }
    else {
        midIndex1 = Math.floor(sortArray.length/2);

        midIndex2 = Math.floor(sortArray.length/2 + 1);
        //console.log(`midIndex: ${midIndex}`);
        median = ((sortArray[midIndex1] + sortArray[midIndex2]) / 2).toFixed(2);
        //console.log(`median: ${median}`);
        return median;
    }
}

function calcMode(array) {
    var mode = new Map();

    for (var i = 0; i < array.length; i++) {
        if (mode.get(array[i])) {
            var freq = parseInt(mode.get(array[i]) + 1, 10);
            mode.set(array[i], freq);
        }
        else {
            mode.set(array[i], 1);
        }
    }

    var freq = 1;
    var x = 0;
    while (x < mode.size) {
        for (let [key, val] of mode) {
             if (val < freq) {
                //console.log(`val < freq: key: ${key}, val: ${val}`)
                mode.delete(key);
            }
            else if (val >= freq) {
                //console.log(`val >= freq: key: ${key}, val: ${val}`)
                freq = val;
            }
        }
        x++;
    }
    return mode;
}

function calcVariance(array) {
    var mean = calcMean(array);
    var variance = 0;
    for (var item of array) {
        variance += Math.pow(mean - item, 2);
    }
    variance = variance / array.length;
    return variance;
}

function calcStdDev(array) {
    var variance = calcVariance(array);
    var stdDev = Math.sqrt(variance);
    return stdDev;
}

function calcMax(array) {
    var curntMax = array[0];
    for (var x = 0; x < array.length; x++) {
        for (var y = 0; y < array.length; y++) {
            //console.log(`array[x]: ${array[x]}, array[y]: ${array[y]}`);
            if (array[x] > array[y] && array[x] > curntMax) {
                curntMax = array[x];
                //console.log(`new max: ${array[x]}`);
            }
        }
    }
    return curntMax;
}

function calcMin(array) {
    var curntMin = array[0];
    for (var x = 0; x < array.length; x++) {
        for (var y = 0; y < array.length; y++) {
            if (array[x] < array[y] && array[x] < curntMin) {
                curntMin = array[x]
            }
        }
    }
    return curntMin;
}

function performStatistics() {
    // get input from textarea with id=p3-user-in
    var userIn = document.getElementById("p3UserIn").value;
    // make regex to match user-in to
    var reg = /\d+/g; 
    var userArray = userIn.match(reg);
    var getNum = /\d+/;
    
    //console.log(`length of userArray: ${userArray.length}`);
    //console.log(userArray);

    // converts string elements of userArray to integer values
    for (var i = 0; i < userArray.length; i++){
        userArray[i] = parseInt(userArray[i], 10);
    }

    var max = calcMax(userArray);
    document.getElementById("p3Max").value = max;

    var min = calcMin(userArray);
    document.getElementById("p3Min").value = min;

    var sum = calcSum(userArray);
    document.getElementById("p3Sum").value = sum;

    var mean = calcMean(userArray);
    document.getElementById("p3Mean").value = mean;
    console.log(`mean: ${mean}`);

    var median = calcMedian(userArray);
    document.getElementById("p3Median").value = median;


    var mode = calcMode(userArray);
    var modeString = "";
    for (var [key, val] of mode) {
        modeString += key.toString() + " ";
    }
    document.getElementById("p3Mode").value = modeString;

    var variance = calcVariance(userArray);
    document.getElementById("p3Variance").value = variance.toFixed(2);

    var stdDev = calcStdDev(userArray);
    document.getElementById("p3StdDev").value = stdDev.toFixed(2);
    return false;
}

