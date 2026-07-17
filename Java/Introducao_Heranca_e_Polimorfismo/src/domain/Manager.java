package domain;

public non-sealed class Manager extends Employee{

    private String login;

    private String password;

    private double comission;

    private double salary;

    public Manager(String code, String name, String address, int age, double salary, double comission,
                   String login, String password) {
        super(code, name, address, age, salary);
        this.login = login;
        this.comission = comission;
        this.password = password;
    }

    public String getCode(){
        return "MN" + super.getCode();
    }

    @Override
    public double getFullSalary() {
        return this.salary + this.comission;
    }


    public Manager(){

    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public double getComission() {
        return comission;
    }

    public void setComission(double comission) {
        this.comission = comission;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public double getFullSalary(double extra){
        return this.salary + extra;
    }
}
