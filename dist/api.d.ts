import { IApi } from './i-api';
import { Station } from './domain/station';
import { Verstoring } from './domain/verstoring';
import { TravelAdvice } from './domain/travel-advice';
import { DepartureBoard } from './domain/departure-board';
import { ArrivalDepartureParameters } from './params/arrival-parameters';
import { ArrivalBoard } from './domain/arrival-board';
import { TripParameters } from './params/trip-parameters';
import { TripsParameters } from './params/trips-parameters';
import { DisruptionParameters } from './params/disruption-parameters';
export declare class API implements IApi {
    private token;
    private http;
    private readonly ALLSTATIONSURL;
    private readonly ARRIVALSURL;
    private readonly DEPARTURESURL;
    private readonly BIGDEPARTURESURL;
    private readonly DISRUPTIONURL;
    private readonly DISRUPTIONSURL;
    private readonly STATIONDISRUPTIONURL;
    private readonly TRIPURL;
    private readonly TRIPSURL;
    constructor(token: string);
    getAllStations(): Promise<Station[]>;
    getArrivals(params?: ArrivalDepartureParameters | undefined): Promise<ArrivalBoard>;
    getDepartures(params?: ArrivalDepartureParameters | undefined): Promise<DepartureBoard>;
    getBigDepartures(params?: ArrivalDepartureParameters | undefined): Promise<DepartureBoard>;
    getDisruption(params: {
        id: string;
    }): Promise<Verstoring>;
    getDisruptions(params?: DisruptionParameters | undefined): Promise<Verstoring>;
    getStationDisruption(params: {
        code: string;
    }): Promise<Verstoring>;
    getTrip(params?: TripParameters | undefined): Promise<TravelAdvice>;
    getTrips(params?: TripsParameters | undefined): Promise<TravelAdvice>;
}
