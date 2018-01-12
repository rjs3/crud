import { Injectable } from '@angular/core';

@Injectable()
export class StudioService {
  usuarios = [];
  array = [];

  constructor() {}

  // Retorna os usuarios cadastrados
  getDadosUsuarios() {
    return this.usuarios = [
      {
        nome: 'Rodrigo Santos',
        pid: '11100120',
        cl: 11,
        favorited: false
      },
      {
        nome: 'Rodolfo Almeida',
        pid: '11102011',
        cl: 11,
        favorited: true
      },
      {
        nome: 'Marcelo Galvão',
        pid: '20102010',
        cl: 10,
        favorited: false
      }
    ];
  }

  // Insere o usuario no inicio do array
  insertNewUser(usuario) {
    this.usuarios.unshift(usuario);
  }

  // Deleta o usuario do array baseado na lista de Usuarios
  deleteUser(pid) {
    this.array =  this.usuarios.filter( function( elem, index, arr ) {
      return elem.pid !== pid;
    });
    this.usuarios = this.array;
    return this.usuarios;
  }

  // Favorita um usuario
  favoriteUser(pid) {
    const arrAux = this.usuarios.filter( function( elem, index, arr ) {
      if (elem.pid === pid) {
        elem.favorited = !elem.favorited;
      }
    });
    return arrAux;
  }

}
