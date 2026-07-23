package domain;

import dao.GenericDAO;

import java.util.Objects;

public class UserDomain extends GenericDAO {

    private String name;

    private int age;

    public UserDomain(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public UserDomain() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        UserDomain that = (UserDomain) o;
        return age == that.age && Objects.equals(name, that.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}
