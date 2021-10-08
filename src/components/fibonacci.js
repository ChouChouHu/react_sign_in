import { useState } from 'react'

function fibonacci(n) {
  n = parseInt(n)
  if (n === 0) return 0
  else if (n > 1477) return 'error: the parameter is too large.'
  else if (!n) return 'error: wrong parameter type of fibonacci.'
  else if (n < 0) return 'error: fibonacci position cannot be negative number.'

  let pre = 1
  let now = 1
  for (let i = 2; i < n; i++) {
      const temp = now
      now = now + pre // e.g. [2] = [0] + [1]
      pre = temp
  }
  return now
}

export default function FindFibonacciNumber() {
  const [fibonacciAns, setFibonacciAns] = useState()
  return (
    <div className="eachQuestion">
      ● Fibonacci number (費式數列)<br/ >
      請輸入參數 position: <input name="position" onChange={(e) => setFibonacciAns(fibonacci(e.target.value))} type="number"/ ><br/ >
      Answer: {fibonacciAns} <br/ >
      註：0 ≤ position ≤ 1477
    </div>
  )
}
