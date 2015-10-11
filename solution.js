function reverse(str) {
    var rtnStr = [];
    if (!str || typeof str != 'string' || str.length < 2) {
        return str;
    }

    for (var i = str.length - 1; i>=0; i--) {
        rtnStr.push(str[i]);
    }

    

    return rtnStr.join('');
}




function mergeSortedArray(a, b) {
    var merged = [];
    var i = 1;
    var j = 1;
    var aElm = a[0],
    var bElm = b[0];
    if (a.length == 0) {
        return b;
    }

    if (b.length == 0) {
        return a;
    }

    while (aElm || bElm) {
        if (aElm < bElm) {
            merged.push(aElm);
            aElm = a[i];
            i++;
        } else {
            merged.push(bElm);
            bElm = b[j];
            j++;
        }


    }

    return merged;

}


function removeDuplicate(arr) {
    var tempObj = {};
    var resultArr = [];

    if (var i = 0; i< arr.length; i++) {
        if (!tempObj[arr[i]]) {
            outArr.push(arr[i]);
            tempObj[arr[i]] = true;
        }
    }

    return resultArr;
}




function isPrime() {
    var divisor = 2;
    var limit = Math.sqrt(n);

    if ( n == 2 || n == 3) {
        return true;
    }
    if (n % 2 === 0) {
        return false;
    }

    while (divisor <= limit) {

        if (n % divisor === 0) {
            return false;
        }
        divisor = divisor + 2;
    }

    return true;
}

function primeFactors(n) {
    var factors = [],
    var divisor = 2;

    // divisor now need bigger than n/2
    while (n > 2) {
        if (n % divisor === 0) {
            factors.push(divisor);
            n = n/divisor;
        } else {
            divisor ++;
        }
    }

    return factors;
}

function fibonacci(n) {

    if ( n <= 1) retun n; 

    return fibonacci(n - 1) + fibonacci(n - 2);
}














