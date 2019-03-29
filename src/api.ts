import { IApi } from './i-api';
import { Station } from './domain/station';
import { Departure } from './domain/departure';
import { Verstoring } from './domain/verstoring';
import { Trip } from './domain/trip';
import { IHttp } from './i-http';
import { Http } from './http';
import { APIMessage } from './domain/api-message';

export class API implements IApi
{
    private token : string = "";
    private http : IHttp;

    constructor(token : string)
    {
        this.token = token;
        this.http = new Http(token);
    }

    getAllStations(): Promise<Station[]> {
        return new Promise<Station[]>((resolve, reject) => {
            this.http.get<Station>("https://gateway.apiportal.ns.nl/public-reisinformatie/api/v2/stations", null)
                .subscribe(
                    (message : APIMessage<Station>) => {
                        resolve(message.payload);
                    },
                    (error : any) => {
                        reject(error);
                    }
                );
        })
    }
    getDepartures(): Promise<Departure[]> {
        throw new Error("Method not implemented.");
    }
    getBigDepartures(): Promise<Departure[]> {
        throw new Error("Method not implemented.");
    }
    getDisruption(): Promise<Verstoring> {
        throw new Error("Method not implemented.");
    }
    getDisruptions(): Promise<Verstoring[]> {
        throw new Error("Method not implemented.");
    }
    getStationDisruption(): Promise<Verstoring> {
        throw new Error("Method not implemented.");
    }
    getTrip(): Promise<Trip> {
        throw new Error("Method not implemented.");
    }
    getTrips(): Promise<Trip[]> {
        throw new Error("Method not implemented.");
    }
}