package com.zhangchunjie.object;

public class Test04 {
    public static void main(String[] args) {
        Teacher2 teacher2 = new Teacher2();
        teacher2.setSchool("天津理工大学");

        System.out.println(Teacher2.school);
    }
}

class Person2 {
    public static String school;

    public void setSchool(String schools) {
        school = schools;
    }
}

class Teacher2 extends Person2 {
    public Teacher2() {
        System.out.println("老师来自" + school);
    }
}

class Student2 extends Person2 {
    public Student2() {
        System.out.println("学生来自" + school);
    }
}