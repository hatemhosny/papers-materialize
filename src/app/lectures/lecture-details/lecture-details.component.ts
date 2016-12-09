import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-lecture-details',
  templateUrl: './lecture-details.component.html',
  styleUrls: ['./lecture-details.component.scss']
})
export class LectureDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('ul.tabs').tabs('select_tab', 'Lecture');
 }

}
