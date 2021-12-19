// Code your solution in this file!

function returnFirstTwoDrivers(arr) {
    let newArr = [arr[0], arr[1]];
    return newArr;
}

function returnLastTwoDrivers(arr) {
    let newArr = arr.slice(-2);
    return newArr;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare*multiplier;
    }
}

function fareDoubler(fare) {
    return fare * 2;
}

function fareTripler(fare) {
    return fare * 3;
}

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
}