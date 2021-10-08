import { useState } from 'react'

function debounce(func, delay = 200) { // ms
  let timeId = null
  return (...args) => {
    if (delay < 0) console.log('error: debounce parameter error')
    else if (delay > (2 ** 31) -1) console.log('error: delay number is too large')
    else if (delay > 10000) console.log('warning: delay number is large, is it legitimate?')
    clearTimeout(timeId)
    timeId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

export default function DebounceTest() {
  const [delay, setDelay] = useState(200)
  return (
    <div className="eachQuestion">
      ● Debounce 測試<br/ >
      Delay 時間設定(ms): <input name="delay" onChange={(e) => setDelay(e.target.value)} type="number"/ > ( Default: 200ms ) <br/ >
      <button onClick={debounce(()=>console.log('hello'), delay)}>Click me</button> ( 點擊按鈕後，console log 出 'hello' ) <br/ >
      0 ≤ Delay ≤ 2 ** 31 -1<br/ >
      輸入區間外的數字會失去 debounce 效果，直接執行函數並且 print 出警告<br/ >
      設置超過 10 秒的 delay 會 console log 出秒數不合理的警告，但不影響執行。<br/ >
    </div>
  )
}
