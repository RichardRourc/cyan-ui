/**
 * 节流
 * @param ctx this指向
 * @param fn 执行的函数
 * @param delay 间隔时间
 */
export function throttle(ctx: any, fn: () => any, delay: number) {
  let now: number,
    lastExec: number,
    timer: number | null | NodeJS.Timeout,
    context: any,
    args: any

  const execute = function () {
    fn.apply(context, args)
    lastExec = now
  }

  return (that: any, ...argument: any) => {
    that = ctx
    args = argument

    now = Date.now()

    if (timer) {
      clearTimeout(Number(timer))
      timer = null
    }

    if (lastExec) {
      const diff = delay - (now - lastExec)
      if (diff < 0) {
        execute()
      } else {
        timer = setTimeout(() => {
          execute()
        }, diff)
      }
    } else {
      execute()
    }
  }
}
