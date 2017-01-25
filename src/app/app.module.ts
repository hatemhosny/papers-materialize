import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { LectureModule } from './lectures/lecture.module';
import { LectureService } from './lectures/lecture.service';
import { ArticleModule } from './articles/article.module';
import { ArticleService } from './articles/article.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoadingService } from './shared/loading/loading.service';
import { NotificationService } from './shared/notification/notification.service';
import { LogService } from './shared/log/log.service';


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
    RouterModule.forRoot([
     { path: '', component: HomeComponent },
     { path: 'bookmarks', loadChildren: './bookmarks/bookmarks.module#BookmarksModule' }, // lazy loaded
     { path: 'playlists', loadChildren: './playlists/playlists.module#PlaylistsModule' }, // lazy loaded
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
     { path: '**', component: PageNotFoundComponent }
    ],
    {preloadingStrategy: PreloadAllModules}
    )
  ],
  providers: [
    LectureService,
    ArticleService,
    LoadingService,
    NotificationService,
    LogService,
    { provide: ErrorHandler, useExisting: LogService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      window.scrollTo(0, 0);
    });
  }

 }
