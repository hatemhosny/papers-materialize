import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
