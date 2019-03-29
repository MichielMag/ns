import { CrowdForecast, Status, AdviceSource } from "./enums";
import { Fare } from "./trip-fare";
import { Leg } from "./leg";
import { LatLng } from "./lat-lng";
import { ShareURL } from "./share-url";

export interface Trip {
    actualDurationInMinutes?:  number;
    checksum?:                 string;
    crowdForecast?:            CrowdForecast;
    ctxRecon?:                 string;
    fares?:                    Fare[];
    firstLeg?:                 Leg;
    idx?:                      number;
    lastLeg?:                  Leg;
    legs?:                     Leg[];
    optimal?:                  boolean;
    overviewPolyLine?:         LatLng[];
    plannedDurationInMinutes?: number;
    productFare?:              Fare;
    punctuality?:              number;
    realtime?:                 boolean;
    shareUrl?:                 ShareURL;
    status?:                   Status;
    transfers?:                number;
    travelAssistanceInfo?:     { [key: string]: any };
    type?:                     AdviceSource;
}