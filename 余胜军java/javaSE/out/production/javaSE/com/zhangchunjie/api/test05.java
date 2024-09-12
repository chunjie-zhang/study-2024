package com.zhangchunjie.api;

public class test05 {
    public static void main(String[] args) {
        String str = "hello world";
        System.out.println(str.charAt(2));
        System.out.println(str.length());
        System.out.println(str.replace('l', 'o'));
        System.out.println(str.replaceFirst("l", "o"));
        System.out.println(str.replaceAll("l", "o"));

    }
}
