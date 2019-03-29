import { Station } from "./domain/station";
import { Departure } from "./domain/departure";
import { Verstoring } from "./domain/verstoring";
import { Trip } from "./domain/trip";
import { ArrivalDepartureParameters } from "./params/arrival-parameters";
import { ArrivalBoard } from "./domain/arrival-board";
import { DepartureBoard } from "./domain/departure-board";
import { TravelAdvice } from "./domain/travel-advice";
import { DisruptionParameters } from "./params/disruption-parameters";
import { TripParameters } from "./params/trip-parameters";
import { TripsParameters } from "./params/trips-parameters";

export interface IApi
{
    /**
     * List of stations
     */
    getAllStations() : Promise<Station[]>;

    /**
     * Arrival times for a specified station. Either the UIC code or station is required
     * @param params (Optional) parameters
     */
    getArrivals(params? : ArrivalDepartureParameters) : Promise<ArrivalBoard>;

    /**
     * Departure times for a specified station. Either the UIC code or station is required.
     * @param params (Optional) parameters
     */
    getDepartures(params? : ArrivalDepartureParameters) : Promise<DepartureBoard>;

    /**
     * Returns a large list of departure times for a specified station. Either the UICCode or station is required. Note: This request returns a large amount of data, if not necessary use the non big request..
     * @param params (Optional) parameters
     */
    getBigDepartures(params? : ArrivalDepartureParameters) : Promise<DepartureBoard>;

    /**
     * Specific disruption/maintenance
     * @param params id of the specific disruption / maintenance
     */
    getDisruption(params : {id : string}) : Promise<Verstoring>;

    /**
     * List of disruptions/maintenance.
     * @param params (Optional) parameters
     */
    getDisruptions(params? : DisruptionParameters) : Promise<Verstoring>;

    /**
     * Disruptions for a station, code is either a UIC code or old-skool station code
     * @param params The UICCode or the station code
     */
    getStationDisruption(params : {code : string}) : Promise<Verstoring>;

    /**
     * Reconstruct a trip if possible using the given reconCtx (representation of a trip found in a travel advice)
     * @param params parameters
     */
    getTrip(params? : TripParameters) : Promise<TravelAdvice>;

    /**
     * Searches for a travel advice with the specified options between the possible backends (HARP, 9292 or PAS/AVG). Defaults to legacy XML implementation, specify header in order to get JSON
     * @param params (Optional) parameters
     */
    getTrips(params? : TripsParameters) : Promise<TravelAdvice>;
}