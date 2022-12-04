/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/


//filter
function mergeArrays(...arrays){
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    const uniqueArray = jointArray.filter((item, index) => jointArray.indexOf(item) === index)

    return uniqueArray
}
console.log(mergeArrays([1, 2, 3, 3, 3], [1, 4, 5, 2])) // should return [1,2,3,4,5]
