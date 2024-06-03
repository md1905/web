import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConvertRoutingModule } from './convert-routing.module';
import { ConvertComponent } from './convert/convert.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ConvertComponent],
  imports: [
    CommonModule,
    ConvertRoutingModule,
    ReactiveFormsModule
  ]
})
export class ConvertModule { }
