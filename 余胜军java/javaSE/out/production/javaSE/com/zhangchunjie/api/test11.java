package zhangchunjie.api;

import java.util.Calendar;

public class test11 {
    public static void main(String[] args) {
        Calendar cal = Calendar.getInstance();
        System.out.println(cal.get(Calendar.YEAR));
        cal.add(Calendar.YEAR, 2);
        System.out.println(cal.get(Calendar.YEAR));
        cal.set(Calendar.YEAR, 2, 1);
        System.out.println(cal.get(Calendar.DATE));
    }
}
