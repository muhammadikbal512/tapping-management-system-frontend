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
import { ChannelComponent } from './modules/module/channel-configuration/channel/channel.component'
import { ChannelTypeComponent } from './modules/module/channel-configuration/channel-type/channel-type.component'
import { Iso8583DialectComponent } from './modules/module/external-interface/iso8583configuration/iso8583-dialect/iso8583-dialect.component'
import { Iso8583FieldConfigurationComponent } from './modules/module/external-interface/iso8583configuration/iso8583-field-configuration/iso8583-field-configuration.component'
import { Iso8583ResponseMappingComponent } from './modules/module/external-interface/iso8583configuration/iso8583-response-mapping/iso8583-response-mapping.component'
import { TransactionParametersComponent } from './modules/module/transaction/transaction-parameters/transaction-parameters.component';




const routes: Routes = [
  {
    path: 'TMS-Home',
    component: DefaultComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'investigation',
        children: [
          {
            path: 'alert-analysis',
            component: AlertAnalysisComponent,
          },
        ],
      },
      {
        path: 'acquirer',
        children: [
          {
            path: 'alert',
            component: AlertComponent,
          },
          {
            path: 'terminal-list',
            component: TerminalListComponent,
          },
        ],
      },
      {
        path: 'issuer',
        children: [
          {
            path: 'alert',
            component: AlertComponent,
          },
          {
            path: 'terminal-list',
            component: TerminalListComponent,
          },
        ],
      },
      {
        path: 'message-format',
        children: [
          {
            path: 'iso8583-format',
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
                component: Iso8583DialectComponent
              },
              {
                path: 'iso8583-field-configuration',
                component: Iso8583FieldConfigurationComponent
              },
              {
                path: 'iso8583-response-mapping',
                component: Iso8583ResponseMappingComponent
              }
            ]
          },
          {
            path: 'iso20022',
            component: Iso20022Component,
          },
          {
            path: 'json-configuration',
            component: JsonConfigurationComponent,
          },
          {
            path: 'NDC',
            component: NdcComponent,
          },
          {
            path: 'xml-configuration',
            component: XmlConfigurationComponent,
          },
        ],
      },
      {
        path: 'channel-configuration',
        children: [
          {
            path: 'channel',
            component: ChannelComponent
          },
          {
            path: 'channel-type',
            component: ChannelTypeComponent
          }
        ]
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
        path: 'transaction',
        children: [
          {
            path: 'transaction',
            component: TransactionComponent
          },
          {
            path: 'transaction-parameters',
            component: TransactionParametersComponent
          }
        ]
      },
      {
        path: 'user-management',
        children: [
          {
            path: 'private-scheme',
            component: PrivateSchemeComponent,
          },
          {
            path: 'roles',
            component: RolesComponent,
          },
          {
            path: 'user',
            component: UserComponent,
          },
        ],
      },
      {
        path: 'system',
        children: [
          {
            path: 'arp',
            component: ArpComponent,
          },
          {
            path: 'system-parameters',
            component: SystemParametersComponent,
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
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
