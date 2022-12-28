import { NgModule } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { DropdownModule } from 'primeng/dropdown';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { CalendarModule } from 'primeng/calendar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { TreeTableModule } from 'primeng/treetable';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
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
  TableModule,
  TooltipModule,
  TreeTableModule,
  DialogModule,
  MultiSelectModule
];

@NgModule({
  imports: [PrimeNGComponents],
  exports: [PrimeNGComponents],
})
export class PrimengModule {}
