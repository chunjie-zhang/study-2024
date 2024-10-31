package zhangchunjie.集合框架.day03;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

public class day03 {
    public static void main(String[] args) {
        Collection<String> collection = new ArrayList<String>();
        collection.add("1");
        collection.add("2");
        collection.add("3");
        collection.add("4");

        Iterator<String> iterator = collection.iterator();
        System.out.println(iterator.next() + iterator.hasNext());
        System.out.println(iterator.next() + iterator.hasNext());
        System.out.println(iterator.next() + iterator.hasNext());
        System.out.println(iterator.next() + iterator.hasNext());
        System.out.println(iterator.next() + iterator.hasNext());

    }
}
