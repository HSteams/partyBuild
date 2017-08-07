import Stack from './Stack'

export default class RouteStack extends Stack {

  constructor (maxLength) {
    super(maxLength || 20)
    this.isBack = false
  }
  // 根据传入的路由来判断入栈还是出栈，并返回true或false
  pushOrPop (path) {
    if (this.top2 === path) {
      this.pop()
      this.isBack = true
      return
    }
    this.push(path)
    this.isBack = false
  }
  // 替换栈顶元素
  replace (path) {
    this.stack.pop()
    this.stack.push(path)
  }
  // 栈顶元素
  get top () {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1]
    } else {
      return null
    }
  }
  // 顶部第二个元素，不存在为null
  get top2 () {
    if (this.stack.length > 1) {
      return this.stack[this.stack.length - 2]
    } else {
      return null
    }
  }
}
