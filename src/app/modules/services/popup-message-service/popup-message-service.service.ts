import { Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { AlertInvestigationService } from '../module-services/alert-investigation.service';
import { ChannelTypeService } from '../module-services/channel-configuration/channel-type.service';
import { ChannelService } from '../module-services/channel-configuration/channel.service';
import { InstitutionService } from '../module-services/user-management/institution.service';
import { IsoFieldConfigurationService } from '../module-services/iso-field-configuration.service';
import { Iso8583DialectService } from '../module-services/iso8583-dialect.service';
import { MessageFormatService } from '../module-services/message-format.service';
import { ResponseMappingService } from '../module-services/response-mapping.service';
import { RolesService } from '../module-services/user-management/roles.service';
import { TransactionParametersService } from '../module-services/transaction/transaction-parameters.service';
import { TypeService } from '../module-services/user-management/type.service';
import { UserGroupService } from '../module-services/user-management/user-group.service';
import { UserService } from '../module-services/user-management/user.service';
import { HeaderConfigurationService } from '../module-services/external-interfaces/header-configuration.service';
import { AidConfigurationService } from '../module-services/external-interfaces/aid-configuration.service';

@Injectable({
  providedIn: 'root',
})
export class PopupMessageService {
  constructor(private confirmationService: ConfirmationService) {}

  messageFormatConfirm(event: Event, onDelete: MessageFormatService) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: 'Do you want to delete this record?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        onDelete.onDeleteIso8583Format();
      },
    });
  }

  channelConfirm(event: Event, onDelete: ChannelService) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: 'Do you want to delete this record?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        onDelete.onDeleteChannel();
      },
    });
  }

  channelTypeConfirm(event: Event, onDelete: ChannelTypeService) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: 'Do you want to delete this record?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        onDelete.onDeleteChannelType();
      },
    });
  }

  iso8583DialectConfirm(event: Event, onDelete: Iso8583DialectService) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: 'Do you want to delete this record?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        onDelete.onDeleteIso8583Dialect();
      },
    });
  }

  transactionParametersConfirm(
    event: Event,
    onDelete: TransactionParametersService
  ) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: 'Do you want to delete this record?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        onDelete.onDeleteTransactionParameters();
      },
    });
  }

  iso8583FieldConfigurationConfirm(
    event: Event,
    onDelete: IsoFieldConfigurationService
  ) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: 'Do you want to delete this record?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        onDelete.onDeleteIsoFieldConfiguration();
      },
    });
  }

  userConfirm(event: Event, onDelete: UserService) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: 'Do you want to delete this record?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        onDelete.onDeleteUser();
      },
    });
  }

  resetPassword(event: Event, onResetPassword: UserService) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: 'Do you want to reset password for this user ?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        onResetPassword.onResetPasswordUser();
      },
    });
  }

  roleConfirm(event: Event, onDelete: RolesService) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: 'Do you want to delete this record ?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        onDelete.onDeleteRole();
      },
    });
  }

  responseConfirm(event: Event, onDelete: ResponseMappingService) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: 'Do you want to delete this record ?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        onDelete.onDeleteResponseMapping();
      },
    });
  }

  alertConfirm(event: Event, onDelete: AlertInvestigationService) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: 'Do you want to reject this case ?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {},
    });
  }

  institutionConfirm(event: Event, onDelete: InstitutionService) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: 'Do you want to delete this institution ?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        onDelete.onDeleteInstitution();
      },
    });
  }

  typeConfirm(event: Event, onDelete: TypeService) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: 'Do you want to delete this Type ?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        onDelete.onDeleteType();
      },
    });
  }

  userGroupConfirm(event: Event, onDelete: UserGroupService) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: 'Do you want to delete this User Group ?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        onDelete.onDeleteUserGroup();
      },
    });
  }

  headerConfigConfirm(event: Event, onDelete: HeaderConfigurationService) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: 'Do you want to delete this Header Configuration ?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        onDelete.onDeleteHeaderConfig();
      },
    });
  }

  aidConfigConfirm(event: Event, onDelete: AidConfigurationService) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: 'Do you want to delete this AID Configuration ?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        onDelete.onDeleteAidConfig();
      },
    });
  }
}
