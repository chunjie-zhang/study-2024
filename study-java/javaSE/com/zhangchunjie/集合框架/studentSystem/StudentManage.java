package zhangchunjie.集合框架.studentSystem;

import java.util.ArrayList;
import java.util.Scanner;

public class StudentManage {
    /**
     * 操作枚举
     * */

    private static final String[] tipArr = { "新增学生", "删除学生", "修改学生", "查询学生", "退出系统" };


    /**
     * 学生对象类
     * */
    private static ArrayList<Student> students = new ArrayList<Student>();

    /**
     * 是否需要退出
     * */
    private static Boolean isQuit = false;


    /**
     * 学生管理系统主程序
     * */

    public static void main(String[] args) {
        System.out.println("欢迎进入学生管理系统");
        for (int i = 0; i < tipArr.length; i++) {
            System.out.println((i + 1) + "." + tipArr[i]);
        }
        System.out.println("请选择[1-" + tipArr.length + "]");

        while (!isQuit) {
            Scanner scanner = new Scanner(System.in);
            int number = scanner.nextInt();
            switch (number) {
                case 1:
                    System.out.println(tipArr[number - 1]);
                    addStudent();
                    break;

                case 2:
                    System.out.println(tipArr[number - 1]);
                    deleteStudent();
                    break;
                case 3:
                    System.out.println(tipArr[number - 1]);
                    updateStudents();
                    break;
                case 4:
                    System.out.println(tipArr[number - 1]);
                    findStudent();
                    break;
                case 5:
                    isQuit = true;
                    break;
                default:
                    throw new IllegalStateException("Unexpected value: " + number);
            }
        }

    }

   /**
    * 判断学生是否存在
    * */
    public static Student getStudentById(String studentId) {
        return getStudentById(studentId, false);
    }


    /**
     * 判断学生是否存在
     * */
    public static Student getStudentById(String studentId, Boolean isDelete) {
        for (int i = 0; i < students.size(); i++) {
            if (students.get(i).getStudentNumber().equals(studentId)) {
               if (isDelete) {
                   return students.remove(i);
               }
                return students.get(i);
            }
        }
        return null;
    }

    /**
     * 添加学生
     * */
    public static void addStudent() {
        Scanner scanner = new Scanner(System.in);

        System.out.println("请输入学生的学号");
        String studentNumber = scanner.nextLine();

        Student student = getStudentById(studentNumber);

        if (student != null) {
            System.out.println("该学号已被" + student.getStudentName() + "占用");
            return;
        }
        System.out.println("请输入学生的姓名");
        String studentName = scanner.nextLine();
        System.out.println("请输入学生的地址");
        String studentAddress = scanner.nextLine();
        System.out.println("请输入学生的年龄");
        Integer studentAge = scanner.nextInt();

        students.add(new Student(studentNumber, studentName, studentAge, studentAddress ));
        System.out.println("Student 添加完成");
    }

    /**
     * 查询学生
     * */
    public static void findStudent() {
        if (students.size() == 0) {
            System.out.println("没有学生数据");
            return;
        }
        System.out.println("学号\t姓名\t年龄\t地址\t");
        for (int i = 0; i < students.size(); i++) {
            Student student = students.get(i);
            System.out.println(student.getStudentNumber() + "\t" + student.getStudentName() + "\t" + student.getStudentAge() + "\t" + student.getStudentAddress());
        }
    }

    /**
     * 删除学生
     * */
    public static void deleteStudent() {
        Scanner scanner = new Scanner(System.in);

        System.out.println("请输入要删除学生的学号");
        String studentId = scanner.nextLine();

        Student student = getStudentById(studentId, true);

        System.out.println(student == null ? "没有找到学号为：" + studentId + "的学生" : "删除学号为：" + studentId + "的学生成功");
    }

    /**
     * 修改学生
     * */
    public static void updateStudents() {
        Scanner scanner = new Scanner(System.in);

        System.out.println("请输入要修改的学生的学号");
        String studentId = scanner.nextLine();

        Student student = getStudentById(studentId);

        if(student == null) {
            System.out.println("无法查找到学号为："+ studentId +"的学生");
            return;
        }
        System.out.println("请输入修改的学生姓名");
        String studentName = scanner.nextLine();
        student.setStudentName(studentName);
        System.out.println("请输入修改的学生地址");
        String studentAddress = scanner.nextLine();
        student.setStudentAddress(studentAddress);
        System.out.println("请输入修改的学生年龄");
        Integer studentAge = scanner.nextInt();
        student.setStudentAge(studentAge);
        System.out.println("修改学生信息成功");
    }
}
