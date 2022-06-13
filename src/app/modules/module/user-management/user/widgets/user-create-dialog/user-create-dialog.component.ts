import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { UserService } from 'src/app/modules/services/module-services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/model/user-model/user.model';

@Component({
  selector: 'app-user-create-dialog',
  templateUrl: './user-create-dialog.component.html',
  styleUrls: ['./user-create-dialog.component.css'],
})
export class UserCreateDialogComponent implements OnInit, AfterViewInit {
  form!: FormGroup;
  userModel: UserModel = new UserModel();
  showClearButton: boolean = false;
  disableButton: boolean = false;
  constructor(
    public userService: UserService,
    private fb: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.createFormat();
  }

  ngAfterViewInit(): void {
    if (this.userService.buttonStatus == 'edit') {
      this.setExistingDataToModel();
      this.disableButton = !this.form.dirty;
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
        this.existingEmail != value.email
      ) {
        this.disableButton = false;
      }

      if (
        this.existingUsername == value.username &&
        this.existingFirstName == value.firstName &&
        this.existingLastName == value.lastName &&
        this.existingEmail == value.email
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
  }

  private createFormat() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  NewDataToModel(): UserModel {
    this.userModel.firstName = this.firstName.value;
    this.userModel.lastName = this.lastName.value;
    this.userModel.username = this.username.value;
    this.userModel.email = this.email.value;
    return this.userModel;
  }

  onCreateUser() {
    this.userService.onCreateUser(this.NewDataToModel());
  }

  onUpdateUser() {
    const newData = this.userService.createUserFormData(
      this.existingUsername,
      this.NewDataToModel()
    );
    this.userService.onUpdateUser(newData);
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
}
