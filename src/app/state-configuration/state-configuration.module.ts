import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { MessageFormatState } from './modules/message-format/message-format.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { NgxsResetPluginModule } from 'ngxs-reset-plugin';
import { ChannelState } from './modules/channel-configuration/channel/channel.state';
import { ChannelTypeState } from './modules/channel-configuration/channel-type/channel-type.state';
import { DialectState } from './modules/external-interfaces/iso8583configuration/iso8583-dialect/dialect.state';
import { TransactionParametersState } from './modules/transaction-parameters/transaction-parameters.state';
import { ISO8583FieldState } from './modules/external-interfaces/iso8583configuration/iso8583-field-configuration/iso8583-field.state';
import { UserState } from './modules/user-management/user/user.state';
import { RolesState } from './modules/user-management/roles/roles.state';
import { ResponseMappingState } from './modules/external-interfaces/iso8583configuration/iso8583-response-mapping/response-mapping.state';
import { AcquirerAlertState } from './modules/acquirer/alert/acquirer-alert.state';
import { AcquirerTerminalState } from './modules/acquirer/terminal/acquirer-terminal.state';
import { AlertInvestigationState } from './modules/investigation/alert-investigation/alert-investigation.state';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsDispatchPluginModule.forRoot(),
    NgxsResetPluginModule.forRoot(),
    NgxsModule.forRoot([
      ChannelState,
      ChannelTypeState,
      DialectState,
      TransactionParametersState,
      ISO8583FieldState,
      UserState,
      MessageFormatState,
      RolesState,
      ResponseMappingState,
      AlertInvestigationState,
      AcquirerAlertState,
      
    ])
  ],
})
export class StateConfigurationModule {}
