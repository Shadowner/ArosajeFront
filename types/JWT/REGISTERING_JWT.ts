import { ROLE } from '../ROLE';
import { JWT_TYPE } from './JWT_TYPE';
export type REGISTERING_JWT = {
    id: string,
    email: string,
    type: JWT_TYPE.REGISTERING
}