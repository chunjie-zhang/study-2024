/**
 * Inversion of Control字面意思是[控制反转]
 * 具体定义是高层模块不应该依赖低层模块，二者都应该依赖其抽象；抽象不应该依赖细节；细节应该依赖抽象。
 */

// 1. 错误的例子


// class A {
//   name: String;

//   constructor(name) {
//     this.name = name;
//   }
// }

// class B {
//   b: string

//   constructor() {
//     this.b = new A().name;
//   }
// }

// class C {
//   c: String
  
//   constructor() {
//     this.c = new C().name;
//   }
// }

// 我们可以看到，B 中代码的实现是需要依赖 A 的，两者的代码耦合度非常高。当两者之间的业务逻辑复杂程度增加的情况下，维护成本与代码可读性都会随着增加，并且很难再多引入额外的模块进行功能拓展。

// 解决方案

class A {
  name: String;

  constructor(name: string | String) {
    this.name = name;
  }
}

class C {
  c: String
  
  constructor(name: string | String) {
    this.c = name;
  }
}

class Container {
  mo: any;
  constructor () {
    this.mo = {};
  }

  provide(key: string, value: A | C) {
    this.mo[key] = value;
  }

  get(key: string) {
    return this.mo[key]
  }

}

const co = new Container();

co.provide('a', new A('zcj'))

co.provide('c', new C('zhangchunjie'))

class B {
  a;
  c;
  constructor() {
    this.a = co.get('a');
    this.c = co.get('c')
  }
}

new B();