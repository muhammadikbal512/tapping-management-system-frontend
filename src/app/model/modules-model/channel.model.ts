import { ChannelTypeModel } from "./channel-type.model";

export class ChannelModel {
  channelId: number = 0;
  ipAddress: string = '';
  port: string = '';
  timeTrace: string = '';
  isOnPremise: boolean = false;
  channelstatus: boolean = false;
  channelType!: ChannelTypeModel
}
