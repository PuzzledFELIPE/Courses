public record PersonRecord(String name, int age){

    public PersonRecord{

    }

    public PersonRecord(String name){
        this(name, 1);
    }

    public String getInfo(){
        return "Name: " + name + " age: " + age;
    }
}
