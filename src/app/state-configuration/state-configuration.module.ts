import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { MessageFormatState } from './modules/message-format/message-format.state';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsResetPluginModule } from 'ngxs-reset-plugin';
import { ChannelState } from './modules/channel-configuration/channel/channel.state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsResetPluginModule.forRoot(),
    NgxsModule.forRoot([MessageFormatState, ChannelState]),
  ],
})
export class StateConfigurationModule {}
