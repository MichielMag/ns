import { Trip } from './trip';
export interface TravelAdvice {
    firstArrival?: string;
    firstDeparture?: string;
    firstTrip?: Trip;
    lastTrip?: Trip;
    lastTripArrival?: string;
    lastTripDeparture?: string;
    message?: string;
    scrollRequestBackwardContext?: string;
    scrollRequestForwardContext?: string;
    trips?: Trip[];
}
