import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-lecture-item',
  templateUrl: './lecture-item.component.html',
  styleUrls: ['./lecture-item.component.scss']
})
export class LectureItemComponent implements OnInit, AfterViewInit {

  @Input() item: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('.dropdown-button').dropdown({
          inDuration: 300,
          outDuration: 225,
          constrain_width: false, // Does not change width of dropdown to that of the activator
          hover: true, // Activate on hover
          gutter: 0, // Spacing from edge
          belowOrigin: false, // Displays dropdown below the button
          alignment: 'left' // Displays dropdown with edge aligned to the left of button
        }
      );
  }


}
