import domain.Contact;
import domain.ContactType;
import domain.User;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;


import static domain.ContactType.EMAIL;
import static domain.ContactType.PHONE;
import static domain.Sex.FEMALE;
import static domain.Sex.MALE;

public class Main {

    public static void main(String[] args){
        /*var value1 = Stream.generate(() -> new Random().nextInt())
                .limit(5)
                .toArray(Integer[]:: new);

        for(var v: value1){
            System.out.println(v);
        }
        System.out.println("===============Os dois códigos fazem o mesmo==============");

        var value2 = IntStream.generate(() -> new Random().nextInt())
                .limit(5)
                .toArray(); // não precisei declarar o tipo da array

        for(var v: value1){
            System.out.println(v);
        }*/

        //filtro
        /*var value = Stream.of("Maria", "João", "Marcio", "Luana", "Leandro", "Marcia")
                .filter(name -> name.endsWith("o")).toList();
        System.out.println(value);*/

        //exemplo de interação de listas através de filtros e mapeamento conforme regra estabelecida
        /*List<Integer> values1 = List.of(3, 6, 9, 12);
        List<Integer> values2 = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);

        var newValues  = values2.stream()
                .filter(values1::contains)//filtra valores de 2 conforme 1
                .peek(n -> System.out.printf("Filter %s \n", n))
                .map(n -> values1.stream().reduce(n, (n1, n2) -> n1 - n2))
                //mapeia fazendo subtração de um com o próximo até o último
                .peek(n -> System.out.printf("Map %s \n", n))
                .collect(Collectors.toSet());//Coleta os valores e gera um set com eles
        System.out.println(newValues);*/

        //exemplo de possível aplicação de filtros
        /*var values = users.stream()
                .flatMap(u -> u.contacts().stream())
                .sorted(Comparator.comparing(Contact::description))
                .map(c -> String.format("{\n'description': '%s',\n 'type': '%s'\n}", c.description(), c.type()))
                .toList();*/

        List<User> users = new ArrayList<>(generateUsers());
        
        var values = users.stream().filter(u -> u.sex() == FEMALE).collect(Collectors.toMap(User::name, user -> user));

        values.forEach((key, value) ->  System.out.printf("key: %s | value %s \n", key, value));

    }

    private static List<User> generateUsers(){
        var contacts1 = List.of(
                new Contact("(19)90665-8104", PHONE),
                new Contact("joao@gmail.com", EMAIL)
        );
        var contacts2 = List.of(
                new Contact("(21)92121-0032", PHONE)
        );
        var contacts3 = List.of(
                new Contact("lucas@outlook.com", EMAIL)
        );
        var contacts4 = List.of(
                new Contact("andreia@outlook.com", EMAIL),
                new Contact("andreia@gmail.com", EMAIL)
        );
        var contacts5 = List.of(
                new Contact("(31)97785-4456", PHONE),
                new Contact("(31)92115-0011", PHONE)
        );

        var user1 = new User("João", 26, MALE, new ArrayList<>(contacts1));
        var user2 = new User("Maria", 28, FEMALE, new ArrayList<>(contacts2));
        var user3 = new User("Lucas", 19, MALE, new ArrayList<>(contacts3));
        var user4 = new User("Andreia", 40, FEMALE, new ArrayList<>(contacts4));
        var user5 = new User("Vitor", 30, MALE, new ArrayList<>(contacts5));
        var user6 = new User("Bruna", 36, FEMALE, new ArrayList<>());

        return List.of(user1, user2, user3, user4, user5);
    }
}