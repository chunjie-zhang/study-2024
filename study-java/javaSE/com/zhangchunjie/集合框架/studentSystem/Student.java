package zhangchunjie.集合框架.studentSystem;

public class Student {

    /**
     * 学生编号
     * */
    private String studentNumber;

    /**
     * 学生姓名
     * */
    private String studentName;

    /**
     * 学生年龄
     * */
    private Integer studentAge;

    /**
     * 学生地址
     * */
    private String studentAddress;

    public Student (String studentNumber, String studentName, Integer studentAge, String studentAddress) {
       this.studentNumber = studentNumber;
       this.studentName = studentName;
       this.studentAge = studentAge;
       this.studentAddress = studentAddress;
    }

    public String getStudentNumber() {
        return studentNumber;
    }

    public void setStudentNumber(String studentNumber) {
        this.studentNumber = studentNumber;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public Integer getStudentAge() {
        return studentAge;
    }

    public void setStudentAge(Integer studentAge) {
        this.studentAge = studentAge;
    }

    public String getStudentAddress() {
        return studentAddress;
    }

    public void setStudentAddress(String studentAddress) {
        this.studentAddress = studentAddress;
    }
}
