let arr = [-3, 4, 2, 8, 7, 9, 6, 2, 10]
let Si = 3
let Ei = 7

function reversePartArr(arr, Si, Ei)
{
    let i = Si
    let j = Ei
    
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


console.log(reversePartArr(arr, Si, Ei))