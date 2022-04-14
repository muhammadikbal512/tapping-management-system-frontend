import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ChannelService } from 'src/app/modules/services/module-services/channel.service';
import { ChannelTypeService } from 'src/app/modules/services/module-services/channel-type.service';
import { ChannelTypeModel } from 'src/app/model/modules-model/channel-type.model';


@Component({
  selector: 'app-create-update-dialog',
  templateUrl: './create-update-dialog.component.html',
  styleUrls: ['./create-update-dialog.component.css']
})
export class CreateUpdateDialogChannelComponent implements OnInit {
  channelType: ChannelTypeModel[] = []
  constructor(private channelService: ChannelService, private channelTypeService: ChannelTypeService) { }

  ngOnInit(): void {
    this.getAllChannelType();
  }

  getAllChannelType() {
    this.channelTypeService.getAllChannelTypeList().subscribe((response) => {
      this.channelType = response
      console.log(this.channelType)
    })
  }

  onAddChannel(data: any, id: number) {
    this.channelService.addChannel(data, id).subscribe((response) => {
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
