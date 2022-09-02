import { ChannelTypeModel } from "./channel-type.model";

export class ChannelModel {
  channelId: number = 0;
  ipAddress: string = '';
  port: number = 0;
  timeTrace: string = '';
  isOnPremise: boolean = false;
  channelstatus: boolean = false;
  channelType!: ChannelTypeModel
}
