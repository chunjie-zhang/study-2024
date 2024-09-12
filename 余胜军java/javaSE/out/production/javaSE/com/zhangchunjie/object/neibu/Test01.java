package com.zhangchunjie.object.neibu;

public class Test01 {

//    public void show() {
//        class Test011 {
//            public void test() {
//                System.out.println("局部内部类");
//            }
//        }
//
//        Test01 test01 = new Test01();
//        test01.show();
//
//    }

    public static void main(String[] args) {
        Test03 test03 = new Test03() {
            @Override
            public void test() {
                System.out.println("我是匿名内部类");
            }
        };

        test03.test();

    }
}
