let arr = [2, 4, -3, 7]

let k = 5

function pairExist() {
    for(let i = 0; i < arr.length; i++)
    {
        for(let j = i + 1; j < arr.length; j++)
        {
            if(arr[i] + arr[j] == k)
                return true
        }
    }
    return false
}

console.log(pairExist(arr, k))