import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { NgxEchartsModule } from 'ngx-echarts';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from '../modules/material/material.module';
import 'flowbite';

import { BadgeModule } from 'primeng/badge';
import { DropdownModule } from 'primeng/dropdown';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';

import { PasswordModule } from 'primeng/password';
import { TagModule } from 'primeng/tag';
import { CalendarModule } from 'primeng/calendar';

import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MatTableExporterModule } from 'mat-table-exporter';

import { LoginComponent } from '../modules/module/login/login.component';
import { DashboardComponent } from '../modules/module/dashboard/dashboard.component';
import { TransactionComponent } from '../modules/module/transaction/transaction.component';
import { AlertAnalysisComponent } from '../modules/module/investigation/alert-analysis/alert-analysis.component';
import { AlertComponent } from '../modules/module/acquirer/alert/alert.component';
import { TerminalListComponent } from '../modules/module/acquirer/terminal-list/terminal-list.component';
import { JsonConfigurationComponent } from '../modules/module/external-interface/json-configuration/json-configuration.component';
import { Iso20022Component } from '../modules/module/external-interface/iso20022/iso20022.component';
import { XmlConfigurationComponent } from '../modules/module/external-interface/xml-configuration/xml-configuration.component';
import { NdcComponent } from '../modules/module/external-interface/ndc/ndc.component';
import { Iso8583configurationComponent } from '../modules/module/external-interface/iso8583configuration/iso8583configuration.component';
import { PrivateSchemeComponent } from '../modules/module/user-management/private-scheme/private-scheme.component';
import { RolesComponent } from '../modules/module/user-management/roles/roles.component';
import { UserComponent } from '../modules/module/user-management/user/user.component';
import { TransactionRateComponent } from '../modules/module/dashboard/transaction-rate/transaction-rate.component';
import { TerminalComponent } from '../modules/module/terminal-configuration/terminal/terminal.component';
import { ArpComponent } from '../modules/module/system/application-parameters/arp/arp.component';
import { SystemParametersComponent } from '../modules/module/system/system-parameters/system-parameters.component';
import { TransactionStatusComponent } from '../modules/module/dashboard/transaction-status/transaction-status.component';
import { DatePickerComponent } from '../modules/module/transaction/widget-transaction/date-picker/date-picker.component';
import { TableComponent } from '../modules/module/transaction/widget-transaction/table/table.component';
import { FormsTransactionComponent } from '../modules/module/transaction/forms-transaction/forms-transaction.component';
import { TransactionSummaryComponent } from '../modules/module/transaction/transaction-summary/transaction-summary.component';
import { Iso8583FormatComponent } from '../modules/module/message-format/iso8583-format/iso8583-format.component';
import { Iso8583FormatTableComponent } from '../modules/module/message-format/iso8583-format/widget/iso8583-format-table/iso8583-format-table.component';
import { CreateUpdateDialogIso8583FormatTableComponent } from '../modules/module/message-format/iso8583-format/widget/create-update-dialog-iso8583-format-table/create-update-dialog-iso8583-format-table.component';
import { ActionButtonGroupIso8583FormatComponent } from '../modules/module/message-format/iso8583-format/widget/action-button-group-iso8583-format/action-button-group-iso8583-format.component';
import { ChannelComponent } from '../modules/module/channel-configuration/channel/channel.component';
import { ChannelTypeComponent } from '../modules/module/channel-configuration/channel-type/channel-type.component';
import { ChannelTableComponent } from '../modules/module/channel-configuration/channel/widget/channel-table/channel-table.component';
import { ActionButtonGroupTerminalComponent } from '../modules/module/channel-configuration/channel/widget/action-button-group-terminal/action-button-group-terminal.component';
import { ChannelTypeTableComponent } from '../modules/module/channel-configuration/channel-type/widget/channel-type-table/channel-type-table.component';
import { ActionButtonGroupChannelTypeComponent } from '../modules/module/channel-configuration/channel-type/widget/action-button-group-channel-type/action-button-group-channel-type.component';
import { Iso8583DialectComponent } from '../modules/module/external-interface/iso8583configuration/iso8583-dialect/iso8583-dialect.component';
import { Iso8583FieldConfigurationComponent } from '../modules/module/external-interface/iso8583configuration/iso8583-field-configuration/iso8583-field-configuration.component';

