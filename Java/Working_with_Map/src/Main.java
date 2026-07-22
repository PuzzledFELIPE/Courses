import Domain.User;

import java.util.HashMap;
import java.util.Map;

public class Main {

    public static void main(String[] args){
        Map<String, User> users = new HashMap<>();
        users.put("joao@joao.com", new User("João", 22));
        users.put("maria@maria.com", new User("Maria", 32));
        users.put("juca@juca.com", new User("Juca", 18));
        users.put("leo@leo.com", new User("Leo", 40));

        users.forEach((k, v) -> System.out.printf("key: %s | value: %s \n", k, v));
        users.replace("joao@joao.com", new User("João", 60));
        users.forEach((k, v) -> System.out.printf("key: %s | value: %s \n", k, v));

    }
}