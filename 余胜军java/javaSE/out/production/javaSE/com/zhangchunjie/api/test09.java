package com.zhangchunjie.api;

import java.lang.reflect.Array;
import java.util.Arrays;

import static java.lang.Integer.parseInt;

public class test09 {
    public static void main(String[] args) {
        String test = "12,435,546,765,87689,78";
        String[] test1 = test.split(",");
        int[] test2 = new int[test1.length];

        for (int i = 0; i < test1.length; i++) {
            test2[i] = parseInt(test1[i]);
        }
        Arrays.sort(test2);

        for (int j = 0; j < test2.length; j++) {
            if (j < test2.length - 1) {
                System.out.print(test2[j] + ",");
            } else {
                System.out.print(test2[j]);
            }
        }
    }
}
