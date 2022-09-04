let arr = [-1, 4, 7, 6, -2, 7, 8, 10]

function reverseArr(arr)
{
    let i = 0
    let j = arr.length - 1
    
    while(i < j)
    {
        //swap
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        
        i++
        j--
    }
    return arr
}


console.log(reverseArr(arr))