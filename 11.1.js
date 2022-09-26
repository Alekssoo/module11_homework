function checkEvenElem () {
    let newArr = [1,2,0,"hey!",3 ]
    let countOdd = 0;
    let countEven = 0;
    let countZero = 0;

    newArr.forEach(function(item, index, array) {

    if ((typeof item == "number") && !(isNaN(item))) {
        if ((item) && (item % 2 == 0)) {
            countEven += 1;
        } else if ((item % 2) != 0) {
            countOdd += 1;
        } else {
            countZero += 1;
        }
    } else {
        return;
    }

    });

    console.log (countOdd + ' - count of odd elements');
    console.log (countEven + ' - count of even elements');
    if (countZero) {
        console.log (countZero + ' - count of zero-elements');
    }
}

checkEvenElem();