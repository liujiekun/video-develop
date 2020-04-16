export default {
  install: function (Vue) {
    this.operate(Vue)
  },
  operate: function (Vue) {
    Vue.prototype.$messageTips = (that, type, message) => {
      that.$notify({
        type: type,
        message: message
      })
    }
  }
}
