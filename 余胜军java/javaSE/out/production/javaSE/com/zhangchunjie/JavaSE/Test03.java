package com.zhangchunjie.JavaSE;

public class Test03 {
    public static void main(String[] args) {
        int[] arr = {123,4534,546,54,324,3124,23423,45,235,43,643,6456,7,6578};
        int max = 0;

        for (int i = 0; i < arr.length; i++) {
            if (max < arr[i]) {
                max = arr[i];
            }
        }
        System.out.println(max);
    }
}
