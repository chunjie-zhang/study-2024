package com.zhangchunjie.object;

public class Test03 {
    public static void main(String[] args) {
        new Teacher1();
    }
}

class Person1 {
   public Person1() {
       System.out.println("父级构造函数");
   }
}

class Teacher1 extends Person1 {
   public Teacher1() {
       System.out.println("子类构造函数");
   }
}