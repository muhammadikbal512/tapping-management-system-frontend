import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layout/default/default.module';
import { NotificationService } from './modules/services/notification-service/notification.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { StateConfigurationModule } from './state-configuration/state-configuration.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    DefaultModule,
    ButtonModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    ToastModule,
    RippleModule,
    StateConfigurationModule,
    
  ],
  providers: [NotificationService, MessageService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
