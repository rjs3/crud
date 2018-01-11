import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListComponent } from './list/list.component';
import { StudioComponent } from './studio.component';
import { FormNewUserComponent } from './form-new-user/form-new-user.component';

import { StudioService } from './studio.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ListComponent, StudioComponent, FormNewUserComponent],
  exports: [ListComponent, StudioComponent],
  providers: [StudioService]
})
export class StudioModule { }
