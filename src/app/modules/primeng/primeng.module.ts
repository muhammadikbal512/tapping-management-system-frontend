import { NgModule } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { DropdownModule } from 'primeng/dropdown';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { TagModule } from 'primeng/tag';
import { CalendarModule } from 'primeng/calendar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';

const PrimeNGComponents = [
  DropdownModule,
  MessageModule,
  ButtonModule,
  ProgressSpinnerModule,
  BadgeModule,
  MessagesModule,
  PasswordModule,
  TagModule,
  CalendarModule,
  CheckboxModule,
];

@NgModule({
  imports: [PrimeNGComponents],
  exports: [PrimeNGComponents]
})
export class PrimengModule {}
