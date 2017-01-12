import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-lecture-details',
  templateUrl: './lecture-details.component.html',
  styleUrls: ['./lecture-details.component.scss']
})
export class LectureDetailsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
 }

  ngAfterViewInit() {
    $('ul.tabs').tabs();
  }

}
