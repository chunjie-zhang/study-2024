/*
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2024-04-01 11:15:00
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2024-05-10 20:14:21
 * @FilePath: /study-nest/example/2. 装饰器.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const doc:ClassDecorator = (target) => {
  console.log(target)  // [class Zcj]
}

@doc
class Zcj {
  constructor() {

  }
}

// 上面等同于
class Zcj1 {
  constructor() {

  }
}
doc(Zcj1)