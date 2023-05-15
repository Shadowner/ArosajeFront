import { ROLE } from '../ROLE';
import { JWT_TYPE } from './JWT_TYPE';
export type USER_JWT = {
    id: string,
    email: string,
    firstname: string,
    lastname: string,
    roles: ROLE[]
    type: JWT_TYPE.USER
}