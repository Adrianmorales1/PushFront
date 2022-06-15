function PushFront(arr, value) {
    onemore = arr.length +1
    for(var x = 0; x < onemore; x++){
        temp = arr[x]
        arr[x] = value
        value = temp
    }
    console.log(arr)
}

PushFront([1,2,3,4,5], 7)