function mergeSort(array) {
    console.log(array)
    if(array.length<=1) {
        return array;
    }

    mid = Math.floor(array.length/2)
    array1 = array.slice(0,mid)
    array1=array1.sort((a,b)=>a-b)
    array2 = array.slice(mid)
    array2=array2.sort((a,b)=>a-b)

    return merge(array1, array2)
}


function merge(array1, array2) {
    newArray=[]

    console.log("array1: ", array1)
    console.log("array2: ", array2)
    
    while(array1.length>0 && array2.length>0) {
        if(array1[0]>array2[0]) {
            newArray.push(array2.shift() )
        } else {
            newArray.push(array1.shift() )

        }
        
    }
    return [...newArray, ...array1, ...array2]
}


//console.log(mergeSort([1, 5, 3, 4]))
//console.log(mergeSort([1, 5, 3, 8 ,2]))

console.log(mergeSort([1, 5, 3, 8, 2, 6, 4, 7]))