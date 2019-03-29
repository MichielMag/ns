import { Namen } from "./namen";
import { StationType } from "./enums";

export interface Station {
    code?:                 string;
    evacode?:              string;
    heeftFaciliteiten?:    boolean;
    heeftReisassistentie?: boolean;
    heeftVertrektijden?:   boolean;
    land?:                 string;
    lat?:                  number;
    lng?:                  number;
    naderenRadius?:        number;
    namen?:                Namen;
    radius?:               number;
    stationType?:          StationType;
    synoniemen?:           string[];
    uiccode?:              string;
}