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
        eid: 'rodrigo.dos.a.santos',
        cl: 11,
        favorited: false
      },
      {
        nome: 'Rodolfo Almeida',
        eid: 'rodolfo.almeida',
        cl: 11,
        favorited: true
      },
      {
        nome: 'Marcelo Galvão',
        eid: 'marcelo.galvao',
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
  deleteUser(eid) {
    this.array =  this.usuarios.filter( function( elem, index, arr ) {
      return elem.eid !== eid;
    });
    this.usuarios = this.array;
    return this.usuarios;
  }

}
