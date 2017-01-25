import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BookmarksComponent } from './bookmarks.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
     { path: '', component: BookmarksComponent }
    ])
  ],
  declarations: [
    BookmarksComponent
  ],
  exports: [
    BookmarksComponent
  ]
})
export class BookmarksModule { }
