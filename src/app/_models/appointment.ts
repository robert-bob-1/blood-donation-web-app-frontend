import { Doctor } from "./doctor";
import { Donor } from "./donor";
import { Location } from "./location";

export interface Appointment{
    id: string;
    donor: Donor;
    doctor?: Doctor;
    location: Location;
    date: string;
    time: string;
}