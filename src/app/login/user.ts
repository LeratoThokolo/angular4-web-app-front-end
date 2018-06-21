import { Role } from '../role/role';

export class User {

    userID: number;
    fullNames: string;
    userName: string;
    email: string;
    cellNo: string;
    password: string;
    roles: Role[];
}
