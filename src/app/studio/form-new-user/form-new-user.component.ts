import { Component, OnInit } from '@angular/core';

import { StudioService } from './../studio.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-new-user',
  templateUrl: './form-new-user.component.html',
  styleUrls: ['./form-new-user.component.css']
})
export class FormNewUserComponent implements OnInit {
  showForm = false;
  usuario;

  constructor(private _studioService: StudioService) {}

  ngOnInit() {}

  inserirUsuario(form) {
    this.usuario = form.value;
    this._studioService.insertNewUser(this.usuario);
    form.reset();
  }

  clearForm(form) {
    form.reset();
  }
}
