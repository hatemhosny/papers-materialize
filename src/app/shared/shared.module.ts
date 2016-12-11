import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PaginationComponent } from './pagination/pagination.component';
import { TruncatePipe } from './truncate/truncate.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PaginationComponent,
    TruncatePipe
  ],
  exports: [
    CommonModule,
    RouterModule,
    PaginationComponent,
    TruncatePipe
  ]
})
export class SharedModule { }
