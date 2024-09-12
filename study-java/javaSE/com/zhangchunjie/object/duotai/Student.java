package com.zhangchunjie.object.duotai;

public class Student extends Person{
    public String name;
    @Override
    public void eat() {
        System.out.println("student");
    }
    public void run() {
        System.out.println("run");
    }
}
