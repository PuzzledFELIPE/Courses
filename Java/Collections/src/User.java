import java.util.Objects;

public class User {
    private String name;

    private int code;

    public User() {
    }

    public User(String name, int code) {
        this.name = name;
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    @Override
    public boolean equals(Object obj) {
        var isEqual = false;
        if (obj instanceof User user){
            if (this == user) isEqual = true;
            if (this.code == user.code && Objects.equals(this.name  , user.name)) isEqual = true;
        }
        return isEqual;
    }

    @Override
    public String toString() {
        return String.format("{ 'code': %s, 'name': %s}", this.code, this.name);
    }
}