import { Iso8583DialectTableComponent } from '../modules/module/external-interface/iso8583configuration/iso8583-dialect/widget/iso8583-dialect-table/iso8583-dialect-table.component';
import { CreateUpdateIso8583DialectComponent } from '../modules/module/external-interface/iso8583configuration/iso8583-dialect/widget/create-update-iso8583-dialect/create-update-iso8583-dialect.component';
import { ActionButtonGroupIso8583DialectComponent } from '../modules/module/external-interface/iso8583configuration/iso8583-dialect/widget/action-button-group-iso8583-dialect/action-button-group-iso8583-dialect.component';
import { Iso8583FieldTableComponent } from '../modules/module/external-interface/iso8583configuration/iso8583-field-configuration/widget/iso8583-field-table/iso8583-field-table.component';
import { CreateUpdateIso8583FieldFormComponent } from '../modules/module/external-interface/iso8583configuration/iso8583-field-configuration/widget/create-update-iso8583-field-form/create-update-iso8583-field-form.component';
import { CreateUpdateDialogTypeComponent } from '../modules/module/channel-configuration/channel-type/widget/create-update-dialog-type/create-update-dialog-type.component';
import { EditDialogIso8583FormatComponent } from '../modules/module/message-format/iso8583-format/widget/edit-dialog-iso8583-format/edit-dialog-iso8583-format.component';
import { UserTableComponent } from '../modules/module/user-management/user/widgets/user-table/user-table.component';
import { InterfaceListComponent } from '../modules/module/dashboard/interface-list/interface-list.component';
import { CreateUpdateDialogChannelComponent } from '../modules/module/channel-configuration/channel/widget/create-update-dialog/create-update-dialog.component';
import { OverlayLoadingComponent } from '../modules/global-widget/overlay-loading/overlay-loading.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { TagComponent } from '../modules/global-widget/tag/tag.component';
import { AuthInterceptor } from '../interceptor/auth.interceptor';
import { HpanDialogComponent } from '../modules/module/transaction/widget-transaction/hpan-dialog/hpan-dialog.component';
import { TransactionParametersComponent } from '../modules/module/transaction/transaction-parameters/transaction-parameters.component';
import { TransactionParamDialogComponent } from '../modules/module/transaction/transaction-parameters/widget/transaction-param-dialog/transaction-param-dialog.component';
import { TransactionParamActionButtonComponent } from '../modules/module/transaction/transaction-parameters/widget/transaction-param-action-button/transaction-param-action-button.component';
import { TransactionParamTableComponent } from '../modules/module/transaction/transaction-parameters/widget/transaction-param-table/transaction-param-table.component';
import { ActionButtonIso8583FieldConfigurationComponent } from '../modules/module/external-interface/iso8583configuration/iso8583-field-configuration/widget/action-button-iso8583-field-configuration/action-button-iso8583-field-configuration.component';
import { TerminalListIssuerTableComponent } from '../modules/module/issuer/terminal-list/widget/terminal-list-issuer-table/terminal-list-issuer-table.component';
import { TerminalListIssuerComponent } from '../modules/module/issuer/terminal-list/terminal-list.component';
import { CreateDialogTerminalListIssuerComponent } from '../modules/module/issuer/terminal-list/widget/create-dialog-terminal-list-issuer/create-dialog-terminal-list-issuer.component';
import { ActionButtonTerminalListIssuerComponent } from '../modules/module/issuer/terminal-list/widget/action-button-terminal-list-issuer/action-button-terminal-list-issuer.component';
import { AlertIssuerComponent } from '../modules/module/issuer/alert-issuer/alert-issuer.component';
import { AlertIssuerTableComponent } from '../modules/module/issuer/alert-issuer/widget/alert-issuer-table/alert-issuer-table.component';
import { CreateDialogAlertIssuerComponent } from '../modules/module/issuer/alert-issuer/widget/create-dialog-alert-issuer/create-dialog-alert-issuer.component';
import { ActionButtonAlertIssuerComponent } from '../modules/module/issuer/alert-issuer/widget/action-button-alert-issuer/action-button-alert-issuer.component';
import { UserActionButtonComponent } from '../modules/module/user-management/user/widgets/user-action-button/user-action-button.component';
import { AlertAcquirerTableComponent } from '../modules/module/acquirer/alert/widget/alert-acquirer-table/alert-acquirer-table.component';
import { CreateDialogAcquirerComponent } from '../modules/module/acquirer/alert/widget/create-dialog-acquirer/create-dialog-acquirer.component';
import { ActionButtonAcquirerAlertComponent } from '../modules/module/acquirer/alert/widget/action-button-acquirer-alert/action-button-acquirer-alert.component';
import { TerminalListAcquirerTableComponent } from '../modules/module/acquirer/terminal-list/widget/terminal-list-acquirer-table/terminal-list-acquirer-table.component';
import { TerminalListAcquirerActionButtonComponent } from '../modules/module/acquirer/terminal-list/widget/terminal-list-acquirer-action-button/terminal-list-acquirer-action-button.component';

