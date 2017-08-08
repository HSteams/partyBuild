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
  pushOrPop (obj) {
    if (this.top2 && this.top2.path === obj.path) {
      this.pop()
      this.isBack = true
      console.log(this)
      return
    }
    if (this.top) {
      this.top.top = obj.top
    }
    this.push({path: obj.path, top: 0})
    console.log(this)
    this.isBack = false
  }
  // 替换栈顶元素
  replace (obj) {
    this.stack.pop()
    this.stack.push({path: obj.path, top: 0})
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
