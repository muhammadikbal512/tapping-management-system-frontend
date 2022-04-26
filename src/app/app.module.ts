import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxEchartsModule } from 'ngx-echarts';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './modules/material/material.module';
import { StateConfigurationModule } from './state-configuration/state-configuration.module';
import 'flowbite';

import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PasswordModule } from 'primeng/password';
import { TagModule } from 'primeng/tag';

import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './layout/default/default.component';
import { LoginComponent } from './modules/module/login/login.component';
import { DashboardComponent } from './modules/module/dashboard/dashboard.component';
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
import { Iso8583FormatComponent } from './modules/module/message-format/iso8583-format/iso8583-format.component';
import { Iso8583FormatTableComponent } from './modules/module/message-format/iso8583-format/widget/iso8583-format-table/iso8583-format-table.component';
import { CreateUpdateDialogIso8583FormatTableComponent } from './modules/module/message-format/iso8583-format/widget/create-update-dialog-iso8583-format-table/create-update-dialog-iso8583-format-table.component';
import { ActionButtonGroupIso8583FormatComponent } from './modules/module/message-format/iso8583-format/widget/action-button-group-iso8583-format/action-button-group-iso8583-format.component';
import { ChannelComponent } from './modules/module/channel-configuration/channel/channel.component';
import { ChannelTypeComponent } from './modules/module/channel-configuration/channel-type/channel-type.component';
import { ChannelTableComponent } from './modules/module/channel-configuration/channel/widget/channel-table/channel-table.component';
import { ActionButtonGroupTerminalComponent } from './modules/module/channel-configuration/channel/widget/action-button-group-terminal/action-button-group-terminal.component';
import { ChannelTypeTableComponent } from './modules/module/channel-configuration/channel-type/widget/channel-type-table/channel-type-table.component';
import { ActionButtonGroupChannelTypeComponent } from './modules/module/channel-configuration/channel-type/widget/action-button-group-channel-type/action-button-group-channel-type.component';
import { Iso8583DialectComponent } from './modules/module/external-interface/iso8583configuration/iso8583-dialect/iso8583-dialect.component';
import { Iso8583FieldConfigurationComponent } from './modules/module/external-interface/iso8583configuration/iso8583-field-configuration/iso8583-field-configuration.component';
import { Iso8583ResponseMappingComponent } from './modules/module/external-interface/iso8583configuration/iso8583-response-mapping/iso8583-response-mapping.component';
import { Iso8583DialectTableComponent } from './modules/module/external-interface/iso8583configuration/iso8583-dialect/widget/iso8583-dialect-table/iso8583-dialect-table.component';
import { CreateUpdateIso8583DialectComponent } from './modules/module/external-interface/iso8583configuration/iso8583-dialect/widget/create-update-iso8583-dialect/create-update-iso8583-dialect.component';
import { ActionButtonGroupIso8583DialectComponent } from './modules/module/external-interface/iso8583configuration/iso8583-dialect/widget/action-button-group-iso8583-dialect/action-button-group-iso8583-dialect.component';
import { Iso8583FieldTableComponent } from './modules/module/external-interface/iso8583configuration/iso8583-field-configuration/widget/iso8583-field-table/iso8583-field-table.component';
import { CreateUpdateIso8583FieldFormComponent } from './modules/module/external-interface/iso8583configuration/iso8583-field-configuration/widget/create-update-iso8583-field-form/create-update-iso8583-field-form.component';
import { CreateUpdateDialogTypeComponent } from './modules/module/channel-configuration/channel-type/widget/create-update-dialog-type/create-update-dialog-type.component';
import { EditDialogIso8583FormatComponent } from './modules/module/message-format/iso8583-format/widget/edit-dialog-iso8583-format/edit-dialog-iso8583-format.component';
import { UserTableComponent } from './modules/module/user-management/user/widgets/user-table/user-table.component';
import { InterfaceListComponent } from './modules/module/dashboard/interface-list/interface-list.component';
import { CreateUpdateDialogChannelComponent } from './modules/module/channel-configuration/channel/widget/create-update-dialog/create-update-dialog.component';
import { OverlayLoadingComponent } from './modules/global-widget/overlay-loading/overlay-loading.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NotificationService } from './modules/services/notification-service/notification.service';
import { TagComponent } from './modules/global-widget/tag/tag.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { ChannelService } from './modules/services/module-services/channel.service';
import { ChannelTypeService } from './modules/services/module-services/channel-type.service';
import { HpanDialogComponent } from './modules/module/transaction/widget-transaction/hpan-dialog/hpan-dialog.component';


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
    TransactionSummaryComponent,
    Iso8583FormatComponent,
    Iso8583FormatTableComponent,
    CreateUpdateDialogIso8583FormatTableComponent,
    ActionButtonGroupIso8583FormatComponent,
    ChannelComponent,
    ChannelTypeComponent,
    ChannelTableComponent,
    ActionButtonGroupTerminalComponent,
    ChannelTypeTableComponent,
    ActionButtonGroupChannelTypeComponent,
    Iso8583DialectComponent,
    Iso8583FieldConfigurationComponent,
    Iso8583ResponseMappingComponent,
    Iso8583DialectTableComponent,
    CreateUpdateIso8583DialectComponent,
    ActionButtonGroupIso8583DialectComponent,
    Iso8583FieldTableComponent,
    CreateUpdateIso8583FieldFormComponent,
    CreateUpdateDialogTypeComponent,
    EditDialogIso8583FormatComponent,
    UserTableComponent,
    InterfaceListComponent,
    CreateUpdateDialogChannelComponent,
    OverlayLoadingComponent,
    TagComponent,
    HpanDialogComponent,
  ],

  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    HttpClientModule,
    MaterialModule,
    AgGridModule.withComponents([]),
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    DropdownModule,
    FormsModule,
    MessageModule,
    ProgressSpinnerModule,
    ButtonModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    ToastModule,
    RippleModule,
    MessagesModule,
    PasswordModule,
    TagModule,
    StateConfigurationModule,
  ],
  providers: [
    NotificationService,
    MessageService,
    ConfirmationService,
    ChannelService,
    ChannelTypeService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
