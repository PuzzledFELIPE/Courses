import domain.User;

import java.util.Optional;

import static domain.SexEnum.FEMALE;
import static domain.SexEnum.MALE;

public class Main {

    public static void main(String[] args){
        Optional<User> optional = Optional.of(new User("João", 18, MALE));
        //<User> optional = Optional.empty();

        optional.ifPresentOrElse(
                user -> System.out.printf("Usuário :%s \n", user),
                () -> System.out.println("Não foi informado um usuário")
        );

        System.out.println(optional.orElse(new User("Maria", 22, FEMALE)));
    }
}