import { Donor } from "./donor";
import { Location } from "./location";

export interface Appointment{
    id: string;
    donor: Donor;
    doctorId: string;
    location: Location;
    date: string;
    time: string;
}