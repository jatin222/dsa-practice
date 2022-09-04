let arr = [2,5,1,4,8,0,8,13,8,9]

function que(arr) {
    let max_value = arr[0]
    let max_count = 1
    for(let i = 1; i < arr.length; i++)
    {
        if(arr[i] > max_value)
        {
            max_value = arr[i]
            max_count = 1
        }
        else if(arr[i] == max_value)
        {
            max_count++
        }
    }
    
    return arr.length - max_count
}

console.log(que(arr))