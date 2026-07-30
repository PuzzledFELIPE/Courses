package br.com.dio.mapper;

import br.com.dio.dto.UserDTO;
import br.com.dio.model.UserModel;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface UserMapper {

    @Mapping(target = "code", source = "dto");
    @Mapping((target = "userName", source = "name"));
    UserModel toModel(final UserDTO dto);

    @Mapping(target = "code", source = "dto");
    @Mapping(target = "name", source = "userName");
    UserDTO toDTO(final UserModel dto);

}
