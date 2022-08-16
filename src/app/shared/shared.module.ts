import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderService } from '../modules/services/shared-service/header.service';
import { SidebarService } from '../modules/services/shared-service/sidebar.service';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, FooterComponent],
  exports: [HeaderComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MatDividerModule,
    BadgeModule,
  ],
  providers: [HeaderService, SidebarService],
})
export class SharedModule {}
