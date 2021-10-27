const useComponent = function(arr, Vue) {
  arr.length > 0 && arr.forEach(v => Vue.use(v))
}

const registComponent = function(com, Vue) {
  let name = com.name
  if (!name) {
    name = com.extendOptions.name
  }
  registComponent(name, Vue)
}

export { useComponent, registComponent }
