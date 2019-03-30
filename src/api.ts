import { IApi } from './i-api';
import { Station } from './domain/station';
import { Verstoring } from './domain/verstoring';
import { IHttp } from './i-http';
import { Http } from './http';
import { APIMessage } from './domain/api-message';
import { TravelAdvice } from './domain/travel-advice';
import { DepartureBoard } from './domain/departure-board';
import { ArrivalDepartureParameters } from './params/arrival-departure-parameters';
import { ArrivalBoard } from './domain/arrival-board';
import { TripParameters } from './params/trip-parameters';
import { TripsParameters } from './params/trips-parameters';
import { DisruptionParameters } from './params/disruption-parameters';

export class API implements IApi
{
    private token : string = "";
    private http : IHttp;

    private readonly ALLSTATIONSURL = "https://gateway.apiportal.ns.nl/public-reisinformatie/api/v2/stations";
    private readonly ARRIVALSURL = "https://gateway.apiportal.ns.nl/public-reisinformatie/api/v2/arrivals";
    private readonly DEPARTURESURL = "https://gateway.apiportal.ns.nl/public-reisinformatie/api/v2/departures";
    private readonly BIGDEPARTURESURL = "https://gateway.apiportal.ns.nl/public-reisinformatie/api/v2/departures/big";
    private readonly DISRUPTIONURL = "https://gateway.apiportal.ns.nl/public-reisinformatie/api/v2/disruptions/";
    private readonly DISRUPTIONSURL = "https://gateway.apiportal.ns.nl/public-reisinformatie/api/v2/disruptions";
    private readonly STATIONDISRUPTIONURL = "https://gateway.apiportal.ns.nl/public-reisinformatie/api/v2/disruptions/station/";
    private readonly TRIPURL = "https://gateway.apiportal.ns.nl/public-reisinformatie/api/v3/trips/trip";
    private readonly TRIPSURL = "https://gateway.apiportal.ns.nl/public-reisinformatie/api/v3/trips";

    constructor(token : string)
    {
        this.token = token;
        this.http = new Http(token);
    }

    getAllStations(): Promise<Station[]> {
        return new Promise<Station[]>((resolve, reject) => {
            this.http.get<Station[]>(this.ALLSTATIONSURL, null)
                .subscribe(
                    (message : APIMessage<Station[]>) => {
                        resolve(message.payload);
                    },
                    (error : any) => {
                        reject(error);
                    }
                );
        });
    }
    getArrivals(params?: ArrivalDepartureParameters | undefined): Promise<ArrivalBoard> {
        return new Promise<ArrivalBoard>((resolve, reject) => {
            this.http.get<ArrivalBoard>(this.ARRIVALSURL, params)
                .subscribe(
                    (message : APIMessage<ArrivalBoard>) => {
                        resolve(message.payload);
                    },
                    (error : any) => {
                        reject(error);
                    }
                );
        });
    }
    getDepartures(params?: ArrivalDepartureParameters | undefined): Promise<DepartureBoard> {
        return new Promise<DepartureBoard>((resolve, reject) => {
            this.http.get<DepartureBoard>(this.DEPARTURESURL, params)
                .subscribe(
                    (message : APIMessage<DepartureBoard>) => {
                        resolve(message.payload);
                    },
                    (error : any) => {
                        reject(error);
                    }
                );
        });
    }
    getBigDepartures(params?: ArrivalDepartureParameters | undefined): Promise<DepartureBoard> {
        return new Promise<DepartureBoard>((resolve, reject) => {
            this.http.get<DepartureBoard>(this.BIGDEPARTURESURL, params)
                .subscribe(
                    (message : APIMessage<DepartureBoard>) => {
                        resolve(message.payload);
                    },
                    (error : any) => {
                        reject(error);
                    }
                );
        });
    }
    getDisruption(params: { id: string; }): Promise<Verstoring> {
        return new Promise<Verstoring>((resolve, reject) => {
            this.http.get<Verstoring>(this.DISRUPTIONURL + params.id, params)
                .subscribe(
                    (message : APIMessage<Verstoring>) => {
                        resolve(message.payload);
                    },
                    (error : any) => {
                        reject(error);
                    }
                );
        });
    }
    getDisruptions(params?: DisruptionParameters | undefined): Promise<Verstoring> {
        return new Promise<Verstoring>((resolve, reject) => {
            this.http.get<Verstoring>(this.DISRUPTIONSURL, params)
                .subscribe(
                    (message : APIMessage<Verstoring>) => {
                        resolve(message.payload);
                    },
                    (error : any) => {
                        reject(error);
                    }
                );
        });
    }
    getStationDisruption(params: { code: string; }): Promise<Verstoring> {
        return new Promise<Verstoring>((resolve, reject) => {
            this.http.get<Verstoring>(this.STATIONDISRUPTIONURL + params.code, params)
                .subscribe(
                    (message : APIMessage<Verstoring>) => {
                        resolve(message.payload);
                    },
                    (error : any) => {
                        reject(error);
                    }
                );
        });
    }
    getTrip(params?: TripParameters | undefined): Promise<TravelAdvice> {
        return new Promise<TravelAdvice>((resolve, reject) => {
            this.http.get<TravelAdvice>(this.TRIPURL, params)
                .subscribe(
                    (message : APIMessage<TravelAdvice>) => {
                        resolve(message.payload);
                    },
                    (error : any) => {
                        reject(error);
                    }
                );
        });
    }
    getTrips(params?: TripsParameters | undefined): Promise<TravelAdvice> {
        return new Promise<TravelAdvice>((resolve, reject) => {
            this.http.get<TravelAdvice>(this.TRIPSURL, params)
                .subscribe(
                    (message : APIMessage<TravelAdvice>) => {
                        resolve(message.payload);
                    },
                    (error : any) => {
                        reject(error);
                    }
                );
        });
    }
}