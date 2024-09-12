package com.zhangchunjie.JavaSE;

import java.util.Random;

public class Test02 {
    public static void main(String[] args) {
       Random r = new Random();
       int number = r.nextInt(10); // [0, 10)
        System.out.println("number: " + number);
    }
}
