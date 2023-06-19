function isPowerOfTwo(n){
    for(i=0; i<n; i++){
        if(n > 0 && n===(Math.pow(2, i))){
            return true;
        }
    }
    return false;
}

console.log(isPowerOfTwo(1))//true

console.log(isPowerOfTwo(2))//true

console.log(isPowerOfTwo(5))//false

console.log(isPowerOfTwo(8))//true