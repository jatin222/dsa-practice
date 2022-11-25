let arr = [2, 5, -3, 7, 9, 12, 32]

function constructPrefixSum(arr) {
    let preArr = [arr[0]]

    for(let i = 1; i < arr.length; i++) {
        preArr.push(arr[i]+preArr[i-1])
    }

    return preArr
}

let preArr = constructPrefixSum(arr)

console.log("Prefix arr", preArr);