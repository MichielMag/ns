import { Product } from './product';
export interface Departure {
    actualDateTime?: string;
    actualTrack?: string;
    cancelled?: boolean;
    direction?: string;
    journeyDetailRef?: string;
    name?: string;
    plannedDateTime?: string;
    plannedTrack?: string;
    product?: Product;
    trainCategory?: string;
}
