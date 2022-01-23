package mystudy;

/**
 * 名称: mystudy  MakeOne
 * 创建者: mitu-x
 * 创建时间:2022/1/23 18:36
 * 描述: 面向对象编程的基本概念 继承 构造方法 多态 抽象 等等
 **/

/*
 * 面向对象编程的基本概念 继承 构造方法 多态 抽象 等等
 */

public final class MakeOne {
    public static void main(String[] args) {
        Student s1 = new Student("joe",12,56);
        System.out.println(s1.getScore());


        /*
        向上转型 upcasting

        Student继承自Person，因此，它拥有Person的全部功能。Person类型的变量，
         如果指向Student类型的实例，对它进行操作，是没有问题的！
        */
        Student s2 = new Student();
        Person p1 = new Student();

        /*
        向下转型 downcasting

        即是，需要一个Student类型 s3  ，但是给的类型是Person，
        不能把父类变为子类，因为子类功能比父类多，多的功能无法凭空变出来。
        因此，向下转型很可能会失败。失败的时候，Java虚拟机会报ClassCastException
        */
        //Student s3 = new Person();


        // 多态 Polymorphic

        //p1是一个向上的转型，那么run调用的是student的方法
        p1.run();
        s2.run(2);

        s2.run2();



    }
}

/*
* 继承
*
* */

// Person 父类
class Person {

    //定义person的名字和年纪
    protected String name;
    protected int age;


    /*
    两种构造方法

    public Person(){
    }
    public Person(String name,int age){
        this.name = name;
        this.age = age;
    }
*/

    // 封装name和age的设置和取出
    public void setName(String name){
        this.name = name;
    }
    public String getName(){
        return name;
    }

    public void setAge(int age) {
        this.age = age;
    }
    public int getAge(){
        return age;
    }

    public void run(){
        System.out.println("Person.run");
    }

    public final void newRun() {
        System.out.println("带final关键字的方法，不能被覆写");
    }

}

//子类
class Student extends Person{
    protected double score;

    public Student(){

    }

    //带参数的构造方法
    public Student(String name,int age,double score){
//        this.name = name;
//        this.age = age;
        this.score = score;
    }

    public void setScore(double score) {
        this.score = score;
    }

    public double getScore() {
        return score;
    }

    //覆写父类的run方法
    //且父类中的run方法 必须存在，否则报错，只有这样才是多态和覆写
    @Override
    public void run(){

        System.out.println("Student.run");
        System.out.println(score);
    }
    //重载父类run方法
    //带入的参数不同
    public void run(int a){
        System.out.println("overload.run"+a);
    }

    //调用父类的被覆写的方法，用super()。例如run()方法
    public void run2(){
        System.out.println("super");
        super.run();
        System.out.println("END");
    }

    /*
    带final关键字的方法，不能被覆写

    同理，带final 关键字的类  不能被继承
    一个类中 带final 关键字 的实例字段，初始化后 不能被 修改

    @Override
    public void newRun(){

    }
    */
}

/*
* 抽象方法 abstract
*
* 为了实现覆写，一般会在父类中使用抽象方法
* 以便于子类覆写，本身没有什么实际意义
* 因为这个抽象方法本身是无法执行的，所以，
* Person类也无法被实例化,抽象方法也不能有实现语句
*
*/
abstract class School{
    public abstract void go();
}
class linXi extends School{

    // 抽象类无法实例化，除非立马覆写方法
    //School sl1 = new School();
    School sl1 = new School() {
        @Override
        public void go() {

        }
    };

    //继承抽象类  需要本身是抽象类 或者 覆写抽象类中的抽象方法
    @Override
    public void go(){
        System.out.println("抽象方法覆写");
    }
}


/*
* 继承树
*
* 使用sealed 和 permits 定义一个继承树 ，
* 只有在继承树内的类才能继承，也必须继承
*
* */

sealed class Fruit permits Apple, Banana {

}
//在Fruit继承树种，可以继承
final class Apple extends Fruit{

}
final class  Banana extends Fruit{}
/*
因为没有被Fruit permits，不在Fruit继承树 ，所以 不能继承
final class Orange extends Fruit{}
*/


/*
* 接口
*
* 在抽象类中，抽象方法本质上是定义接口规范：即规定高层类的接口，
* 从而保证所有子类都有相同的接口实现，这样，多态就能发挥出威力。
* 如果一个抽象类没有字段，所有方法全部都是抽象方法
* 就可以把该抽象类改写为接口：interface。
* 在Java中，使用interface可以声明一个接口
*
* 所谓interface，就是比抽象类还要抽象的纯抽象接口，
* 因为它连字段都不能有。
* 因为接口定义的所有方法默认都是public abstract的，
* 所以这两个修饰符不需要写出来（写不写效果都一样）。
* 当一个具体的class去实现一个interface时，
* 需要使用implements关键字。
*
* */

//声明一个接口Book
interface Book{
    String getName();
}

//声明一个接口Author
interface Author{
    String getList();
}

//接口可以继承
interface MainAuthor extends Author{

}

//用具体的类MathBook去实现Book接口
class MathBook implements Book{
    private String name;

    //构造方法，传参name
    public MathBook(String name){
        this.name = name;
    }

    //覆写接口的抽象方法
    @Override
    public String getName() {
        return this.name;
    }
}

//一个类可以实现多个interface
class HistoryBook implements Book ,Author{

    private String name;

    //构造方法，传参name
    public HistoryBook(String name){
        this.name = name;
    }

    //覆写Book接口的方法
    @Override
    public String getName() {
        return null;
    }

    //覆写Author接口的方法
    @Override
    public String getList() {
        return null;
    }
}

//在接口中，可以定义default方法
interface Classmate{
    String getName();
    default void run() {
        System.out.println(getName() + " run");
    }
}
/*
* 实现类可以不必覆写default方法。
* default方法的目的是，当我们需要给接口新增一个方法时，
* 会涉及到修改全部子类。如果新增的是default方法，那么子类就不必全部修改，
* 只需要在需要覆写的地方去覆写新增方法。
* default方法和抽象类的普通方法是有所不同的。
* 因为interface没有字段，default方法无法访问字段，
* 而抽象类的普通方法可以访问实例字段。
* */
class Wang implements Classmate{
    @Override
    public String getName() {
        return null;
    }
    @Override
    public void run(){
    }
}












