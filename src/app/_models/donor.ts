export interface Donor {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    userType: string; 
    bloodType: string;
    smsNotification: number;
    emailNotification: number;
}