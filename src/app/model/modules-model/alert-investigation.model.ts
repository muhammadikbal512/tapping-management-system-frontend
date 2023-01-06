import { UserModel } from '../user-model/user.model';
import { UserGroupModel } from './user-group.model';

export class AlertInvestigationModel {
  id: number = 0;
  caseName: string = '';
  createdAt: string = '';
  classificationType: string = '';
  classificationStatus: string = '';
  investigationHistories: string = '';
  comment: string = '';
  updatedBy: string = '';
  lockedByUser: string = '';
  initiator!: UserModel;
  group!: UserGroupModel;
}
