import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FeatureModule } from 'src/app/modules/feature.module';


@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FeatureModule,
  ]
})
export class DefaultModule {}
