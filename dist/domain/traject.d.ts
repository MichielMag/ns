import { PrijsTraject } from "./prijs-traject";
export interface Traject {
    afstand1eKlasse?: number;
    afstand2eKlasse?: number;
    cdTariefpuntNaar?: number;
    cdTariefpuntVan?: number;
    indVolledig2eKlasse?: boolean;
    naamVervoer?: string;
    prijsTraject?: PrijsTraject[];
    vervoerders?: number;
}
