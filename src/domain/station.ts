import { Namen } from './namen';
import { StationType } from './enums';
import { IngangsDatum } from './ingangs-datum';
import { Sporen } from './sporen';

export interface Station {
	code?: string;
	EVACode?: string;
	heeftFaciliteiten?: boolean;
	heeftReisassistentie?: boolean;
	heeftVertrektijden?: boolean;
	land?: string;
	lat?: number;
	lng?: number;
	naderenRadius?: number;
	namen?: Namen;
	radius?: number;
	stationType?: StationType;
	synoniemen?: string[];
	UICCode?: string;
	ingangsDatum?: IngangsDatum;
	sporen?: Sporen[];
}
