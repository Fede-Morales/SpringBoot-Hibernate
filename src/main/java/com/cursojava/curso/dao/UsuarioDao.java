package com.cursojava.curso.dao;

import com.cursojava.curso.models.Usuario;

import java.util.List;

public interface UsuarioDao {

    List<Usuario> getUsuarios();

    void deleteUsser(Long id);

    void registerUsser(Usuario usuario);

    Usuario obtenerUsuario(Usuario usuario);

}
