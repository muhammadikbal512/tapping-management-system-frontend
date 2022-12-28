import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthoritiesInterface } from 'src/app/interface/modules/authorities';
import { AuthoritiesModel } from 'src/app/model/modules-model/authorities.model';
import { RolesModel } from 'src/app/model/modules-model/roles.model';
import { RolesService } from 'src/app/modules/services/module-services/user-management/roles.service';
import { RolesState } from 'src/app/state-configuration/modules/user-management/roles/roles.state';

@Component({
  selector: 'app-create-dialog-roles',
  templateUrl: './create-dialog-roles.component.html',
  styleUrls: ['./create-dialog-roles.component.css'],
})
export class CreateDialogRolesComponent implements OnInit, AfterViewInit {
  @Select(RolesState.Authorities)
  Authorities$!: Observable<AuthoritiesInterface[]>;
  form!: FormGroup;
  disableButton: boolean = false;
  roleModel: RolesModel = new RolesModel();
  showClearButton: boolean = false;
  authoritiesInterface: AuthoritiesInterface[] = [];

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
    this.roleService.onGetAllAuthorities();
    this.Authorities$.subscribe((data) => {
      this.authoritiesInterface = data.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    });
  }

  private createFormat() {
    this.form = this.fb.group({
      roleName: ['', Validators.required],
      authorities: ['', Validators.required],
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

  onChange($event: any) {
    this.showClearButton = $event != '' && $event != null;
  }

  setNewDataToModel(): RolesModel {
    this.roleModel.roleName = this.roleName.value;
    this.roleModel.authorities = new AuthoritiesModel(Number(this.authorities.value.code))
    return this.roleModel;
  }

  setExistingDataToModel() {
    this.roleName.setValue(this.existingRoleName);
    this.authorities.setValue({
      name: this.existingAuthorities.authorityName,
      code: Number(this.existingAuthorities.id),
    });
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

  set AuthoritiesGroupInterfaces(optionList: AuthoritiesInterface[]) {
    this.authoritiesInterface = optionList;
  }

  get roleName() {
    return this.form.controls['roleName'];
  }

  get existingRoleName() {
    return this.roleService.existingData.roleName;
  }

  get authorities() {
    return this.form.controls['authorities'];
  }

  get existingAuthorities() {
    return this.roleService.existingData.authorities;
  }
}
