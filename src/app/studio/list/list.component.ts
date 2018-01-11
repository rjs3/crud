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

  deleteUser(eid) {
    this.usuarios = this._studioService.deleteUser(eid);
  }

}
