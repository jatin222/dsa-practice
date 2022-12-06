function constructEvenPrefixSum(arr) {
    let pfSum = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        if(i % 2 == 0) //even
        {
            pfSum[i] = pfSum[i - 1] + arr[i]
        }
        else
        {
            pfSum[i] = pfSum[i-1]
        }
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


let pfEven = constructEvenPrefixSum(arr)
console.log("Even Prefix Sum: ", pfEven);

for (let i = 0; i < Q.length; i++) {
    const L = Q[i][0];
    const R = Q[i][1];

    if(L == 0)
        console.log("Even Prefix Sum for ", [L, R], " is ", pfEven[R]);
    else
        console.log("Even Prefix Sum for ", [L, R], " is ", pfEven[R] - pfEven[L - 1]);    
}
