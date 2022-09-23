import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { UserGroupModel } from 'src/app/model/modules-model/user-group.model';
import { UserGroupTableService } from 'src/app/modules/services/module-services/user-group-table.service';
import { UserGroupService } from 'src/app/modules/services/module-services/user-group.service';

@Component({
  selector: 'app-user-group-create-dialog',
  templateUrl: './user-group-create-dialog.component.html',
  styleUrls: ['./user-group-create-dialog.component.css'],
})
export class UserGroupCreateDialogComponent implements OnInit {
  form!: FormGroup;
  showLoading: boolean = false;
  UserGroupModel: UserGroupModel = new UserGroupModel();
  disableButton: boolean = false;
  constructor(
    private fb: FormBuilder,
    private userGroupTableService: UserGroupTableService,
    private userGroupService: UserGroupService
  ) {}

  ngOnInit(): void {
    this.createFormat();
  }

  private createFormat() {
    this.form = this.fb.group({
      userGroupName: ['', Validators.required],
    });
  }

  setExistingDataToDialog() {
    this.userGroupName.setValue(this.existingUserGroupName);
  }

  setNewDataToModel(): UserGroupModel {
    this.UserGroupModel.userGroupName = this.userGroupName.value;
    return this.UserGroupModel;
  }

  onCheckingFormHasChange() {
    this.form.valueChanges.subscribe((value) => {
      if (this.userGroupName != value.userGroupName) {
        this.disableButton = false;
      }
      if (this.userGroupName == value.userGroupName) {
        this.disableButton = true;
      }
    });
  }

  onCreateUserGroup() {
    this.showLoading = true;
    this.userGroupService.onAddUserGroup(this.setNewDataToModel());
  }

  onUpdateUserGroup() {
    const newData = this.userGroupService.createUserGroupFormData(
      this.setNewDataToModel()
    );
    this.userGroupService.onUpdateUserGroup(newData);
  }

  get userGroupName() {
    return this.form.controls['userGroupName'];
  }

  get existingUserGroupName() {
    return this.userGroupService.existingData.userGroupName;
  }
}
