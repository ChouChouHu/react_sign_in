
export default function GetPaginationResult() {
  return (
    <div className="eachQuestion">
      ● 實作 getPagination<br/ >
      此處僅 print 出結果，詳見 code<br/ >
      getPagination(0, 5, 33): {JSON.stringify(getPagination(0, 5, 33))}<br/ >
      getPagination(5, 5, 33): {JSON.stringify(getPagination(5, 5, 33))}<br/ >
      getPagination(10, 5, 33): {JSON.stringify(getPagination(10, 5, 33))}<br/ >
      getPagination(15, 5, 33): {JSON.stringify(getPagination(15, 5, 33))}<br/ >
      getPagination(20, 5, 33): {JSON.stringify(getPagination(20, 5, 33))}<br/ >
      getPagination(25, 5, 33): {JSON.stringify(getPagination(25, 5, 33))}<br/ >
      getPagination(30, 5, 33): {JSON.stringify(getPagination(30, 5, 33))}<br/ >
      getPagination(10, 5, 24): {JSON.stringify(getPagination(10, 5, 19))}<br/ >
      註：總頁數小於 5 頁時，總是 render 所有頁數<br/ >
      getPagination(0, 5, 0): {JSON.stringify(getPagination(0, 5, 0))}<br/ >
      註：沒有任何資料時，顯示第一頁<br/ >
      getPagination(33, 5, 33): {JSON.stringify(getPagination(33, 5, 33))}<br/ >
      註：offest 大於等於 total 時，回傳第一頁並 log 出錯誤<br/ >
      getPagination(-5, 5, 33): {JSON.stringify(getPagination(-5, 5, 33))}<br/ >
      註：offest 小於 0 時，回傳第一頁並 log 出錯誤<br/ >
      getPagination(0, -1, 33): {JSON.stringify(getPagination(0, -1, 33))}<br/ >
      註：limit 小於等於 0 時，預設 limit 為 5 回傳並 log 出錯誤<br/ >
    </div>
  )
}

function getPagination(offset, limit, total) {
  // exception
  if (total < 0) {
    console.log('error: input total is negative!')
    total = 0
  }
  if (limit <= 0) {
    console.log('error: input limit is illegal!')
    limit = 5 // 5 is default limit
  }
  // note: when error occur, return current page 1
  if (offset < 0) {
    console.log('error: input offset is negative!')
    offset = 0
  }
  else if (offset >= total) {
    console.log('error: input offset overflow!')
    offset = 0
  }

  let totalPage = (total === 0)? 1 : Math.ceil(total/limit)
  let currentPage = (totalPage > 0)? Math.floor(offset/limit) + 1 : 0
  let renderPages = []
  let renderPageLength = 5

  // calculate content of renderPages
  let startPage = 1
  let endPage = renderPageLength
  if (totalPage < renderPageLength) {
    endPage = totalPage
  } else if (currentPage - 2 < 1) { // get first 5 pages
    // which means [1, 2, 3, 4, 5]
  } else if (currentPage + 2 > totalPage) { // get last 5 pages
    startPage = totalPage - 4
    endPage = totalPage
  } else { // standard case
    startPage = currentPage - 2
    endPage = currentPage +2
  }
  for (let i = startPage; i <= endPage; i++) {
    renderPages.push(i)
  }

  return { currentPage, totalPage, renderPages }
}
