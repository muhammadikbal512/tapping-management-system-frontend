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

  msgFormat: Iso8583DialectMsgTemplate[] = [];
  constructor(private iso8583DialectService: Iso8583DialectService, private channelTypeService: ChannelTypeService) {
   }

  ngOnInit(): void {
    this.onGetAllMsgDialectTemplate();
  }

  onGetAllMsgDialectTemplate() {
    this.iso8583DialectService.getAllIso8583Dialect().subscribe((response) => {
      this.msgFormat = response
      console.log(response)
    })
  }

  onAddChannelType(data: any, id: number) {
    this.channelTypeService.addAllChannelType(data, id).subscribe((response) => {
      console.log(data)
      console.log(response)
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: 'success',
        title: 'Created !',
      });
      location.reload();
    },
    (error) => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: 'error',
        title: `${error.value}`,
      });
    }
    )
  }
}
