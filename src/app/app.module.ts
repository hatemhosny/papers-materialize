import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { LectureModule } from './lectures/lecture.module';
import { LectureService } from './lectures/lecture.service';
import { ArticleModule } from './articles/article.module';
import { ArticleService } from './articles/article.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookmarksModule } from './bookmarks/bookmarks.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LayoutModule,
    LectureModule,
    ArticleModule,
    BookmarksModule,
    RouterModule.forRoot([
     { path: 'home', component: HomeComponent },
     { path: '', redirectTo: 'home', pathMatch: 'full' },
     { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [ LectureService, ArticleService ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      window.scrollTo(0, 0);
    });
  }

 }
