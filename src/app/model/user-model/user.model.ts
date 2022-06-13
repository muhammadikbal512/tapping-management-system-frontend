export class UserModel {
    id: number;
    userId: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    logInDateDisplay!: Date;
    joinDate!: Date;
    profileImageUrl?: string;
    active: boolean;
    notLocked: boolean;
    role: string;
    authorities: [];

    constructor() {
        this.id = 0;
        this.userId = '';
        this.firstName = '';
        this.lastName = '';
        this.username = '';
        this.email = '';
        this.active = false;
        this.notLocked = false;
        this.role = '';
        this.authorities = [];
      }
}
