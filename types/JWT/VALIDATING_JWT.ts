import { ROLE } from '../ROLE';
import { JWT_TYPE } from './JWT_TYPE';
export type VALIDATING_JWT = {
    id: string,
    email: string,
    type: JWT_TYPE.VALIDATING
}