import { UserCreateDialogComponent } from '../modules/module/user-management/user/widgets/user-create-dialog/user-create-dialog.component';
import { EventCollectorComponent } from '../modules/module/event-collector/event-collector.component';
import { EventCollectorTableComponent } from '../modules/module/event-collector/widget/event-collector-table/event-collector-table.component';
import { CreateDialogEventCollectorComponent } from '../modules/module/event-collector/widget/create-dialog-event-collector/create-dialog-event-collector.component';
import { ActionButtonEventCollectorComponent } from '../modules/module/event-collector/widget/action-button-event-collector/action-button-event-collector.component';
import { TableRolesComponent } from '../modules/module/user-management/roles/widgets/table-roles/table-roles.component';
import { ActionButtonRolesComponent } from '../modules/module/user-management/roles/widgets/action-button-roles/action-button-roles.component';
import { CreateDialogRolesComponent } from '../modules/module/user-management/roles/widgets/create-dialog-roles/create-dialog-roles.component';
import { EditDialogRolesComponent } from '../modules/module/user-management/roles/widgets/edit-dialog-roles/edit-dialog-roles.component';
import { AlertAnalysisTableComponent } from '../modules/module/investigation/alert-analysis/widgets/alert-analysis-table/alert-analysis-table.component';
import { CreateDialogAlertAnalysisComponent } from '../modules/module/investigation/alert-analysis/widgets/create-dialog-alert-analysis/create-dialog-alert-analysis.component';
import { ActionButtonAlertAnalysisComponent } from '../modules/module/investigation/alert-analysis/widgets/action-button-alert-analysis/action-button-alert-analysis.component';
import { SchemeTableComponent } from '../modules/module/user-management/private-scheme/widgets/scheme-table/scheme-table.component';
import { CreateDialogSchemeComponent } from '../modules/module/user-management/private-scheme/widgets/create-dialog-scheme/create-dialog-scheme.component';
import { ActionButtonSchemeComponent } from '../modules/module/user-management/private-scheme/widgets/action-button-scheme/action-button-scheme.component';
import { TableSystemParametersComponent } from '../modules/module/system/system-parameters/widgets/table-system-parameters/table-system-parameters.component';
import { ActionButtonSystemParametersComponent } from '../modules/module/system/system-parameters/widgets/action-button-system-parameters/action-button-system-parameters.component';
import { CreateUpdateSystemParametersComponent } from '../modules/module/system/system-parameters/widgets/create-update-system-parameters/create-update-system-parameters.component';
import { UserTagComponent } from '../modules/global-widget/user-tag/user-tag.component';
import { TableArpComponent } from '../modules/module/system/application-parameters/arp/widgets/table-arp/table-arp.component';
import { CreateUpdateArpComponent } from '../modules/module/system/application-parameters/arp/widgets/create-update-arp/create-update-arp.component';
import { ActionButtonArpComponent } from '../modules/module/system/application-parameters/arp/widgets/action-button-arp/action-button-arp.component';
import { TableIso20022Component } from '../modules/module/external-interface/iso20022/widgets/table-iso20022/table-iso20022.component';
import { CreateUpdateIso20022Component } from '../modules/module/external-interface/iso20022/widgets/create-update-iso20022/create-update-iso20022.component';
import { ActionButtonIso20022Component } from '../modules/module/external-interface/iso20022/widgets/action-button-iso20022/action-button-iso20022.component';
import { TableJsonComponent } from '../modules/module/external-interface/json-configuration/widgets/table-json/table-json.component';
import { ActionButtonJsonComponent } from '../modules/module/external-interface/json-configuration/widgets/action-button-json/action-button-json.component';
import { CreateDialogJsonComponent } from '../modules/module/external-interface/json-configuration/widgets/create-dialog-json/create-dialog-json.component';
import { TableNdcComponent } from '../modules/module/external-interface/ndc/widgets/table-ndc/table-ndc.component';
import { CreateDialogNdcComponent } from '../modules/module/external-interface/ndc/widgets/create-dialog-ndc/create-dialog-ndc.component';
import { ActionButtonNdcComponent } from '../modules/module/external-interface/ndc/widgets/action-button-ndc/action-button-ndc.component';
import { TableXmlComponent } from '../modules/module/external-interface/xml-configuration/widgets/table-xml/table-xml.component';
import { ActionButtonXmlComponent } from '../modules/module/external-interface/xml-configuration/widgets/action-button-xml/action-button-xml.component';
import { CreateDialogXmlComponent } from '../modules/module/external-interface/xml-configuration/widgets/create-dialog-xml/create-dialog-xml.component';
import { UserTagLockComponent } from '../modules/global-widget/user-tag-lock/user-tag-lock.component';
import { TableInterfaceComponent } from '../modules/module/dashboard/interface-list/widgets/table-interface/table-interface.component';
import { InterfaceListCardComponent } from '../modules/module/dashboard/interface-list-card/interface-list-card.component';
import { DeviceMonitoringComponent } from '../modules/module/device-monitoring/device-monitoring.component';
import { TransactionFlowComponent } from '../modules/global-widget/transaction-flow/transaction-flow.component';
import { TransactionFlowTableComponent } from '../modules/module/transaction/widget-transaction/transaction-flow-table/transaction-flow-table.component';
import { Iso8583ResponseMappingComponent } from '../modules/module/external-interface/iso8583configuration/iso8583-response-mapping/iso8583-response-mapping.component';
import { Iso8583ResponseMappingCreateDialogComponent } from '../modules/module/external-interface/iso8583configuration/iso8583-response-mapping/widget/iso8583-response-mapping-create-dialog/iso8583-response-mapping-create-dialog.component';
import { Iso8583ResponseMappingActionButtonComponent } from '../modules/module/external-interface/iso8583configuration/iso8583-response-mapping/widget/iso8583-response-mapping-action-button/iso8583-response-mapping-action-button.component';
import { Iso8583ResponseMappingTableComponent } from '../modules/module/external-interface/iso8583configuration/iso8583-response-mapping/widget/iso8583-response-mapping-table/iso8583-response-mapping-table.component';
import { ActionButtonInterfaceComponent } from '../modules/module/dashboard/interface-list-card/action-button-interface/action-button-interface.component';
import { TransactionVirtualComponent } from '../modules/module/transaction/transaction-virtual/transaction-virtual.component';
import { ButtonModule } from 'primeng/button';
import { WebsocketService } from './services/websocket-service/websocket-service.service';
import { TransactionRateChartService } from './services/chart-services/transaction-rate-chart.service';
import { TransactionService } from './services/module-services/transaction.service';
import { TransactionTableService } from './services/module-services/transaction-table.service';
import { DashboardService } from './services/module-services/dashboard.service';
import { ChannelTableService } from './services/module-services/channel-table.service';
import { ChannelService } from './services/module-services/channel.service';
import { ChannelTypeService } from './services/module-services/channel-type.service';
import { Iso8583DialectService } from './services/module-services/iso8583-dialect.service';
import { ChannelTypeTableService } from './services/module-services/channel-type-table.service';
import { AuthenticationService } from './services/authentication-service/authentication.service';
import { UserService } from './services/module-services/user.service';
import { AuthenticationGuard } from '../guard/authentication.guard';
import { RouterModule } from '@angular/router';
import { TableDeviceMonitoringComponent } from './module/device-monitoring/widgets/table-device-monitoring/table-device-monitoring.component';



