
function sort (arr) {

let oddArr = []
let evenArr = []

    for(let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i])
        } else {
            oddArr.push(arr[i])
    }
    } 
    if (oddArr.length < evenArr.length) {
         console.log(oddArr)
    } else {
         console.log(evenArr)
    }
}

sort([2, 4, 0, 100, 4, 11, 2602, 36])