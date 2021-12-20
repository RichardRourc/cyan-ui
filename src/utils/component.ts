/**
 * 获取组件名,因为一些是继承vue的实例所以不能直接获取组件名
 * @param comp
 * @returns
 */
const getCompName = function (comp: any) {
  return (comp.extendOptions && comp.extendOptions.name) || comp.name
}

const useComponent = function (arr: any, Vue: any) {
  arr.length > 0 && arr.forEach((v: any) => Vue.use(v))
}

export { useComponent, getCompName }
