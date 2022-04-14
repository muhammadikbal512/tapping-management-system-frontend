import { Component, OnInit } from '@angular/core';
import { MessageFormatService } from 'src/app/modules/services/module-services/message-format.service';
import { Iso8583FormatModel } from 'src/app/model/modules-model/iso8583-format.model';
import { Iso8583DialectService } from 'src/app/modules/services/module-services/iso8583-dialect.service';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-update-iso8583-dialect',
  templateUrl: './create-update-iso8583-dialect.component.html',
  styleUrls: ['./create-update-iso8583-dialect.component.css']
})
export class CreateUpdateIso8583DialectComponent implements OnInit {
  msgFormat: Iso8583FormatModel[] = [];
  error: CustomHttpResponseModel[] = [];

  constructor(private messageFormatService: MessageFormatService, private iso8583DialectService: Iso8583DialectService) {
   }

  ngOnInit(): void {
    this.onGetListIso8583FormatMessage();
  }

  onGetListIso8583FormatMessage() {
    this.messageFormatService.getAllIso8583Format().subscribe((response) => {
      this.msgFormat = response;
      console.log('msgFormat', this.msgFormat)
    })
  }

  onAddIso8583FormatMessage(data: any, id:number){
    this.iso8583DialectService.addIso8583Dialect(data, id).subscribe((response) => {
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
      console.log(response)
      location.reload();
    },
    (error) => {
      console.log(error)
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
