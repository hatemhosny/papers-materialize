import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() sidebar;

  constructor() { }

  ngOnInit() {

    $('.button-collapse').sideNav({
      closeOnClick: true,
      draggable: true
    });

  }

}
