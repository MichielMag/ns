import { CrowdForecast, TravelType, JourneyStatus } from "./enums";
import { Destination } from "./destination";
import { Stop } from "./stop";
import { JourneyDetailLink } from "./journey-detail-link";
import { LatLng } from "./lat-lng";
import { Note } from "./note";
import { Product } from "./product";
import { Step } from "./step";
import { Message } from "./message";
export interface Leg {
    alternativeTransport?: boolean;
    cancelled?: boolean;
    changeCouldBePossible?: boolean;
    changePossible?: boolean;
    coordinates?: number[];
    crossPlatformTransfer?: boolean;
    crowdForecast?: CrowdForecast;
    destination?: Destination;
    direction?: string;
    distance?: number;
    firstStop?: Stop;
    idx?: string;
    journeyDetail?: JourneyDetailLink[];
    journeyDetailRef?: string;
    journeyStatus?: JourneyStatus;
    lastStop?: Stop;
    messages?: Message[];
    name?: string;
    notes?: Note[];
    origin?: Destination;
    overviewPolyLine?: LatLng[];
    plannedDurationInMinutes?: number;
    product?: Product;
    publicTransit?: boolean;
    punctuality?: number;
    punctualityInternal?: number;
    reachable?: boolean;
    shorterStock?: boolean;
    steps?: Step[];
    stops?: Stop[];
    travelAssistanceArrival?: {
        [key: string]: any;
    };
    travelAssistanceDeparture?: {
        [key: string]: any;
    };
    travelOrNeccesaryWalk?: boolean;
    travelType?: TravelType;
}
