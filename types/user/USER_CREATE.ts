export interface UserCreate {
    lastname: string;
    firstname: string;
    birthdate: Date;
    address?: string;
    city?: string;
    country?: string;
    email: string;
    phoneNumber?: string;
    password: string;
}