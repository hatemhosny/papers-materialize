import { Component, OnInit } from '@angular/core';

import { LectureService } from './../lecture.service';

@Component({
  templateUrl: './lecture-list.component.html',
  styleUrls: ['./lecture-list.component.scss']
})
export class LectureListComponent implements OnInit {

  items;

  constructor(private _lectureService: LectureService) { }

  ngOnInit() {
    this.items = this._lectureService.getLectures();
  }

}
