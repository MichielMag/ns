import { CommutingType } from "./enums";

export interface Product {
    categoryCode?:      string;
    displayName?:       string;
    longCategoryName?:  string;
    number?:            string;
    operatorCode?:      string;
    operatorName?:      string;
    shortCategoryName?: string;
    type?:              CommutingType;
}