/**
 * Created by fjl on 2017/7/26.
 */

export default function (Vue) {
// 格式化日期
  Vue.directive('date',
    // 函数简写(bind 和 update)
    function (el, binding, vnode) {
      var date = binding.value.date
      var format = binding.value.format
      el.innerText = date + format
    })
}
