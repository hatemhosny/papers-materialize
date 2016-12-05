import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarModule } from 'ng2-sidebar';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
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
