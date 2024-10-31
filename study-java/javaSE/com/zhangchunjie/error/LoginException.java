package zhangchunjie.error;

public class LoginException extends Exception {
    public LoginException(String message) {
        super(String.valueOf(message));
    }
}
