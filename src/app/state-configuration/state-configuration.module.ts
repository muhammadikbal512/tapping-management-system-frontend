import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { ChannelState } from './modules/channel-configuration/channel/channel.state';
import { ChannelTypeState } from './modules/channel-configuration/channel-type/channel-type.state';
import { MessageFormatState } from './modules/message-format/message-format.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { NgxsResetPluginModule } from 'ngxs-reset-plugin';
import { DialectState } from './modules/external-interfaces/iso8583configuration/iso8583-dialect/dialect.state';


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
      MessageFormatState
    ])
  ],
})
export class StateConfigurationModule {}
