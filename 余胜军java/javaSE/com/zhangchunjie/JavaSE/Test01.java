package com.zhangchunjie.JavaSE;

import java.util.Scanner;
public class Test01 {
    public static void main(String[] args) {
        // 查创建一个打印机
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入一个数值类型的数据");
        // 用户在控制台输入的int类型
        int i = sc.nextInt();
        System.out.println("您输入的数值类型是" + i);
    }
}
