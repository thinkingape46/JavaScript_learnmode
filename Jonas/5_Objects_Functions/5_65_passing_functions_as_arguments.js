var myArray = [1,2,3,4,5,6,7];

function squareFunc(num) {
    return num*num;
}

function squareArrayFunc(array, func) {
    squaredArray = [];

    for (i = 0; i < array.length; i++) {
        squaredArray.push(func(array[i]));
    };
    console.log(squaredArray);
}

squareArrayFunc(myArray, squareFunc);