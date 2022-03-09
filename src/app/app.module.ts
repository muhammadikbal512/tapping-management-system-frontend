import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';
import { HttpClientModule} from '@angular/common/http'
import { MaterialModule } from './modules/material/material.module';
import 'flowbite';

import { MatFormFieldModule } from '@angular/material/form-field'

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
import { PrivateSchemeComponent } from './modules/module/user-management/private-scheme/private-scheme.component';
import { RolesComponent } from './modules/module/user-management/roles/roles.component';
import { UserComponent } from './modules/module/user-management/user/user.component';
import { TransactionRateComponent } from './modules/module/dashboard/transaction-rate/transaction-rate.component';
import { TerminalComponent } from './modules/module/terminal-configuration/terminal/terminal.component';
import { ArpComponent } from './modules/module/system/application-parameters/arp/arp.component';
import { SystemParametersComponent } from './modules/module/system/system-parameters/system-parameters.component';
import { CreateUpdateDialogComponent } from './modules/module/system/system-parameters/create-update-dialog/create-update-dialog.component';
import { TransactionStatusComponent } from './modules/module/dashboard/transaction-status/transaction-status.component';
import { DatePickerComponent } from './modules/module/transaction/widget-transaction/date-picker/date-picker.component';
import { TableComponent } from './modules/module/transaction/widget-transaction/table/table.component';
import { FormsTransactionComponent } from './modules/module/transaction/forms-transaction/forms-transaction.component';
import { TransactionSummaryComponent } from './modules/module/transaction/transaction-summary/transaction-summary.component';





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
    PrivateSchemeComponent,
    RolesComponent,
    UserComponent,
    TransactionRateComponent,
    TerminalComponent,
    ArpComponent,
    SystemParametersComponent,
    CreateUpdateDialogComponent,
    TransactionStatusComponent,
    DatePickerComponent,
    TableComponent,
    FormsTransactionComponent,
    TransactionSummaryComponent
    
    
  ],
  entryComponents: [FormsTransactionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxEchartsModule,
    HttpClientModule,
    MatFormFieldModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
