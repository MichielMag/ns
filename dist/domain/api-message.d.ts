import { Link } from './links';
import { Self } from './self';
export interface APIMessage<T> {
    links?: {
        [key: string]: Link;
    };
    meta?: {
        [key: string]: {
            [key: string]: any;
        };
    };
    payload?: T;
    self?: Self;
}
