export interface DonorCreateDTO {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    bloodType: string;
    smsNotification: number;
    emailNotification: number;
}