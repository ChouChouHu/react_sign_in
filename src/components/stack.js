class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }
  push(val) {
    let newNode = new ListNode(val)
    if (this.first) {
      let temp = this.first
      this.first = newNode
      this.first.next = temp
    } else {
      this.first = newNode
      this.last = newNode
    }
    this.length++
  }
  pop() {
    if (!this.first) return null
    let popValue = this.first.val
    if (this.first === this.last) {
      this.first = null
      this.last = null
    } else {
      this.first = this.first.next
    }
    this.length--
    return popValue
  }
  size() { return this.length }
}


export default function StackFeature() {
  const myStack = new Stack()
  return (
    <div className="eachQuestion">
      ● 使用 Linked List 實作 Stack<br/ >
      此處僅 print 出結果，詳見 code <br/ >
      const myStack = new Stack()<br/ >
      myStack.push(1) {myStack.push(1)}<br/ >
      myStack.push(2) {myStack.push(2)}<br/ >
      myStack.push(3) {myStack.push(3)}<br/ >
      myStack.pop(): {myStack.pop()}<br/ >
      myStack.size(): {myStack.size()}
    </div>
  )
}
