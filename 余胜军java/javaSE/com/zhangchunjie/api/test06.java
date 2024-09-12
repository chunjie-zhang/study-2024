package com.zhangchunjie.api;

public class test06 {
    public static void main(String[] args) {
        String test = "hello world";
        String[] testArgs = test.split("");
        for (int i = 0; i < testArgs.length; i++) {
            System.out.println(testArgs[i]);
        }
    }
}
