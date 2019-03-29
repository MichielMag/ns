import { Station } from "./domain/station";
import { Departure } from "./domain/departure";
import { Verstoring } from "./domain/verstoring";
import { Trip } from "./domain/trip";

export interface IApi
{
    getAllStations() : Promise<Station[]>;
    getDepartures() : Promise<Departure[]>;
    getBigDepartures() : Promise<Departure[]>;
    getDisruption() : Promise<Verstoring>;
    getDisruptions() : Promise<Verstoring[]>;
    getStationDisruption() : Promise<Verstoring>;
    getTrip() : Promise<Trip>;
    getTrips() : Promise<Trip[]>;
}