@NgModule({
  declarations: [
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
    PrivateSchemeComponent,
    RolesComponent,
    UserComponent,
    TransactionRateComponent,
    TerminalComponent,
    ArpComponent,
    SystemParametersComponent,
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
    TransactionParametersComponent,
    TransactionParamDialogComponent,
    TransactionParamActionButtonComponent,
    TransactionParamTableComponent,
    ActionButtonIso8583FieldConfigurationComponent,
    TerminalListIssuerComponent,
    TerminalListIssuerTableComponent,
    CreateDialogTerminalListIssuerComponent,
    ActionButtonTerminalListIssuerComponent,
    AlertIssuerComponent,
    AlertIssuerTableComponent,
    CreateDialogAlertIssuerComponent,
    ActionButtonAlertIssuerComponent,
    UserActionButtonComponent,
    AlertAcquirerTableComponent,
    CreateDialogAcquirerComponent,
    ActionButtonAcquirerAlertComponent,
    TerminalListAcquirerTableComponent,
    TerminalListAcquirerActionButtonComponent,
    UserCreateDialogComponent,
    EventCollectorComponent,
    EventCollectorTableComponent,
    CreateDialogEventCollectorComponent,
    ActionButtonEventCollectorComponent,
    TableRolesComponent,
    ActionButtonRolesComponent,
    CreateDialogRolesComponent,
    EditDialogRolesComponent,
    AlertAnalysisTableComponent,
    CreateDialogAlertAnalysisComponent,
    ActionButtonAlertAnalysisComponent,
    SchemeTableComponent,
    CreateDialogSchemeComponent,
    ActionButtonSchemeComponent,
    TableSystemParametersComponent,
    ActionButtonSystemParametersComponent,
    CreateUpdateSystemParametersComponent,
    UserTagComponent,
    TableArpComponent,
    CreateUpdateArpComponent,
    ActionButtonArpComponent,
    TableIso20022Component,
    CreateUpdateIso20022Component,
    ActionButtonIso20022Component,
    TableJsonComponent,
    ActionButtonJsonComponent,
    CreateDialogJsonComponent,
    TableNdcComponent,
    CreateDialogNdcComponent,
    ActionButtonNdcComponent,
    TableXmlComponent,
    ActionButtonXmlComponent,
    CreateDialogXmlComponent,
    UserTagLockComponent,
    TableInterfaceComponent,
    InterfaceListCardComponent,
    DeviceMonitoringComponent,
    TransactionFlowComponent,
    TransactionFlowTableComponent,
    Iso8583ResponseMappingComponent,
    Iso8583ResponseMappingCreateDialogComponent,
    Iso8583ResponseMappingActionButtonComponent,
    Iso8583ResponseMappingTableComponent,
    ActionButtonInterfaceComponent,
    TransactionVirtualComponent,
    TableDeviceMonitoringComponent,
  ],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    HttpClientModule,
    RouterModule,
    MaterialModule,
    AgGridModule.withComponents([]),
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    DropdownModule,
    FormsModule,
    MessageModule,
    ButtonModule,
    ProgressSpinnerModule,
    BadgeModule,
    MessagesModule,
    PasswordModule,
    TagModule,
    MatTableExporterModule,
    CalendarModule,
  ],
  providers: [
    WebsocketService,
    TransactionRateChartService,
    TransactionService,
    TransactionTableService,
    DashboardService,
    ChannelTableService,
    ChannelService,
    ChannelTypeService,
    Iso8583DialectService,
    ChannelTypeTableService,
    AuthenticationService,
    UserService,
    AuthenticationGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
})
export class FeatureModule { }
