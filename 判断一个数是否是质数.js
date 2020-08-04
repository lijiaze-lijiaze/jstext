function isPrime(number){
    if(typeof number !=='number' || !Number.isInteger(number)){return false}
    if(number<2){
        return false
    }
    if(number == 2){
        return true
    }else if(number%2 ==0){
        return false
    }
    var squareRoot = Math.sqrt(number)
    console.log(squareRoot)
    for(var i = 3; i<= squareRoot;i+=2){
        if(number%i == 0){
            return false
        }
    }
    return true
}
isPrime(13)