package zhangchunjie.集合框架.day03;

import java.util.ArrayList;
import java.util.ListIterator;

public class MyListIterator {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<String>();
        list.add("1");
        list.add("2");
        list.add("3");
        list.add("4");

        ListIterator<String> iterator = list.listIterator();
        System.out.println("从头到尾");
        System.out.println(iterator.next() + iterator.hasNext());
        System.out.println(iterator.next() + iterator.hasNext());
        System.out.println(iterator.next() + iterator.hasNext());
        System.out.println(iterator.next() + iterator.hasNext());
        System.out.println("从尾到头");
        System.out.println(iterator.previous() + iterator.hasNext());
        System.out.println(iterator.previous() + iterator.hasNext());
        System.out.println(iterator.previous() + iterator.hasNext());
        System.out.println(iterator.previous() + iterator.hasNext());
    }
}
