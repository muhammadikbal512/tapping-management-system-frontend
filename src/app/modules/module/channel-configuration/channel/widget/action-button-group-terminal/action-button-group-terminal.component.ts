import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ChannelService } from 'src/app/modules/services/module-services/channel.service';
import { PopupMessageService } from 'src/app/modules/services/popup-message-service/popup-message-service.service';

@Component({
  selector: 'app-action-button-group-terminal',
  templateUrl: './action-button-group-terminal.component.html',
  styleUrls: ['./action-button-group-terminal.component.css'],
})
export class ActionButtonGroupTerminalComponent implements AgRendererComponent {
  constructor(
    private channelService: ChannelService,
    private confirmationService: PopupMessageService
  ) {}

  agInit(params: ICellRendererParams): void {}

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  editButton() {
    this.channelService.openDialog();
    this.channelService.buttonStatus = 'edit'
  }

  deleteButton(event: Event) {
    this.confirmationService.channelConfirm(event, this.channelService)
  }
}
