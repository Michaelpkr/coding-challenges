function fizzBuzz(n1){
    for(let i = 1; i <= n1; i++){
    if (i % 5 === 0 && i % 3 === 0){
        console.log("FizzBuzz")
    }else if (i % 3 === 0){
        console.log("Fizz")
    }else if (i % 5 === 0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}

}