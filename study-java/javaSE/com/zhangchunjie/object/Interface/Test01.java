package com.zhangchunjie.object.Interface;

public class Test01 {
    public static void main(String[] args) {
        Animal cat = new Cat();
        cat.eat();
        cat.eat1();
        cat.eat2();

        System.out.println(Cat.age+ " " + Cat.age1 + " " + Cat.age2);
    }
}
