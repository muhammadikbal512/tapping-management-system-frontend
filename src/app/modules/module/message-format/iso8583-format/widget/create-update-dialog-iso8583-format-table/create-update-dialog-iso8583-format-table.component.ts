import { Component, OnInit } from '@angular/core';
import { MessageFormatService } from 'src/app/modules/services/module-services/message-format.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Iso8583FormatModel } from 'src/app/model/modules-model/iso8583-format.model';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create-update-dialog-iso8583-format-table',
  templateUrl: './create-update-dialog-iso8583-format-table.component.html',
  styleUrls: ['./create-update-dialog-iso8583-format-table.component.css'],
})
export class CreateUpdateDialogIso8583FormatTableComponent implements OnInit {
  form!: FormGroup
  iso8583FormatModel: Iso8583FormatModel = new Iso8583FormatModel();

  constructor(private dialog: MatDialog,private fb: FormBuilder, private iso8583FormatService: MessageFormatService) {
  }

  ngOnInit(): void {
    this.createFormat();
  }

  onAddMsgFormat(data: any) {
    this.iso8583FormatService.addIso8583Format(data).subscribe((response) => {
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
  
  closeDialog(){
    this.dialog.closeAll();
  }

  private createFormat() {
    this.form = this.fb.group({
      messageFormat: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  setNewDataToModel(): Iso8583FormatModel {
    this.iso8583FormatModel.messageFormat = this.messageFormat.value;
    this.iso8583FormatModel.description = this.description.value;
    return this.iso8583FormatModel;
  }

  onCreateIso8583Format() {
    this.iso8583FormatService.addIso8583Format(this.setNewDataToModel());
  }


  get messageFormat() {
    return this.form.controls['messageFormat'];
  }

  get description() {
    return this.form.controls['description'];
  }
}
