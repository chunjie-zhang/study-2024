package com.zhangchunjie.JavaSE;

public class Test04 {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30};
        System.out.println(arr[0]);
        getMax(arr);
        System.out.println(arr[0]);
    }

    public static void getMax(int[] arr) {
        arr[0] = 20;
    }
}
