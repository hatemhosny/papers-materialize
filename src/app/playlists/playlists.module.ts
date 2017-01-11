import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';

import { PlaylistsComponent } from './playlists/playlists/playlists.component';
import { PlaylistComponent } from './playlist/playlist/playlist.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
     { path: 'playlists', component: PlaylistsComponent },
     { path: 'playlists/:id', component: PlaylistComponent }
    ])
  ],
  declarations: [PlaylistsComponent, PlaylistComponent]
})
export class PlaylistsModule { }
