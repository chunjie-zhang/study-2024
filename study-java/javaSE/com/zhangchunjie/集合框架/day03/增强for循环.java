package zhangchunjie.集合框架.day03;

import java.util.ArrayList;
import java.util.ListIterator;

public class 增强for循环 {
    public static void main(String[] args) {
        // 传统的for循环
        int[] num = new int[]{1,2,3,4,5};

        System.out.println("传统的for循环数组");
        for (int i = 0; i < num.length; i++) {
            System.out.println(num[i]);
        }
        System.out.println("增强的for循环数组");
        for (int i:num) {
            System.out.println(i);
        }

        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        ListIterator iterator = list.listIterator();
        System.out.println("迭代器遍历集合");
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
        System.out.println("传统的for循环集合");
        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i));
        }
        System.out.println("增强的for循环集合");
        for (int i:list) {
            System.out.println(i);
        }
    }
}
