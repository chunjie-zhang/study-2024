package com.zhangchunjie.object.Interface;

public interface Animal {
    public int age = 0;
    public final int age1 = 200;
    public static int age2 = 300;

    public abstract void eat();
    public void eat1();
    void eat2();

    public default void eat3() {};
}
