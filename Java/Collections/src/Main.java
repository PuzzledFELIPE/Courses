import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class Main{

    public static void main(String[] args){
        /*int[] codes = { 789, 852};
        System.out.println(codes.length);
        //System.out.println(codes[0]);
        //System.out.println(codes[1]);
        List <Integer> test  = new ArrayList<>(); //-> Declaração de List
        test.add(codes[0]);
        test.add(codes[1]);
        test.forEach(System.out::println);*/

        List <User> users  = new ArrayList<>();
        var user = new User("Jão", 1);
        users.add(user);
        users.add(new User("Maria", 2));
        users.add(new User("Leo", 3));
        System.out.println(users.contains(user)); // -> Retorna true se contém o valor passado e false se n
        System.out.println(users.size()); // --> Retorna tamanho
        System.out.println(users.isEmpty()); // --> verifica se a lista está vazia
        System.out.println(users.getFirst()); // --> Antes do Java 21 era System.out.println(users.get(0));
        System.out.println(users.getLast()); // --> Antes do Java 21 era System.out.println(users.get(users.size()-1));

        System.out.println(users.contains(new User("Jão", 1)));

    }
}