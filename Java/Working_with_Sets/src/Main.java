import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

public class Main {

    public static void main(String[] args){

        Set<User> users = new LinkedHashSet<>();
        users.add(new User(1, "Jão"));
        users.add(new User(2, "Maria"));
        users.add(new User(3, "Juca"));
        users.add(new User(4 , "Leo"));

        System.out.println(users.contains(new User(1, "Jão")));

        users.forEach(System.out::println);
    }
}