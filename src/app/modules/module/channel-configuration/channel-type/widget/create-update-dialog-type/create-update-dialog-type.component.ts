import { Component, OnInit } from '@angular/core';
import { ChannelTypeModel } from 'src/app/model/modules-model/channel-type.model';
import { ChannelTypeService } from 'src/app/modules/services/module-services/channel-type.service';
import Swal from 'sweetalert2';
import 'rxjs'
import { Iso8583DialectMsgTemplate } from 'src/app/model/modules-model/iso8583-dialect-msg-template.model';
import { Iso8583DialectService } from 'src/app/modules/services/module-services/iso8583-dialect.service';


@Component({
  selector: 'app-create-update-dialog-type',
  templateUrl: './create-update-dialog-type.component.html',
  styleUrls: ['./create-update-dialog-type.component.css']
})
export class CreateUpdateDialogTypeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    
  }

  
}
