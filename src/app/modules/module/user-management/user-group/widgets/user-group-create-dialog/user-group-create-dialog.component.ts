import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserGroupModel } from 'src/app/model/modules-model/user-group.model';
import { UserGroupTableService } from 'src/app/modules/services/module-services/user-management/user-group-table.service';
import { UserGroupService } from 'src/app/modules/services/module-services/user-management/user-group.service';

@Component({
  selector: 'app-user-group-create-dialog',
  templateUrl: './user-group-create-dialog.component.html',
  styleUrls: ['./user-group-create-dialog.component.css'],
})
export class UserGroupCreateDialogComponent implements OnInit, AfterViewInit {
  form!: FormGroup;
  showLoading: boolean = false;
  UserGroupModel: UserGroupModel = new UserGroupModel();
  disableButton: boolean = false;
  constructor(
    private fb: FormBuilder,
    private userGroupTableService: UserGroupTableService,
    public userGroupService: UserGroupService,
    private changeDetectorRef: ChangeDetectorRef

  ) {}
  ngAfterViewInit(): void {
    if(this.userGroupService.buttonStatus == 'edit') {
      this.setExistingDataToDialog();
      this.disableButton = !this.form.dirty;
      this.onCheckingFormHasChange();
      this.changeDetectorRef.detectChanges();
    }
  }



  ngOnInit(): void {
    this.createFormat();
  }

  private createFormat() {
    this.form = this.fb.group({
      groupName: ['', Validators.required],
    });
  }

  setExistingDataToDialog() {
    this.groupName.setValue(this.existingGroupName);
  }

  setNewDataToModel(): UserGroupModel {
    this.UserGroupModel.groupName = this.groupName.value;
    return this.UserGroupModel;
  }

  onCheckingFormHasChange() {
    this.form.valueChanges.subscribe((value) => {
      if (this.groupName != value.groupName) {
        this.disableButton = false;
      }
      if (this.groupName == value.groupName) {
        this.disableButton = true;
      }
    });
  }

  onCreateUserGroup() {
    this.showLoading = true;
    this.userGroupService.onAddUserGroup(this.setNewDataToModel());
  }

  onUpdateUserGroup() {
    this.showLoading = true;
    const newData = this.userGroupService.createUserGroupFormData(
      this.existingGroupName,
      this.setNewDataToModel()
    );
    this.userGroupService.onUpdateUserGroup(newData);
  }

  get groupName() {
    return this.form.controls['groupName'];
  }

  get existingGroupName() {
    return this.userGroupService.existingData.groupName;
  }
}
