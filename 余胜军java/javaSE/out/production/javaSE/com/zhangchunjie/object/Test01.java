package com.zhangchunjie.object;

public class Test01 {
    String name = "test";
    int age = 18;
    int height = 180;

    public void sendMessage () {
        System.out.println("发送消息");
    }

    public static void main(String[] args) {
        Test01 test = new Test01();
        test.sendMessage();
        test.height = 200;

        System.out.println(test.height);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}