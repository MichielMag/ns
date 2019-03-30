import { Product } from "./product";
import { DepartureArrivalMessage } from "./departure-arrival-message";
export interface Arrival {
    actualDateTime?: string;
    actualOrPlannedTime?: string;
    actualTrack?: string;
    cancelled?: boolean;
    journeyDetailRef?: string;
    messages?: DepartureArrivalMessage[];
    name?: string;
    origin?: string;
    plannedDateTime?: string;
    plannedTrack?: string;
    product?: Product;
    routeStations?: {
        [key: string]: any;
    }[];
    trainCategory?: string;
}
