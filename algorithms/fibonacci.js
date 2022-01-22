
function listFibonacci(n) {
    for (var fibonacci = [0, 1], i = 1; i < n; i++) 
      fibonacci.push(fibonacci[i] + fibonacci[i - 1])
    return fibonacci
}
console.log(  listFibonacci(6)  )