import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input'
import { MatNativeDateModule } from '@angular/material/core'
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs'

const MaterialComponents = [
  MatFormFieldModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatDialogModule,
  MatButtonModule,
  MatTabsModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
