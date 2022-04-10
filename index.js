// Code your solution in this file!

const returnFirstTwoDrivers = driversArray => driversArray.slice(0,2) 

const returnLastTwoDrivers = driversArray => driversArray.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = (integer) => (fare) => (integer * fare)

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers= (arrayOfDrivers,returnDrivers) => returnDrivers(arrayOfDrivers)
