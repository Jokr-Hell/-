package com.mitu.Hello;

public class MakeOne {
    public static void main(String[] args) {
        Student s1 = new Student("joe",12,56);
        System.out.println(s1.getScore());
    }
}

class Person {
    protected String name;
    protected int age;
//
//    public Person(){
//    }

    //    public Person(String name,int age){
//        this.name = name;
//        this.age = age;
//    }
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
}
class Student extends Person{
    protected double score;

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
}
