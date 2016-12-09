import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './lecture-list.component.html',
  styleUrls: ['./lecture-list.component.scss']
})
export class LectureListComponent implements OnInit {

  items: number[] = [1, 2, 3, 4];

  constructor() { }

  ngOnInit() {
  }

}
