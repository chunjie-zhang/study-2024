package com.zhangchunjie.api;

import java.util.Scanner;

public class test01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("请在键盘录入一个字符串值");
        String str = scanner.nextLine();
        System.out.println("您在键盘录入的值是"+ str);
        System.out.println(scanner);
    }
}
