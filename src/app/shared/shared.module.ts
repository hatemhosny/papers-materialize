import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PaginationComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    PaginationComponent
  ]
})
export class SharedModule { }
