import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
// import { ArpComponent } from './modules/module/system/application-parameters/arp/arp.component';
// import { SystemParametersComponent } from './modules/module/system/system-parameters/system-parameters.component';

const routes: Routes = [
  {
    path: 'TMS-Home',
    component: DefaultComponent,
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
        path: 'external-interfaces',
        children: [
          {
            path: 'iso8583-configuration',
            component: Iso8583configurationComponent,
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
        component: TransactionComponent,
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
    ],
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: '',
    redirectTo: 'TMS-Home/dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
