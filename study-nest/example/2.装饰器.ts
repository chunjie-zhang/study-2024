/*
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2024-04-01 11:15:00
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2024-07-18 21:28:19
 * @FilePath: /study-nest/example/2. 装饰器.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 类装饰器·
const doc:ClassDecorator = (target) => {
  console.log(target)  // [class Zcj]
  target.prototype.name = 'zcj'
}

@doc
class Zcj {
  constructor() {

  }
}

// 上面等同于
// class Zcj1 {
//   constructor() {

//   }
// }
// doc(Zcj1)

const zcj: any = new Zcj()
console.log(zcj.name); // zcj

// 属性装饰器

const doc1: PropertyDecorator = (target, key) => {
  console.log(target, key); // {} name
}

class Zcj1 {
  @doc1
  public name: string = 'zcj'
  constructor() {
  }
}

/**
 * 方法装饰器
 *
 * @param {*} target {}
 * @param {*} key 
 * @param {*} descriptor
 * getName {
    value: [Function: getName],
    writable: true,
    enumerable: false,
    configurable: true
  }
 */
const doc2: MethodDecorator = (target, key, descriptor) => {
  console.log(target, key, descriptor);
}

class Zcj2 {
  constructor() {
  }
  @doc2
  getName() {

  }
}

/**
 * 参数装饰器
 *
 * @param {*} target
 * @param {*} key
 * @param {*} descriptor
 * 
 */
  const doc3: ParameterDecorator = (target, key, index) => {
    console.log(target, key, index); // {} getName 1
  }
  
  class Zcj3 {
    constructor() {
    }
    getName(a: string, @doc3 b: number) {
  
    }
  }