import { Richting } from "./enums";
import { Locatie } from "./locatie";

export interface BaanvakBeperking {
    richting?: Richting;
    tot?:      Locatie;
    van?:      Locatie;
    via?:      Locatie[];
}