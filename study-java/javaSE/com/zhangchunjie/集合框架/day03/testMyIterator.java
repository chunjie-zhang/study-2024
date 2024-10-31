package zhangchunjie.集合框架.day03;


import java.util.ArrayList;
import java.util.List;

public class testMyIterator {
    public static void main(String[] args) {
        List<String> collection = new ArrayList<String>();
//        collection.add("1");
//        collection.add("2");
//        collection.add("3");
//        collection.add("4");

       MyIterator myIterator = new MyIterator(collection);
       System.out.println(myIterator.next());
        System.out.println(myIterator.next());
        System.out.println(myIterator.next());
        System.out.println(myIterator.next());
        System.out.println(myIterator.next());
        System.out.println(myIterator.next());
    }
}
