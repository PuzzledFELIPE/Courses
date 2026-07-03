import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        /*código usado de teste na aula "Criando a primeira classe"
        var male = new Person("João");
        var female = new Person("Maria");
        System.out.println("Male name: " + male.getName() + " age: " + male.getAge());
        System.out.println("Female name: " + female.getName() + " age: " + female.getAge());
        */

        var person = new PersonRecord("João");
        System.out.println(person.getInfo());
        System.out.println(person.name());
    }
}
