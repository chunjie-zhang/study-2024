package com.zhangchunjie.api;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class test10 {
    public static void main(String[] args) {
        Date date = new Date();
        System.out.println(date);
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy年MM月dd日   hh时mm分ss秒");
        System.out.println(dateFormat.format(date));
        SimpleDateFormat dateFormat1 = new SimpleDateFormat("yyyy年MM月dd日hh时mm分ss秒");
        String dateString = "2024年01月04日04时09分57秒";
        try {
            System.out.println(dateFormat1.parse(dateString));
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }
}
