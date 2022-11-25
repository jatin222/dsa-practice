

let arr = [-3, 6, 2, 4, 5, 2, 8, -9, 3, 1]
let Q = [
    [4, 8],
    [6, 9],
    [1, 3],
    [0, 4]
]


function constructPrefixSum(arr) {
    let preArr = [arr[0]]

    for(let i = 1; i < arr.length; i++) {
        preArr.push(arr[i]+preArr[i-1])
    }

    return preArr
}


let preArr = constructPrefixSum(arr)
for (let i = 0; i < Q.length; i++) {
    // console.log("Q: ", Q[i]);
    if(Q[i][0] == 0)
    {
        // console.log("PreArr", preArr[Q[i][0]], preArr[Q[i][1] - 1]);
        console.log("Ans: ", preArr[Q[i][1]])
    }        
    else
    {
        // console.log("PreArr", preArr[Q[i][0]], preArr[Q[i][1] - 1]);
        console.log("Ans: ", preArr[Q[i][1]] - preArr[Q[i][0] - 1]);
    }
        
    
}