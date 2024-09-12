package com.zhangchunjie.object;

public class Test02 {
    public static void main(String[] args) {
        Teacher tea = new Teacher();
        tea.setName("tea");
        Student student = new Student();
        student.setName("student");

        tea.toString();
        student.toString();

        tea.getAgeNumber();
    }
}

class Person {
    private String name;
    int age = 10;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString() {
        System.out.println("Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}');
        return "";
    }
}

class Teacher extends Person {
    int age = 60;

    public void getAgeNumber() {
        int age = 30;
        System.out.println(super.age + "" + this.age + age);
    }
}

class Student extends Person { }

