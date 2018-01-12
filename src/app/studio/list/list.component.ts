import { Component, OnInit } from '@angular/core';

import { StudioService } from './../studio.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'lista-studio',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  usuarios;
  uniqueArray = [];

  constructor(private _studioService: StudioService) {}

  ngOnInit() {
    this.usuarios = this._studioService.getDadosUsuarios();
  }

  deleteUser(pid) {
    this.usuarios = this._studioService.deleteUser(pid);
  }

  favoriteUser(usuario) {
    const pid = usuario.pid;
    this._studioService.favoriteUser(pid);
  }

}
