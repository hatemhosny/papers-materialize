import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng2PaginationModule } from 'ng2-pagination';

import { PaginationComponent } from './pagination/pagination.component';
import { TruncatePipe } from './truncate/truncate.pipe';
import { StringifyPipe } from './stringify/stringify.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    Ng2PaginationModule
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
    Ng2PaginationModule
  ]
})
export class SharedModule { }
