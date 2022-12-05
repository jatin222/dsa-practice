/**
 * Equilibrium Index:
 * Given N array elements, count number of equilibrium index.
 * An index is an equilibrium index  if { Sum of all elemets before index } = { Sum of all elements after index }
 */

function prefixSum(arr) {
    let pfSum = [arr[0]]
    for(let i = 1; i < arr.length; i++) {
        pfSum[i] = pfSum[i-1] + arr[i]
    }
    return pfSum
}

// console.log("Prefix sum: ", prefixSum([3, 2, 4, 1]))


function isEquilibriumIndex(arr, pfSum, index) {
    let leftSum = pfSum[index - 1] ?? 0
    let rightSum = pfSum[arr.length - 1] - pfSum[index]

    if(leftSum == rightSum)
        return true
    else
        return false
}

let arr = [-3, 2, 4, -1] //input
let pfSum = prefixSum(arr)
let count = 0
for(let i = 0; i < arr.length; i++) {
    if(isEquilibriumIndex(arr, pfSum, i)) {
        count++
    }
}

console.log("Total equilibrium index: ", count);


/**
 * TC: O(N),
 * SC: O(N)
 */