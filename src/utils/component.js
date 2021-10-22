const useComponent = function(arr, Vue) {
  arr.length > 0 && arr.forEach(v => Vue.use(v))
}

export { useComponent }
