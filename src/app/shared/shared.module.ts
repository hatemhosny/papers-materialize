import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng2PaginationModule } from 'ng2-pagination';
import { SortablejsModule } from 'angular-sortablejs';

import { TruncatePipe } from './truncate/truncate.pipe';
import { StringifyPipe } from './stringify/stringify.pipe';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    Ng2PaginationModule
  ],
  declarations: [
    TruncatePipe,
    StringifyPipe,
    PaginationComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    TruncatePipe,
    StringifyPipe,
    PaginationComponent,
    Ng2PaginationModule,
    SortablejsModule
  ]
})
export class SharedModule { }
