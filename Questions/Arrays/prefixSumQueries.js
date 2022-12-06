//construct prefix sum with array arr
function constructPrefixSum(arr) {
    let pfSum = [arr[0]]
    for(let i = 1; i < arr.length; i++)
    {
        pfSum[i] = pfSum[i-1] + arr[i]
    }

    return pfSum
}

//input array
const arr = [5, 2, 3, 8, 4, 9, 6]
//input Q queries
const Q = [
    [2, 5],
    [0, 2],
    [1, 3],
    [3, 5]
]


let pfSum = constructPrefixSum(arr)
console.log("pfSum", pfSum);

for (let i = 0; i < Q.length; i++) {
    let L = Q[i][0];
    let R = Q[i][1];

    if(L == 0)
        console.log("Sum for ", [L, R], " is ", pfSum[R]);
    else
        console.log("Sum for ", [L, R], " is ", pfSum[R] - pfSum[L - 1]);
}