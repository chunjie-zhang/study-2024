package zhangchunjie.error;

public class test01 {
    public static void main(String[] args) {
        try {
            Test();
        } catch (Exception e) {
            System.out.println("报错了");
        }
    }
    public static void Test () {
        int[] a = new int[]{1,2,3,};

        System.out.println(a[3]);
    }
}

