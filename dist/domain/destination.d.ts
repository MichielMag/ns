import { CheckinStatus, ExitSide, LocationType } from './enums';
import { Note } from './note';
export interface Destination {
    actualDateTime?: string;
    actualTimeZoneOffset?: number;
    actualTrack?: string;
    checkinStatus?: CheckinStatus;
    city?: string;
    countryCode?: string;
    domestic?: boolean;
    exitSide?: ExitSide;
    lat?: number;
    latestKnownTrack?: string;
    lng?: number;
    name?: string;
    notes?: Note[];
    plannedDateTime?: string;
    plannedTimeZoneOffset?: number;
    plannedTrack?: string;
    products?: number;
    prognosisType?: string;
    travelAssistanceBookingInfo?: {
        [key: string]: any;
    };
    travelAssistanceMeetingPoints?: string[];
    type?: LocationType;
    uicCode?: string;
    weight?: number;
}
