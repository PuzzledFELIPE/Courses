public class User {

    private static String name = "";

    public User(String name){
        User.name = name;
    }

    public static String getName() {
        return name;
    }
}
