export interface Stop {
	actualArrivalDateTime?: string;
	actualArrivalTimeZoneOffset?: number;
	actualArrivalTrack?: string;
	actualDepartureDateTime?: string;
	actualDepartureTimeZoneOffset?: number;
	actualDepartureTrack?: string;
	arrivalDelayInSeconds?: number;
	cancelled?: boolean;
	city?: string;
	countryCode?: string;
	departureDelayInSeconds?: number;
	lat?: number;
	lng?: number;
	name?: string;
	passing?: boolean;
	plannedArrivalDateTime?: string;
	plannedArrivalTimeZoneOffset?: number;
	plannedArrivalTrack?: string;
	plannedDepartureDateTime?: string;
	plannedDepartureTimeZoneOffset?: number;
	plannedDepartureTrack?: string;
	products?: number;
	routeIdx?: number;
	uicCode?: string;
	weight?: number;
}
