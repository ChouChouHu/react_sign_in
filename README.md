
每一支程式都封裝成一個 Functional Component，
五個 Components 都放在 App.js，
打開首頁就能看見個別的操作示範或執行結果，

# 實作 Fibonacci number (費式數列)
為爭取更好一點的效能，不使用遞迴而使用簡單的 for loop。
針對非數字與負數做例外處理 ( print 出 error )，
因為從 position 1477 開始會回傳 infinite，
所以有限制傳入數字的上限 ( 0 ≤ position ≤ 1477 )，避免過度負荷。
大於這個數字時也會 print 出 error。

# Debounce 或 Throttle
這裡選擇實作 Debounce，在頁面上用一個簡單按鈕做範例。
0 ≤ Delay ≤ 2 ** 31 -1 ( 源自於 setTimeout 的限制 )
輸入區間外的數字會失去 debounce 效果，直接執行函數並且 print 出警告。
設置超過 10 秒的 delay 會 console log 出秒數不合理的警告，但不影響執行。

# 使用 Linked List 實作 Stack
使用 Class 寫出 ListNode，
再以 ListNode 建構 Class Stack。
pop() 與 push() 符合 Stack 的原理：後進先出，

# 實作 getPagination
詳見 code，這邊僅列出例外處理：
1. 總頁數小於 5 頁時，總是 render 所有頁數
2. 沒有任何資料時，顯示第一頁
3. offest 大於等於 total 時，回傳第一頁並 log 出錯誤
4. offest 小於 0 時，回傳第一頁並 log 出錯誤
5. limit 小於等於 0 時，預設 limit 為 5 回傳並 log 出錯誤

# React Custom Hook
由 components/form.js 與 customHook/useForm.js 建構而成。
使用 UseState 管理 values 跟 errors：
1. 用 form.js 傳入的 initialValues 來定義 values 內容
2. 表單被更動時，觸發 useForm 裡的 handleChange，用 useState 的 Hook 即時改變 values 的資料
3. 點擊 Submit 時，用 form.js 傳入的 validation function 檢查是否有 errors，若有 errors 就不送出結果，並且把 errors 印在頁面上讓使用者看到。若無 error 就用 form.js 傳入的 onSubmit function 傳出 values 的資料。
（詳見 code）
