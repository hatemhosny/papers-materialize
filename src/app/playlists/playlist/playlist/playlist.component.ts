import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  items = [1, 2, 3, 4, 5];
  sortablejsOptions = {
        // handle: '.drag-handle',
        // draggable: '.collection-item',
        animation: 150
  };

  constructor() { }

  ngOnInit() {
  }


}
