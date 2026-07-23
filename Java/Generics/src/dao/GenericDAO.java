package dao;

import domain.GenericDomain;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;

public abstract class GenericDAO<ID, T extends GenericDomain<ID>>{

    private final List<T> db = new ArrayList<>();

    //salvar fonte de dados
    public T save(T domain){
        db.add(domain);
        return domain;
    }

    //atualiza a base de dados removendo o que está la e adicionando o novo domain
    public T update(ID id, T domain){
        var stored = db.stream().filter(d -> d.getId().equals(id)) //
                .findFirst().orElseThrow();
        db.remove(stored);
        return save(domain);
    }

    //remove o databse atual
    public boolean delete(T domain){
        return db.remove(domain);
    }

    public Optional<T> find(Predicate<T> filterCallBack){
        return db.stream().filter(filterCallBack).findFirst();
    }

    public List<T> findAll(){
        return db;
    }

    public int count(){
        return db.size();
    }
}
