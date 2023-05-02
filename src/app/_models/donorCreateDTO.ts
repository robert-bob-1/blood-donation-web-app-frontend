export interface DonorCreateDTO {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    bloodType: string;
    smsNotification: number;
    emailNotification: number;
}