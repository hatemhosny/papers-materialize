import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LectureListComponent } from './lectures/lecture-list/lecture-list.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { ContentComponent } from './layout/content/content.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { LectureItemComponent } from './lectures/lecture-item/lecture-item.component';
import { LectureDetailsComponent } from './lectures/lecture-details/lecture-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LectureListComponent,
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    ContentComponent,
    PaginationComponent,
    LectureItemComponent,
    LectureDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
