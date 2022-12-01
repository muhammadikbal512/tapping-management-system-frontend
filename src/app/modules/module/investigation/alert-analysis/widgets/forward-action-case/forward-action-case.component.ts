import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RoleInterface } from 'src/app/interface/modules/role-interface';
import { AlertInvestigationService } from 'src/app/modules/services/module-services/alert-investigation.service';
import { AlertInvestigationState } from 'src/app/state-configuration/modules/investigation/alert-investigation/alert-investigation.state';

@Component({
  selector: 'app-forward-action-case',
  templateUrl: './forward-action-case.component.html',
  styleUrls: ['./forward-action-case.component.css'],
})
export class ForwardActionCaseComponent implements OnInit, AfterViewInit {
  @Select(AlertInvestigationState.Roles)
  Roles$!: Observable<RoleInterface[]>;
  disableStatus: boolean = false;
  form!: FormGroup;
  roleInterface: RoleInterface[] = [];
  showClearButton: boolean = false;
  constructor(
    private alertService: AlertInvestigationService,
    private fb: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.alertService.OnGetAllRoles();
    this.Roles$.subscribe((data) => {
      this.roleInterface = data.sort((a, b) => a.name.localeCompare(b.name));
    });
  }

  ngAfterViewInit(): void {
    if (this.alertService.buttonStatus == 'forward') {
      this.setExistingDataToDialog();
      this.onCheckingFormHasChange();
      this.changeDetectorRef.detectChanges();
    }
  }

  createForm() {
    this.form = this.fb.group({
      caseId: ['',Validators.required],
      privateScheme: ['',Validators.required],
      caseCreationDate: ['',Validators.required],
      classificationType: ['',Validators.required],
      role: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }

  onCheckingFormHasChange() {
    this.disableStatus = !this.form.dirty;
    this.form.valueChanges.subscribe((value) => {
      if (
        this.existingCaseId != value.caseId ||
        this.existingCaseCreationDate != value.caseCreationDate ||
        this.existingClassificationType != value.classificationType ||
        this.existingPrivateScheme != value.privateScheme
      ) {
        this.disableStatus = false;
      }

      if (
        this.existingCaseId == value.caseId &&
        this.existingCaseCreationDate == value.caseCreationDate &&
        this.existingClassificationType == value.classificationType &&
        this.existingPrivateScheme == value.privateScheme
      ) {
        this.disableStatus = true;
      }
    });
  }

  setExistingDataToDialog() {
    this.caseId.setValue(this.existingCaseId);
    this.privateScheme.setValue(this.existingPrivateScheme);
    this.caseCreationDate.setValue(this.existingCaseCreationDate);
    this.classificationType.setValue(this.existingClassificationType);
  }

  onChange($event: any) {
    this.showClearButton = $event != '' && $event != null;
  }

  get caseId() {
    return this.form.controls['caseId'];
  }

  get privateScheme() {
    return this.form.controls['privateScheme'];
  }

  get caseCreationDate() {
    return this.form.controls['caseCreationDate'];
  }

  get classificationType() {
    return this.form.controls['classificationType'];
  }

  get role() {
    return this.form.controls['role'];
  }

  get comment() {
    return this.form.controls['comment'];
  }

  get existingCaseId() {
    return this.alertService.existingData.caseId;
  }

  get existingPrivateScheme() {
    return this.alertService.existingData.privateScheme;
  }

  get existingCaseCreationDate() {
    return this.alertService.existingData.caseCreationDate;
  }

  get existingClassificationType() {
    return this.alertService.existingData.classificationType;
  }
}
