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
import { AlertInvestigationState } from './modules/investigation/alert-investigation/alert-investigation.state';
import { TransactionState } from './modules/transaction/transaction.state';
import { JsonConfigurationState } from './modules/external-interfaces/json-configuration/json-configuration.state';
import { Iso20022State } from './modules/external-interfaces/iso20022/iso20022.state';
import { NdcState } from './modules/external-interfaces/ndc/ndc.state';
import { ArpState } from './modules/system/arp/arp.state';
import { SchemeState } from './modules/user-management/scheme/scheme.state';
import { XmlConfigState } from './modules/external-interfaces/xml-config/xml-config.state';
import { InstitutionState } from './modules/user-management/institution/institution.state';
import { TypeState } from './modules/user-management/type/type.state';
import { UserGroupState } from './modules/user-management/user-group/user-group.state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsDispatchPluginModule.forRoot(),
    NgxsResetPluginModule.forRoot(),
    NgxsModule.forRoot([
      ChannelState,
      ChannelTypeState,
      ISO8583FieldState,
      DialectState,
      TransactionParametersState,
      UserState,
      MessageFormatState,
      RolesState,
      ResponseMappingState,
      Iso20022State,
      AlertInvestigationState,
      AcquirerAlertState,
      TransactionState,
      JsonConfigurationState,
      NdcState,
      ArpState,
      ResponseMappingState,
      SchemeState,
      XmlConfigState,
      InstitutionState,
      TypeState,
      UserGroupState,
    ]),
  ],
})
export class StateConfigurationModule {}
