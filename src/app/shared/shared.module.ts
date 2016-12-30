import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BusyModule } from 'angular2-busy';


import { PaginationComponent } from './pagination/pagination.component';
import { TruncatePipe } from './truncate/truncate.pipe';
import { StringifyPipe } from './stringify/stringify.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BusyModule
  ],
  declarations: [
    PaginationComponent,
    TruncatePipe,
    StringifyPipe
  ],
  exports: [
    CommonModule,
    RouterModule,
    PaginationComponent,
    TruncatePipe,
    StringifyPipe,
    BusyModule
  ]
})
export class SharedModule { }
