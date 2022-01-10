/**
 * 获取组件名,因为一些是继承vue的实例所以不能直接获取组件名
 * @param comp
 * @returns
 */
const getCompName = function (comp: any) {
  return (comp.extendOptions && comp.extendOptions.name) || comp.name
}

const useComponent = function (arr: any, Vue: any) {
  return arr.length > 0 && arr.map((v: any) => Vue.use(v))
}

/**
 * 主要针对vue-class的方式去注册里面的文件
 * @param arr
 * @returns {key:value} Vue.compoent注册的形式需要的对象
 */
const registComponent = function (arr: any) {
  const result =
    arr.length > 0 &&
    arr.reduce((cur: any, v: any) => {
      cur[v.name] = v
      return cur
    }, {})

  return result
}

export { useComponent, getCompName, registComponent }
