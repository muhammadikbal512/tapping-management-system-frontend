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
import { AlertInvestigationService } from 'src/app/modules/services/module-services/investigation/alert-investigation.service';
import { AlertInvestigationState } from 'src/app/state-configuration/modules/investigation/alert-investigation/alert-investigation.state';

@Component({
  selector: 'app-forward-action-case',
  templateUrl: './forward-action-case.component.html',
  styleUrls: ['./forward-action-case.component.css'],
})
export class ForwardActionCaseComponent implements OnInit, AfterViewInit {
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
      id: ['', Validators.required],
      classificationStatus: ['', Validators.required],
      classificationType: ['', Validators.required],
      role: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }

  onCheckingFormHasChange() {
    this.disableStatus = !this.form.dirty;
    this.form.valueChanges.subscribe((value) => {
      if (
        this.existingCaseId != value.caseId ||
        this.existingClassificationStatus != value.classificationStatus ||
        this.existingClassificationType != value.classificationType
      ) {
        this.disableStatus = false;
      }

      if (
        this.existingCaseId == value.caseId &&
        this.existingClassificationStatus == value.classificationStatus &&
        this.existingClassificationType == value.classificationType
      ) {
        this.disableStatus = true;
      }
    });
  }

  setExistingDataToDialog() {
    this.caseId.setValue(this.existingCaseId);
    this.classificationStatus.setValue(this.existingClassificationStatus);
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

  get classificationStatus() {
    return this.form.controls['classificationStatus'];
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
    return this.alertService.existingData.id;
  }

  get existingClassificationStatus() {
    return this.alertService.existingData.classificationStatus;
  }

  get existingClassificationType() {
    return this.alertService.existingData.classificationType;
  }
}
