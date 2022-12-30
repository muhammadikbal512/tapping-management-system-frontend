import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './guard/authentication.guard';

import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './modules/module/dashboard/dashboard.component';
import { LoginComponent } from './modules/module/login/login.component';
import { TransactionComponent } from './modules/module/transaction/transaction.component';
import { AlertAnalysisComponent } from './modules/module/investigation/alert-analysis/alert-analysis.component';
import { AlertComponent } from './modules/module/acquirer/alert/alert.component';
import { TerminalListComponent } from './modules/module/acquirer/terminal-list/terminal-list.component';
import { Iso8583configurationComponent } from './modules/module/external-interface/iso8583configuration/iso8583configuration.component';
import { Iso20022Component } from './modules/module/external-interface/iso20022/iso20022.component';
import { JsonConfigurationComponent } from './modules/module/external-interface/json-configuration/json-configuration.component';
import { XmlConfigurationComponent } from './modules/module/external-interface/xml-configuration/xml-configuration.component';
import { NdcComponent } from './modules/module/external-interface/ndc/ndc.component';
import { TerminalComponent } from './modules/module/terminal-configuration/terminal/terminal.component';
import { PrivateSchemeComponent } from './modules/module/user-management/private-scheme/private-scheme.component';
import { RolesComponent } from './modules/module/user-management/roles/roles.component';
import { UserComponent } from './modules/module/user-management/user/user.component';
import { ArpComponent } from './modules/module/system/application-parameters/arp/arp.component';
import { SystemParametersComponent } from './modules/module/system/system-parameters/system-parameters.component';
import { Iso8583FormatComponent } from './modules/module/message-format/iso8583-format/iso8583-format.component';
import { ChannelComponent } from './modules/module/channel-configuration/channel/channel.component';
import { ChannelTypeComponent } from './modules/module/channel-configuration/channel-type/channel-type.component';
import { Iso8583dialectComponent } from './modules/module/external-interface/iso8583configuration/iso8583dialect/iso8583dialect.component';
import { Iso8583FieldConfigurationComponent } from './modules/module/external-interface/iso8583configuration/iso8583-field-configuration/iso8583-field-configuration.component';
import { Iso8583ResponseMappingComponent } from './modules/module/external-interface/iso8583configuration/iso8583-response-mapping/iso8583-response-mapping.component';
import { TransactionParametersComponent } from './modules/module/transaction/transaction-parameters/transaction-parameters.component';
import { TerminalListIssuerComponent } from './modules/module/issuer/terminal-list/terminal-list.component';
import { AlertIssuerComponent } from './modules/module/issuer/alert-issuer/alert-issuer.component';
import { InterfaceListComponent } from './modules/module/dashboard/interface-list/interface-list.component';
import { DeviceMonitoringComponent } from './modules/module/device-monitoring/device-monitoring.component';
import { TransactionVirtualComponent } from './modules/module/transaction/widget-transaction/transaction-virtual/transaction-virtual.component';
import { InstitutionComponent } from './modules/module/user-management/institution/institution.component';
import { TypeComponent } from './modules/module/user-management/type/type.component';
import { UserGroupComponent } from './modules/module/user-management/user-group/user-group.component';
import { HeaderConfigurationComponent } from './modules/module/external-interface/iso8583configuration/header-configuration/header-configuration.component';
import { AidConfigurationComponent } from './modules/module/external-interface/iso8583configuration/aid-configuration/aid-configuration.component';
import { TransactionTypeMappingComponent } from './modules/module/external-interface/iso8583configuration/transaction-type-mapping/transaction-type-mapping.component';
import { MtiConfigurationComponent } from './modules/module/external-interface/iso8583configuration/mti-configuration/mti-configuration.component';
import { CreateUpdateIso8583FieldFormComponent } from './modules/module/external-interface/iso8583configuration/iso8583-field-configuration/widget/create-update-iso8583-field-form/create-update-iso8583-field-form.component';
const routes: Routes = [
  {
    path: 'TMS-Home',
    component: DefaultComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: 'dashboard',
        data: { title: 'Dashboard' },
        component: DashboardComponent,
      },
      {
        path: 'dashboard',
        children: [
          {
            path: 'interface-list',
            data: { title: 'Interface List' },
            component: InterfaceListComponent,
          },
        ],
      },
      {
        path: 'investigation',
        children: [
          {
            path: 'alert-investigation',
            data: { title: 'Alert Investigation' },
            component: AlertAnalysisComponent,
          },
        ],
      },
      {
        path: 'acquirer',
        children: [
          {
            path: 'alert',
            data: { title: 'Alert Acquirer' },
            component: AlertComponent,
          },
          {
            path: 'terminal-list',
            data: { title: 'Terminal Acquirer' },
            component: TerminalListComponent,
          },
        ],
      },
      {
        path: 'issuer',
        children: [
          {
            path: 'alert',
            data: { title: 'Alert Issuer' },
            component: AlertIssuerComponent,
          },
          {
            path: 'terminal-list',
            data: { title: 'Terminal Acquirer' },
            component: TerminalListIssuerComponent,
          },
        ],
      },
      {
        path: 'message-format',
        children: [
          {
            path: 'iso8583-format',
            data: { title: 'ISO8583 Format' },
            component: Iso8583FormatComponent,
          },
        ],
      },
      {
        path: 'external-interfaces',
        children: [
          {
            path: 'iso8583-configuration',
            children: [
              {
                path: 'iso8583-dialect',
                data: { title: 'ISO Configuration' },
                component: Iso8583dialectComponent,
              },
              {
                path: 'aid-configuration',
                data: { title: 'AID Configuration' },
                component: AidConfigurationComponent,
              },
              {
                path: 'header-configuration',
                data: { title: 'Header Configuration' },
                component: HeaderConfigurationComponent,
              },
              {
                path: 'transaction-type-mapping',
                data: { title: 'Transaction Type Mapping' },
                component: TransactionTypeMappingComponent,
              },
              {
                path: 'mti-configuration',
                data: { title: 'MTI Configuration' },
                component: MtiConfigurationComponent,
              },
              {
                path: 'iso8583-field-configuration',
                data: { title: 'ISO8583 Field Configuration' },
                component: Iso8583FieldConfigurationComponent,
                children: [
                  {
                    path: 'create-iso8583-field-configuration',
                    data: { title: 'Add Field Configuration' },
                    component: CreateUpdateIso8583FieldFormComponent,
                  },
                ],
              },
              {
                path: 'iso8583-field-configuration/create-iso8583-field-configuration',
                component: CreateUpdateIso8583FieldFormComponent,
              },

              {
                path: 'iso8583-response-mapping',
                data: { title: 'ISO8583 Response Code Mapping' },
                component: Iso8583ResponseMappingComponent,
              },
            ],
          },
          {
            path: 'iso20022',
            data: { title: 'ISO20022' },
            component: Iso20022Component,
          },
          {
            path: 'json-configuration',
            data: { title: 'JSON Configuration' },
            component: JsonConfigurationComponent,
          },
          {
            path: 'NDC',
            data: { title: 'NDC' },
            component: NdcComponent,
          },
          {
            path: 'xml-configuration',
            data: { title: 'XML Configuration' },
            component: XmlConfigurationComponent,
          },
        ],
      },
      {
        path: 'channel-configuration',
        children: [
          {
            path: 'channel',
            data: { title: 'Channel' },
            component: ChannelComponent,
          },
          {
            path: 'channel-type',
            data: { title: 'Channel Type' },
            component: ChannelTypeComponent,
          },
        ],
      },
      {
        path: 'terminal-configuration',
        children: [
          {
            path: 'terminal',
            component: TerminalComponent,
          },
        ],
      },
      {
        path: 'transactions',
        children: [
          {
            path: 'transaction-page',
            data: { title: 'Transaction' },
            component: TransactionComponent,
          },
          {
            path: 'transaction-parameters',
            data: { title: 'Transaction Parameters' },
            component: TransactionParametersComponent,
          },
          {
            path: 'transaction-virtual',
            data: { title: 'Transaction Virtual' },
            component: TransactionVirtualComponent,
          },
        ],
      },
      {
        path: 'user-management',
        children: [
          {
            path: 'private-scheme',
            data: { title: 'Private Scheme' },
            component: PrivateSchemeComponent,
          },
          {
            path: 'roles',
            data: { title: 'Roles' },
            component: RolesComponent,
          },
          {
            path: 'user',
            data: { title: 'User' },
            component: UserComponent,
          },
          {
            path: 'institution',
            data: { title: 'Institution' },
            component: InstitutionComponent,
          },
          {
            path: 'type',
            data: { title: 'Type' },
            component: TypeComponent,
          },
          {
            path: 'user-group',
            data: { title: 'User Group' },
            component: UserGroupComponent,
          },
        ],
      },
      {
        path: 'system',
        children: [
          {
            path: 'arp',
            data: { title: 'Arp' },
            component: ArpComponent,
          },
        ],
      },
      {
        path: 'device-monitoring',
        children: [
          {
            path: 'all-devices',
            data: { title: 'Device Monitoring' },
            component: DeviceMonitoringComponent,
          },
        ],
      },
    ],
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
