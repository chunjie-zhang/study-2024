package zhangchunjie.集合框架;

import java.util.ArrayList;
import java.util.List;

public class day01 {
    public static void main(String[] args) {
        // 在集合框架中使用泛型，必须使用引用类型，如果想使用基本数据类型则使用他们的包装类
        List<String> arrayList = new ArrayList<String>();
        arrayList.add("zcj");
        arrayList.add("zcj1");
        arrayList.add("zcj2");
        arrayList.add("zcj3");
        arrayList.add("zcj4");
        arrayList.add("zcj5");
        System.out.println("集合中存了"+ arrayList.size() + "个元素");

        for (int i = 0; i < arrayList.size(); i++) {
            System.out.println(arrayList.get(i));
        }
        System.out.println("==============更新==================");
        arrayList.set(3, "zahngchunjie");
        for (int i = 0; i < arrayList.size(); i++) {
            System.out.println(arrayList.get(i));
        }
        System.out.println("==============remove==================");
        arrayList.remove("zcj");
        for (int i = 0; i < arrayList.size(); i++) {
            System.out.println(arrayList.get(i));
        }
    }
}
