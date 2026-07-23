import dao.GenericDAO;
import dao.UserDAO;
import domain.UserDomain;

public class Main {

    private final static GenericDAO<Integer, UserDomain> dao = new UserDAO();

    public static void main(String[] args){
        var user = new UserDomain("João", 36);
        System.out.println(dao.count());
        System.out.println(dao.save(user));
        System.out.println(dao.findAll());
        System.out.println(dao.find(d -> d.getID());
        System.out.println(dao.count());
        dao.delete(new UserDomain("", -1));
        dao.delete(user);
        System.out.println(dao.findAll());
        System.out.println(dao.count());


    }
}