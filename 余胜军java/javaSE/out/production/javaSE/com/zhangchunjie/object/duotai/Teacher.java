package com.zhangchunjie.object.duotai;

public class Teacher extends Person{
    public String name;
    @Override
    public void eat() {
        System.out.println("Teacher");
    }
    public void run() {
        System.out.println("run");
    }
}
