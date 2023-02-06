import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEchartsModule } from 'ngx-echarts';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from '../modules/material/material.module';
import { PrimengModule } from './primeng/primeng.module';
import 'flowbite';

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
import { TransactionSummaryComponent } from '../modules/module/transaction/widget-transaction/transaction-summary/transaction-summary.component';
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
import { Iso8583FieldConfigurationComponent } from '../modules/module/external-interface/iso8583configuration/iso8583-field-configuration/iso8583-field-configuration.component';
import { CreateUpdateIso8583DialectComponent } from './module/external-interface/iso8583configuration/iso8583dialect/widgets/create-update-iso8583-dialect/create-update-iso8583-dialect.component';
import { Iso8583FieldTableComponent } from '../modules/module/external-interface/iso8583configuration/iso8583-field-configuration/widget/iso8583-field-table/iso8583-field-table.component';
import { CreateUpdateIso8583FieldFormComponent } from '../modules/module/external-interface/iso8583configuration/iso8583-field-configuration/widget/create-update-iso8583-field-form/create-update-iso8583-field-form.component';
import { CreateUpdateDialogTypeComponent } from '../modules/module/channel-configuration/channel-type/widget/create-update-dialog-type/create-update-dialog-type.component';
import { EditDialogIso8583FormatComponent } from '../modules/module/message-format/iso8583-format/widget/edit-dialog-iso8583-format/edit-dialog-iso8583-format.component';
import { UserTableComponent } from '../modules/module/user-management/user/widgets/user-table/user-table.component';
import { InterfaceListComponent } from '../modules/module/dashboard/interface-list/interface-list.component';
import { CreateUpdateDialogChannelComponent } from '../modules/module/channel-configuration/channel/widget/create-update-dialog/create-update-dialog.component';
import { OverlayLoadingComponent } from '../modules/global-widget/overlay-loading/overlay-loading.component';
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
import { TableRolesComponent } from '../modules/module/user-management/roles/widgets/table-roles/table-roles.component';
import { ActionButtonRolesComponent } from '../modules/module/user-management/roles/widgets/action-button-roles/action-button-roles.component';
import { CreateDialogRolesComponent } from '../modules/module/user-management/roles/widgets/create-dialog-roles/create-dialog-roles.component';
import { EditDialogRolesComponent } from '../modules/module/user-management/roles/widgets/edit-dialog-roles/edit-dialog-roles.component';
import { AlertAnalysisTableComponent } from '../modules/module/investigation/alert-analysis/widgets/alert-analysis-table/alert-analysis-table.component';
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
import { Iso8583ResponseMappingComponent } from '../modules/module/external-interface/iso8583configuration/iso8583-response-mapping/iso8583-response-mapping.component';
import { Iso8583ResponseMappingCreateDialogComponent } from '../modules/module/external-interface/iso8583configuration/iso8583-response-mapping/widget/iso8583-response-mapping-create-dialog/iso8583-response-mapping-create-dialog.component';
import { Iso8583ResponseMappingActionButtonComponent } from '../modules/module/external-interface/iso8583configuration/iso8583-response-mapping/widget/iso8583-response-mapping-action-button/iso8583-response-mapping-action-button.component';
import { Iso8583ResponseMappingTableComponent } from '../modules/module/external-interface/iso8583configuration/iso8583-response-mapping/widget/iso8583-response-mapping-table/iso8583-response-mapping-table.component';
import { ActionButtonInterfaceComponent } from '../modules/module/dashboard/interface-list-card/action-button-interface/action-button-interface.component';
import { TransactionVirtualComponent } from '../modules/module/transaction/widget-transaction/transaction-virtual/transaction-virtual.component';
import { WebsocketService } from './services/websocket-service/websocket-service.service';
import { TransactionRateChartService } from './services/chart-services/transaction-rate-chart.service';
import { TransactionService } from './services/module-services/transaction/transaction.service';
import { TransactionTableService } from './services/module-services/transaction/transaction-table.service';
import { DashboardService } from './services/module-services/dashboard.service';
import { ChannelTableService } from './services/module-services/channel-configuration/channel-table.service';
import { ChannelService } from './services/module-services/channel-configuration/channel.service';
import { ChannelTypeService } from './services/module-services/channel-configuration/channel-type.service';
import { Iso8583DialectService } from './services/module-services/iso8583-dialect.service';
import { ChannelTypeTableService } from './services/module-services/channel-configuration/channel-type-table.service';
import { AuthenticationService } from './services/authentication-service/authentication.service';
import { UserService } from './services/module-services/user-management/user.service';
import { AuthenticationGuard } from '../guard/authentication.guard';
import { RouterModule } from '@angular/router';
import { TableDeviceMonitoringComponent } from './module/device-monitoring/widgets/table-device-monitoring/table-device-monitoring.component';
import { DeviceMonitoringTagComponent } from './global-widget/device-monitoring-tag/device-monitoring-tag.component';
import { TableInstitutionComponent } from './module/user-management/institution/widgets/table-institution/table-institution.component';
import { InstitutionCreateDialogComponent } from './module/user-management/institution/widgets/institution-create-dialog/institution-create-dialog.component';
import { InstitutionActionButtonComponent } from './module/user-management/institution/widgets/institution-action-button/institution-action-button.component';
import { TypeComponent } from './module/user-management/type/type.component';
import { TypeActionButtonComponent } from './module/user-management/type/widgets/type-action-button/type-action-button.component';
import { TypeCreateDialogComponent } from './module/user-management/type/widgets/type-create-dialog/type-create-dialog.component';
import { TableTypeComponent } from './module/user-management/type/widgets/table-type/table-type.component';
import { UserGroupComponent } from './module/user-management/user-group/user-group.component';
import { UserGroupActionButtonComponent } from './module/user-management/user-group/widgets/user-group-action-button/user-group-action-button.component';
import { UserGroupCreateDialogComponent } from './module/user-management/user-group/widgets/user-group-create-dialog/user-group-create-dialog.component';
import { TableUserGroupComponent } from './module/user-management/user-group/widgets/table-user-group/table-user-group.component';
import { InstitutionComponent } from './module/user-management/institution/institution.component';
import { TransactionStatusSvgComponent } from './module/dashboard/transaction-status/widgets/transaction-status-svg/transaction-status-svg.component';
import { TransactionNetworkComponent } from './module/transaction/widget-transaction/transaction-network/transaction-network.component';
import { TakeActionCaseComponent } from './module/investigation/alert-analysis/widgets/take-action-case/take-action-case.component';
import { ForwardActionCaseComponent } from './module/investigation/alert-analysis/widgets/forward-action-case/forward-action-case.component';
import { AlertInvestigationService } from './services/module-services/investigation/alert-investigation.service';
import { PhysicalLayerComponent } from './module/transaction/widget-transaction/physical-layer/physical-layer.component';
import { NetworkLayerComponent } from './module/transaction/widget-transaction/network-layer/network-layer.component';
import { AppLayerComponent } from './module/transaction/widget-transaction/app-layer/app-layer.component';
import { ClassifyQueueComponent } from './module/investigation/alert-analysis/widgets/classify-queue/classify-queue.component';
import { TakeActionComponent } from './module/investigation/alert-analysis/widgets/take-action/take-action.component';
import { InvestigationHistoryComponent } from './module/investigation/alert-analysis/widgets/investigation-history/investigation-history.component';
import { HeaderConfigurationComponent } from './module/external-interface/iso8583configuration/header-configuration/header-configuration.component';
import { AidConfigurationComponent } from './module/external-interface/iso8583configuration/aid-configuration/aid-configuration.component';
import { TransactionTypeMappingComponent } from './module/external-interface/iso8583configuration/transaction-type-mapping/transaction-type-mapping.component';
import { MtiConfigurationComponent } from './module/external-interface/iso8583configuration/mti-configuration/mti-configuration.component';
import { HeaderConfigTableComponent } from './module/external-interface/iso8583configuration/header-configuration/widgets/header-config-table/header-config-table.component';
import { HeaderConfigCreateUpdateDialogComponent } from './module/external-interface/iso8583configuration/header-configuration/widgets/header-config-create-update-dialog/header-config-create-update-dialog.component';
import { HeaderConfigActionButtonComponent } from './module/external-interface/iso8583configuration/header-configuration/widgets/header-config-action-button/header-config-action-button.component';
import { Iso8583dialectComponent } from './module/external-interface/iso8583configuration/iso8583dialect/iso8583dialect.component';
import { Iso8583DialectTableComponent } from './module/external-interface/iso8583configuration/iso8583dialect/widgets/iso8583-dialect-table/iso8583-dialect-table.component';
import { ActionButtonGroupIso8583DialectComponent } from './module/external-interface/iso8583configuration/iso8583dialect/widgets/action-button-group-iso8583-dialect/action-button-group-iso8583-dialect.component';
import { AidConfigTableComponent } from './module/external-interface/iso8583configuration/aid-configuration/widgets/aid-config-table/aid-config-table.component';
import { AidConfigCreateUpdateDialogComponent } from './module/external-interface/iso8583configuration/aid-configuration/widgets/aid-config-create-update-dialog/aid-config-create-update-dialog.component';
import { AidConfigActionButtonComponent } from './module/external-interface/iso8583configuration/aid-configuration/widgets/aid-config-action-button/aid-config-action-button.component';
import { TransactionTypeTableComponent } from './module/external-interface/iso8583configuration/transaction-type-mapping/transaction-type-table/transaction-type-table.component';
import { TransactionTypeCreateUpdateDialogComponent } from './module/external-interface/iso8583configuration/transaction-type-mapping/transaction-type-create-update-dialog/transaction-type-create-update-dialog.component';
import { TransactionTypeActionButtonGroupComponent } from './module/external-interface/iso8583configuration/transaction-type-mapping/transaction-type-action-button-group/transaction-type-action-button-group.component';
import { MtiConfigTableComponent } from './module/external-interface/iso8583configuration/mti-configuration/widgets/mti-config-table/mti-config-table.component';
import { MtiConfigCreateUpdateDialogComponent } from './module/external-interface/iso8583configuration/mti-configuration/widgets/mti-config-create-update-dialog/mti-config-create-update-dialog.component';
import { MtiConfigActionButtonGroupComponent } from './module/external-interface/iso8583configuration/mti-configuration/widgets/mti-config-action-button-group/mti-config-action-button-group.component';
import { IsoConfigurationComponent } from './module/external-interface/iso8583configuration/iso-configuration/iso-configuration.component';
import { IsoConfigTableComponent } from './module/external-interface/iso8583configuration/iso-configuration/widgets/iso-config-table/iso-config-table.component';
import { IsoConfigActionButtonComponent } from './module/external-interface/iso8583configuration/iso-configuration/widgets/iso-config-action-button/iso-config-action-button.component';
import { IsoConfigCreateUpdateDialogComponent } from './module/external-interface/iso8583configuration/iso-configuration/widgets/iso-config-create-update-dialog/iso-config-create-update-dialog.component';
import { AppLayerCaseComponent } from './module/investigation/alert-analysis/widgets/layers/app-layer-case/app-layer-case.component';
import { NetworkLayerCaseComponent } from './module/investigation/alert-analysis/widgets/layers/network-layer-case/network-layer-case.component';
import { PhysicalLayerCaseComponent } from './module/investigation/alert-analysis/widgets/layers/physical-layer-case/physical-layer-case.component';
import { SubfieldTableComponent } from './module/external-interface/iso8583configuration/iso8583-field-configuration/widget/iso8583-subfield/subfield-table/subfield-table.component';
import { SubfieldCreateUpdateComponent } from './module/external-interface/iso8583configuration/iso8583-field-configuration/widget/iso8583-subfield/subfield-create-update/subfield-create-update.component';
import { ActionButtonSubfieldComponent } from './module/external-interface/iso8583configuration/iso8583-field-configuration/widget/iso8583-subfield/action-button-subfield/action-button-subfield.component';
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
    Iso8583dialectComponent,
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
    TableRolesComponent,
    ActionButtonRolesComponent,
    CreateDialogRolesComponent,
    EditDialogRolesComponent,
    AlertAnalysisTableComponent,
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
    Iso8583ResponseMappingComponent,
    Iso8583ResponseMappingCreateDialogComponent,
    Iso8583ResponseMappingActionButtonComponent,
    Iso8583ResponseMappingTableComponent,
    ActionButtonInterfaceComponent,
    TransactionVirtualComponent,
    TableDeviceMonitoringComponent,
    DeviceMonitoringTagComponent,
    InstitutionComponent,
    TableInstitutionComponent,
    InstitutionCreateDialogComponent,
    ActionButtonJsonComponent,
    InstitutionActionButtonComponent,
    TypeComponent,
    TableTypeComponent,
    TypeCreateDialogComponent,
    TypeActionButtonComponent,
    UserGroupComponent,
    UserGroupActionButtonComponent,
    UserGroupCreateDialogComponent,
    TableUserGroupComponent,
    TransactionStatusSvgComponent,
    TransactionNetworkComponent,
    TakeActionCaseComponent,
    ForwardActionCaseComponent,
    PhysicalLayerComponent,
    NetworkLayerComponent,
    AppLayerComponent,
    ClassifyQueueComponent,
    TakeActionComponent,
    InvestigationHistoryComponent,
    HeaderConfigurationComponent,
    AidConfigurationComponent,
    TransactionTypeMappingComponent,
    MtiConfigurationComponent,
    HeaderConfigTableComponent,
    HeaderConfigCreateUpdateDialogComponent,
    HeaderConfigActionButtonComponent,
    AidConfigTableComponent,
    AidConfigCreateUpdateDialogComponent,
    AidConfigActionButtonComponent,
    TransactionTypeTableComponent,
    TransactionTypeCreateUpdateDialogComponent,
    TransactionTypeActionButtonGroupComponent,
    MtiConfigTableComponent,
    MtiConfigCreateUpdateDialogComponent,
    MtiConfigActionButtonGroupComponent,
    IsoConfigurationComponent,
    IsoConfigTableComponent,
    IsoConfigActionButtonComponent,
    IsoConfigCreateUpdateDialogComponent,
    AppLayerCaseComponent,
    NetworkLayerCaseComponent,
    PhysicalLayerCaseComponent,
    SubfieldTableComponent,
    SubfieldCreateUpdateComponent,
    ActionButtonSubfieldComponent,
  ],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    HttpClientModule,
    RouterModule,
    MaterialModule,
    PrimengModule,
    AgGridModule.withComponents([]),
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    FormsModule,
    MatTableExporterModule,
  ],
  providers: [
    WebsocketService,
    TransactionRateChartService,
    TransactionService,
    TransactionTableService,
    DashboardService,
    UserService,
    ChannelTableService,
    ChannelService,
    ChannelTypeService,
    Iso8583DialectService,
    ChannelTypeTableService,
    AuthenticationService,
    AlertInvestigationService,
    AuthenticationGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class FeatureModule {}
