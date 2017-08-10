import Stack from './Stack'

export default class RouteStack extends Stack {

  constructor (maxLength) {
    super(maxLength || 20)
    this.clickBack = false
    this.isBack = false
  }

  // 根据传入的路由来判断入栈还是出栈，并返回true或false
  pushOrPop (obj) {
    this.isBack = this.clickBack
    if (this.isBack) {
      if (this.length > 1) {
        this.pop()
      } else if (this.length === 1) {
        this.pop()
        this.stack.push({top: 0})
      } else {
        this.stack.push({top: 0})
      }
    } else {
      if (this.top) {
        this.top.top = obj.top
      }
      this.push({top: 0})
    }
    this.clickBack = false
  }

  // 栈顶元素
  get top () {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1]
    } else {
      return null
    }
  }

}
