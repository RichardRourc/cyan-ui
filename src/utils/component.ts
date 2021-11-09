interface ICom {}

const useComponent = function(arr: any, Vue: any) {
  arr.length > 0 && arr.forEach((v: any) => Vue.use(v))
}

export { useComponent }
