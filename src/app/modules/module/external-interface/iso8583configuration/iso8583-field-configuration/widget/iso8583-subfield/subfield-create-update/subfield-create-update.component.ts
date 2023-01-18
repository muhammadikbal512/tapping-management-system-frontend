import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { EncodingInterface } from 'src/app/interface/modules/encoding';
import { FieldFormatInterface } from 'src/app/interface/modules/field-format';
import { EncodingModel } from 'src/app/model/modules-model/encoding.model';
import { FieldFormatModel } from 'src/app/model/modules-model/field-format.model';
import { Iso8583SubFieldModel } from 'src/app/model/modules-model/iso8583-field.model';
import { IsoFieldConfigurationTableService } from 'src/app/modules/services/module-services/external-interfaces/iso-field-configuration-table.service';
import { IsoFieldConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/iso-field-configuration.service';
import { ISO8583FieldState } from 'src/app/state-configuration/modules/external-interfaces/iso8583configuration/iso8583-field-configuration/iso8583-field.state';

@Component({
  selector: 'app-subfield-create-update',
  templateUrl: './subfield-create-update.component.html',
  styleUrls: ['./subfield-create-update.component.css'],
})
export class SubfieldCreateUpdateComponent implements OnInit {
  @Select(ISO8583FieldState.Encoding)
  encodings$!: Observable<EncodingInterface[]>;
  @Select(ISO8583FieldState.fieldFormat)
  fieldFormats$!: Observable<FieldFormatInterface[]>;

  showClearButton: boolean = false;
  fieldFormatInterface: FieldFormatInterface[] = [];
  encodingInterface: EncodingInterface[] = [];
  subFieldModel: Iso8583SubFieldModel = new Iso8583SubFieldModel();
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private isoFieldTableService: IsoFieldConfigurationTableService,
    private isoFieldService: IsoFieldConfigurationService
  ) {}

  ngOnInit(): void {
    this.createFormat();
    this.encodings$.subscribe((data) => {
      this.encodingInterface = data.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    });
    this.fieldFormats$.subscribe((data) => {
      this.fieldFormatInterface = data.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    });
  }

  onChange($event: any) {
    this.showClearButton = $event != '' && $event != null;
  }

  createFormat() {
    this.form = this.fb.group({
      subFieldId: ['', Validators.required],
      description: ['', Validators.required],
      subFieldLength: ['', Validators.required],
      subFieldFormat: ['', Validators.required],
      encoding: ['', Validators.required],
      isoFieldCondition: [null],
      priority: ['', Validators.required],
      isTlvFormat: [''],
      isCommon: [''],
      tlvTagSize: ['', Validators.required],
    });
  }

  setNewDataToModel(): Iso8583SubFieldModel {
    this.subFieldModel.parentFieldId = this.parentFieldId
    this.subFieldModel.subFieldId = this.subFieldId.value;
    this.subFieldModel.subFieldFormat = new FieldFormatModel(
      Number(this.subFieldFormat.value.code)
    );
    this.subFieldModel.subFieldlength = this.subFieldLength.value;
    this.subFieldModel.tlvTagSize = this.tlvTagSize.value;
    this.subFieldModel.description = this.description.value;
    this.subFieldModel.isTlvFormat = this.isTlvFormat.value;
    this.subFieldModel.priority = this.priority.value;
    this.subFieldModel.encoding = new EncodingModel(
      Number(this.encoding.value.code)
    );
    this.subFieldModel.isoFieldCondition = this.isoFieldCondition.value;

    return this.subFieldModel;
  }

  createSubField() {
    this.showClearButton = true;
    this.isoFieldService.onCreateIsoSubFieldConfiguration(
      this.setNewDataToModel()
    );
  }

  get parentFieldId() {
    return this.isoFieldService.existingData.id;
  }

  get subFieldId() {
    return this.form.controls['subFieldId'];
  }

  get description() {
    return this.form.controls['description'];
  }

  get subFieldLength() {
    return this.form.controls['subFieldLength'];
  }

  get subFieldFormat() {
    return this.form.controls['subFieldFormat'];
  }

  get encoding() {
    return this.form.controls['encoding'];
  }

  get isoFieldCondition() {
    return this.form.controls['isoFieldCondition'];
  }

  get priority() {
    return this.form.controls['priority'];
  }

  get tlvTagSize() {
    return this.form.controls['tlvTagSize'];
  }

  get isTlvFormat() {
    return this.form.controls['isTlvFormat'];
  }

  get isCommon() {
    return this.form.controls['isCommon'];
  }
}
