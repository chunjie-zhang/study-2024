package com.zhangchunjie.api;

public class Student {
    @Override
    public boolean equals(Object obj) {
        if(obj == null || (this.getClass() != obj.getClass())){
            System.out.println("Bad argument");
            return false;
        }
        System.out.println("Bad argument2");
        return this == obj;
    }
}
