import { Http } from './http';
import { IApi } from './i-api';
import { IHttp } from './i-http';
import { APIMessage } from './domain/api-message';
import { ArrivalBoard } from './domain/arrival-board';
import { DepartureBoard } from './domain/departure-board';
import { Station } from './domain/station';
import { TravelAdvice } from './domain/travel-advice';
import { Verstoring } from './domain/verstoring';
import { ArrivalDepartureParameters } from './params/arrival-departure-parameters';
import { DisruptionParameters } from './params/disruption-parameters';
import { TripParameters } from './params/trip-parameters';
import { TripsParameters } from './params/trips-parameters';

export class API implements IApi {
	private token: string = '';
	private http: IHttp;

	private readonly ALLSTATIONSURL = 'https://gateway.apiportal.ns.nl/public-reisinformatie/api/v2/stations';
	private readonly ARRIVALSURL = 'https://gateway.apiportal.ns.nl/public-reisinformatie/api/v2/arrivals';
	private readonly DEPARTURESURL = 'https://gateway.apiportal.ns.nl/public-reisinformatie/api/v2/departures';
	private readonly BIGDEPARTURESURL = 'https://gateway.apiportal.ns.nl/public-reisinformatie/api/v2/departures/big';
	private readonly DISRUPTIONURL = 'https://gateway.apiportal.ns.nl/public-reisinformatie/api/v2/disruptions/';
	private readonly DISRUPTIONSURL = 'https://gateway.apiportal.ns.nl/public-reisinformatie/api/v2/disruptions';
	private readonly STATIONDISRUPTIONURL =
		'https://gateway.apiportal.ns.nl/public-reisinformatie/api/v2/disruptions/station/';
	private readonly TRIPURL = 'https://gateway.apiportal.ns.nl/public-reisinformatie/api/v3/trips/trip';
	private readonly TRIPSURL = 'https://gateway.apiportal.ns.nl/public-reisinformatie/api/v3/trips';

	public constructor(token: string) {
		this.token = token;
		this.http = new Http(token);
	}

	public getAllStations(): Promise<Station[]> {
		return new Promise<Station[]>((resolve, reject) => {
			this.http.get<Station[]>(this.ALLSTATIONSURL, null).subscribe(
				(message: APIMessage<Station[]>) => {
					resolve(message.payload);
				},
				(error: any) => {
					reject(error);
				},
			);
		});
	}
	public getArrivals(params?: ArrivalDepartureParameters | undefined): Promise<ArrivalBoard> {
		return new Promise<ArrivalBoard>((resolve, reject) => {
			this.http.get<ArrivalBoard>(this.ARRIVALSURL, params).subscribe(
				(message: APIMessage<ArrivalBoard>) => {
					resolve(message.payload);
				},
				(error: any) => {
					reject(error);
				},
			);
		});
	}
	public getDepartures(params?: ArrivalDepartureParameters | undefined): Promise<DepartureBoard> {
		return new Promise<DepartureBoard>((resolve, reject) => {
			this.http.get<DepartureBoard>(this.DEPARTURESURL, params).subscribe(
				(message: APIMessage<DepartureBoard>) => {
					resolve(message.payload);
				},
				(error: any) => {
					reject(error);
				},
			);
		});
	}
	public getBigDepartures(params?: ArrivalDepartureParameters | undefined): Promise<DepartureBoard> {
		return new Promise<DepartureBoard>((resolve, reject) => {
			this.http.get<DepartureBoard>(this.BIGDEPARTURESURL, params).subscribe(
				(message: APIMessage<DepartureBoard>) => {
					resolve(message.payload);
				},
				(error: any) => {
					reject(error);
				},
			);
		});
	}
	public getDisruption(params: { id: string }): Promise<Verstoring> {
		return new Promise<Verstoring>((resolve, reject) => {
			this.http.get<Verstoring>(this.DISRUPTIONURL + params.id, params).subscribe(
				(message: APIMessage<Verstoring>) => {
					resolve(message.payload);
				},
				(error: any) => {
					reject(error);
				},
			);
		});
	}
	public getDisruptions(params?: DisruptionParameters | undefined): Promise<Verstoring> {
		return new Promise<Verstoring>((resolve, reject) => {
			this.http.get<Verstoring>(this.DISRUPTIONSURL, params).subscribe(
				(message: APIMessage<Verstoring>) => {
					resolve(message.payload);
				},
				(error: any) => {
					reject(error);
				},
			);
		});
	}
	public getStationDisruption(params: { code: string }): Promise<Verstoring> {
		return new Promise<Verstoring>((resolve, reject) => {
			this.http.get<Verstoring>(this.STATIONDISRUPTIONURL + params.code, params).subscribe(
				(message: APIMessage<Verstoring>) => {
					resolve(message.payload);
				},
				(error: any) => {
					reject(error);
				},
			);
		});
	}
	public getTrip(params?: TripParameters | undefined): Promise<TravelAdvice> {
		return new Promise<TravelAdvice>((resolve, reject) => {
			this.http.get<TravelAdvice>(this.TRIPURL, params).subscribe(
				(message: APIMessage<TravelAdvice>) => {
					resolve(message.payload);
				},
				(error: any) => {
					reject(error);
				},
			);
		});
	}
	public getTrips(params?: TripsParameters | undefined): Promise<TravelAdvice> {
		return new Promise<TravelAdvice>((resolve, reject) => {
			this.http.get<TravelAdvice>(this.TRIPSURL, params).subscribe(
				(message: APIMessage<TravelAdvice>) => {
					resolve(message.payload);
				},
				(error: any) => {
					reject(error);
				},
			);
		});
	}
}
