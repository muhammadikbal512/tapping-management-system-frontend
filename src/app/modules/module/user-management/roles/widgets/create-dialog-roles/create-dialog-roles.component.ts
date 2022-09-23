import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RolesModel } from 'src/app/model/modules-model/roles.model';
import { RolesService } from 'src/app/modules/services/module-services/roles.service';

@Component({
  selector: 'app-create-dialog-roles',
  templateUrl: './create-dialog-roles.component.html',
  styleUrls: ['./create-dialog-roles.component.css'],
})
export class CreateDialogRolesComponent implements OnInit, AfterViewInit {
  form!: FormGroup;
  disableButton: boolean = false;
  roleModel: RolesModel = new RolesModel();

  showLoading: boolean = false;
  constructor(
    public roleService: RolesService,
    private fb: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    if (this.roleService.buttonStatus == 'edit') {
      this.setExistingDataToModel();
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
      roleName: ['', Validators.required],
    });
  }

  onCheckingFormHasChange() {
    this.form.valueChanges.subscribe((value) => {
      if (this.existingRoleName != value.roleName) {
        this.disableButton = false;
      }
      if (this.existingRoleName == value.roleName) {
        this.disableButton = true;
      }
    });
  }

  setNewDataToModel(): RolesModel {
    this.roleModel.roleName = this.roleName.value;
    return this.roleModel;
  }

  setExistingDataToModel() {
    this.roleName.setValue(this.existingRoleName);
  }

  onCreateRole() {
    this.showLoading = true;
    this.roleService.onCreateRoles(this.setNewDataToModel());
  }

  onUpdateRole() {
    this.showLoading = true;
    const newData = this.roleService.createRoleFormData(
      this.existingRoleName,
      this.setNewDataToModel()
    );
    this.roleService.onUpdateRoles(newData);
  }

  get roleName() {
    return this.form.controls['roleName'];
  }

  get existingRoleName() {
    return this.roleService.existingData.roleName;
  }
}
