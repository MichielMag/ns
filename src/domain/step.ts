import { Location } from './location';

export interface Step {
	distanceInMeters?: number;
	durationInSeconds?: number;
	endLocation?: Location;
	instructions?: string;
	startLocation?: Location;
}
