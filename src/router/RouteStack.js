import Stack from './Stack'

export default class RouteStack extends Stack {

  constructor (maxLength) {
    super(maxLength || 20)
    // state有三种情况，值为0：替换，1：入栈，2：出栈
    this._state = 0
  }

  set state (v) {
    this._state = v
    if (this.changeStateCallback) {
      this.changeStateCallback(v)
    }
  }

  get state () {
    return this._state
  }

  // 根据传入的路由来判断入栈还是出栈，并返回true或false
  pushOrPop (path) {
    if (this.top2 === path) {
      this.state = 2
      this.pop()
      return
    }
    this.state = 1
    this.push(path)
  }
  // 替换栈顶元素
  replace (path) {
    this.state = 0
    this.stack.pop()
    this.stack.push(path)
  }

  stateChanged (callback) {
    this.changeStateCallback = callback
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
