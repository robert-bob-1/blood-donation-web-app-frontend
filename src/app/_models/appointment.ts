import { Donor } from "./donor";

export interface Appointment{
    id: string;
    donor: Donor;
    doctorId: string;
    locationId: string;
    date: string;
    time: string;
}