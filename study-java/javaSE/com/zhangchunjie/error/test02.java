package zhangchunjie.error;

import java.util.Scanner;

public class test02 {
    public static void main(String[] args) throws LoginException {
       Scanner scan = new Scanner(System.in);
       String username = scan.nextLine();
       System.out.println("================================================");
        String password = scan.nextLine();
        System.out.println("================================================");
        login(username, password);
    }

    public static void login(String username, String password) throws LoginException {
        if (!("admin".equals(username) || "1234".equals(password))) {
            throw new LoginException("不正确");
        }
    }
}
