package com.zhangchunjie.object.duotai;

public class Test01 {
    public static void main(String[] args) {
//        /*
//        * 普通的对象调用
//        * */
//        Student student = new Student();
//        student.eat();
//        System.out.println(student.age + "" + student.name);
//        /*
//        * 多态
//        * */
//        Person person = new Student();
//        person.eat();
//        person.jump();
//        System.out.println(person.age);


       demo demo = new demo();
       demo.usePeron(new Teacher());
       demo.usePeron(new Student());
    }
}
