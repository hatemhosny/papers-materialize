import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'ng2-sidebar';

import { AppComponent } from './app.component';
import { LectureListComponent } from './lectures/lecture-list/lecture-list.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { ContentComponent } from './layout/content/content.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { LectureItemComponent } from './lectures/lecture-item/lecture-item.component';
import { LectureDetailsComponent } from './lectures/lecture-details/lecture-details.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    LectureDetailsComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SidebarModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
     { path: 'home', component: HomeComponent },
     { path: 'lectures', component: LectureListComponent },
     { path: 'lecture/:id', component: LectureDetailsComponent },
     { path: 'about', component: LectureListComponent },
     { path: '', redirectTo: 'home', pathMatch: 'full' },
     { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
