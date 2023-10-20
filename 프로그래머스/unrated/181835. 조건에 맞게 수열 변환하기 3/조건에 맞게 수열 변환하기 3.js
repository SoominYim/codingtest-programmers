function solution(arr, k) {

    if( k % 2 == 1){
        return arr.map(a => a * k)
    }else {
        return arr.map(a => a + k)
    }
    
}