export type PublicUser = {
    id: string;
    lastname: string;
    firstname: string;
    birthdate: Date;
    address: string;
    city: string;
    country: string;
    avatar: string | null;
    roles: number[];
    plants: number[];
}