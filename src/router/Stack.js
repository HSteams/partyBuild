export default class Stack {
  /**
   * 栈的构造器
   * @param maxLength 栈的最大长度 (默认长度为js最大整数:2^31 - 1)
   */
  constructor (maxLength) {
    this.maxLength = maxLength || Math.pow(2, 31) - 1
    this.stack = []
  }
  // 出栈
  push (path) {
    if (this.stack.length >= this.maxLength) {
      // 删除数组中第一个元素
      this.stack.splice(0, 1)
    }
    this.stack.push(path)
  }
  // 入栈
  pop () {
    return this.stack.pop()
  }

  // 栈的长度
  get length () {
    return this.stack.length
  }
  toString () {
    return JSON.stringify(this.stack)
  }
}
