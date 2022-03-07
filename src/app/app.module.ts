import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider'
import { NgxEchartsModule } from 'ngx-echarts';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './layout/default/default.component';
import { LoginComponent } from './modules/module/login/login.component';
import { DashboardComponent } from './modules/module/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransactionComponent } from './modules/module/transaction/transaction.component';
import { AlertAnalysisComponent } from './modules/module/investigation/alert-analysis/alert-analysis.component';
import { AlertComponent } from './modules/module/acquirer/alert/alert.component';
import { TerminalListComponent } from './modules/module/acquirer/terminal-list/terminal-list.component';
import { JsonConfigurationComponent } from './modules/module/external-interface/json-configuration/json-configuration.component';
import { Iso20022Component } from './modules/module/external-interface/iso20022/iso20022.component';
import { XmlConfigurationComponent } from './modules/module/external-interface/xml-configuration/xml-configuration.component';
import { NdcComponent } from './modules/module/external-interface/ndc/ndc.component';
import { Iso8583configurationComponent } from './modules/module/external-interface/iso8583configuration/iso8583configuration.component';
import { InterfaceComponent } from './modules/module/transaction/interface/interface.component';
import { WidgetTransactionComponent } from './modules/module/transaction/widget-transaction/widget-transaction.component';
import { PrivateSchemeComponent } from './modules/module/user-management/private-scheme/private-scheme.component';
import { RolesComponent } from './modules/module/user-management/roles/roles.component';
import { UserComponent } from './modules/module/user-management/user/user.component';
import { TransactionRateComponent } from './modules/module/dashboard/transaction-rate/transaction-rate.component';
import { TerminalComponent } from './modules/module/terminal-configuration/terminal/terminal.component';




@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,

    LoginComponent,
    DashboardComponent,
    TransactionComponent,
    AlertAnalysisComponent,
    AlertComponent,
    TerminalListComponent,
    JsonConfigurationComponent,
    Iso20022Component,
    XmlConfigurationComponent,
    NdcComponent,
    Iso8583configurationComponent,
    InterfaceComponent,
    WidgetTransactionComponent,
    PrivateSchemeComponent,
    RolesComponent,
    UserComponent,
    TransactionRateComponent,
    TerminalComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
