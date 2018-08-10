function zeroNegativity(arr) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return false;
        }
    }
    return true;
}

let test1 = zeroNegativity([1,2,3])
console.log(test1)
let test2 = zeroNegativity([1,-2,1])
console.log(test2)

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let test3 = isEven(4);
console.log(test3)
let test4 = isEven(3);
console.log(test4)

function howManyEven(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count
}

let test5 = howManyEven([1,2,3,4]);
console.log(test5);
let test6 = howManyEven([2,2,4,4]);
console.log(test6);

function createDummyArray(n) {
    let arr = []
    for(let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * (10 - 0) + 0))
    }
    return arr;
}

let test7 = createDummyArray(3)
console.log(test7);

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * (arr.length - 0) + 0)];
}

let test8 = randomChoice([1,2,3,4,5,6])
console.log(test8);
