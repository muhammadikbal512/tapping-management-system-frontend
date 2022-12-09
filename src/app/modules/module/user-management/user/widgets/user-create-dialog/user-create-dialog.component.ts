import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { UserService } from 'src/app/modules/services/module-services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/model/user-model/user.model';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RoleInterface } from 'src/app/interface/modules/role-interface';
import { TypeInterface } from 'src/app/interface/modules/type';
import { InstitutionInterface } from 'src/app/interface/modules/institution';
import { UsergroupInterface } from 'src/app/interface/modules/usergroup';
import { UserState } from 'src/app/state-configuration/modules/user-management/user/user.state';

@Component({
  selector: 'app-user-create-dialog',
  templateUrl: './user-create-dialog.component.html',
  styleUrls: ['./user-create-dialog.component.css'],
})
export class UserCreateDialogComponent implements OnInit, AfterViewInit {
  @Select(UserState.Role)
  Roles$!: Observable<RoleInterface[]>;
  @Select(UserState.Type)
  Types$!: Observable<TypeInterface[]>;
  @Select(UserState.Institution)
  Institutions$!: Observable<InstitutionInterface[]>;
  @Select(UserState.UserGroup)
  UserGroups$!: Observable<UsergroupInterface[]>;

  form!: FormGroup;
  userModel: UserModel = new UserModel();
  roleInterface: RoleInterface[] = [];
  institutionInterface: InstitutionInterface[] = [];
  typeInterface: TypeInterface[] = [];
  userGroupInterface: UsergroupInterface[] = [];
  showClearButton: boolean = false;
  disableButton: boolean = false;
  showLoading: boolean = false;
  constructor(
    public userService: UserService,
    private fb: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.createFormat();
    this.userService.onGetAllRole();
    this.userService.onGetAllType();
    this.userService.onGetAllInstitution();
    this.userService.onGetAllUserGroup();
    this.Roles$.subscribe((data) => {
      this.roleInterface = data.sort((a, b) => a.name.localeCompare(b.name));
    });
    this.Types$.subscribe((data) => {
      this.typeInterface = data.sort((a, b) => a.name.localeCompare(b.name));
    });
    this.Institutions$.subscribe((data) => {
      this.institutionInterface = data.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    });
    this.UserGroups$.subscribe((data) => {
      this.userGroupInterface = data.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    });
  }

  ngAfterViewInit(): void {
    if (this.userService.buttonStatus == 'edit') {
      this.setExistingDataToModel();
      this.onCheckingFormHasChange();
      this.changeDetectorRef.detectChanges();
    }
  }

  onChange($event: any) {
    this.showClearButton = $event != '' && $event != null;
  }

  onCheckingFormHasChange() {
    this.disableButton = !this.form.dirty;
    this.form.valueChanges.subscribe((value) => {
      if (
        this.existingUsername != value.username ||
        this.existingFirstName != value.firstName ||
        this.existingLastName != value.lastName ||
        this.existingEmail != value.email ||
        this.existingRole != value.role ||
        this.existingInstitution != value.institution ||
        this.existingType != value.type ||
        this.existingUserGroup != value.userGroup
      ) {
        this.disableButton = false;
      }

      if (
        this.existingUsername == value.username &&
        this.existingFirstName == value.firstName &&
        this.existingLastName == value.lastName &&
        this.existingEmail == value.email &&
        this.existingRole == value.role.name &&
        this.existingInstitution == value.institution.name &&
        this.existingType == value.type.name &&
        this.existingUserGroup == value.userGroup.name
      ) {
        this.disableButton = true;
      }
    });
  }

  setExistingDataToModel() {
    this.username.setValue(this.existingUsername);
    this.lastName.setValue(this.existingFirstName);
    this.firstName.setValue(this.existingFirstName);
    this.email.setValue(this.existingEmail);
    this.role.setValue({
      name: this.existingRole.roleName,
      code: String(this.existingRole.id),
    });
    this.institution.setValue({
      name: this.existingInstitution.institutionName,
      code: String(this.existingInstitution.id),
    });
    this.type.setValue({
      name: this.existingType.typeName,
      code: String(this.existingType.id),
    });
    this.userGroup.setValue({
      name: this.existingUserGroup.groupName,
      code: String(this.existingUserGroup.id),
    });
    this.isActive.setValue(this.existingIsActive);
    this.isNonLocked.setValue(this.existingIsNonLocked);
  }

  private createFormat() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      institution: ['', Validators.required],
      type: ['', Validators.required],
      userGroup: ['', Validators.required],
      isActive: ['', Validators.required],
      isNonLocked: ['', Validators.required],
    });
  }

  NewDataToModel(): UserModel {
    this.userModel.firstName = this.firstName.value;
    this.userModel.lastName = this.lastName.value;
    this.userModel.username = this.username.value;
    this.userModel.email = this.email.value;
    this.userModel.role = this.role.value;
    this.userModel.institution = this.institution.value;
    this.userModel.type = this.type.value;
    this.userModel.userGroup = this.userGroup.value;
    this.userModel.active = this.isActive.value;
    this.userModel.notLocked = this.isNonLocked.value;
    this.userModel.profileImageUrl = '';
    return this.userModel;
  }

  onCreateUser() {
    this.showLoading = true;
    this.userService.onCreateUser(this.NewDataToModel());
  }

  onUpdateUser() {
    this.showLoading = true;
    const newData = this.userService.createUserFormData(
      this.existingUsername,
      this.NewDataToModel()
    );
    this.userService.onUpdateUser(newData);
  }

  set InstitutionGroupInterfaces(optionList: InstitutionInterface[]) {
    this.institutionInterface = optionList;
  }

  set RolesGroupInterfaces(optionList: RoleInterface[]) {
    this.roleInterface = optionList;
  }

  set TypesGroupInterfaces(optionList: TypeInterface[]) {
    this.typeInterface = optionList;
  }

  set UserGroupInterfaces(optionList: UsergroupInterface[]) {
    this.userGroupInterface = optionList;
  }

  get firstName() {
    return this.form.controls['firstName'];
  }

  get lastName() {
    return this.form.controls['lastName'];
  }

  get username() {
    return this.form.controls['username'];
  }

  get email() {
    return this.form.controls['email'];
  }

  get role() {
    return this.form.controls['role'];
  }

  get type() {
    return this.form.controls['type'];
  }

  get institution() {
    return this.form.controls['institution'];
  }

  get userGroup() {
    return this.form.controls['userGroup'];
  }

  get isActive() {
    return this.form.controls['isActive'];
  }

  get isNonLocked() {
    return this.form.controls['isNonLocked'];
  }

  get existingUsername() {
    return this.userService.existingData.username;
  }

  get existingFirstName() {
    return this.userService.existingData.firstName;
  }

  get existingLastName() {
    return this.userService.existingData.lastName;
  }

  get existingEmail() {
    return this.userService.existingData.email;
  }

  get existingRole() {
    return this.userService.existingData.role;
  }

  get existingInstitution() {
    return this.userService.existingData.institution;
  }

  get existingType() {
    return this.userService.existingData.type;
  }

  get existingUserGroup() {
    return this.userService.existingData.userGroup;
  }

  get existingIsActive() {
    return this.userService.existingData.active;
  }

  get existingIsNonLocked() {
    return this.userService.existingData.notLocked;
  }
}
