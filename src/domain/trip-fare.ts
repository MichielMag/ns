import { DiscountType, ProductType, TravelClass } from './enums';

export interface Fare {
	discountType?: DiscountType;
	link?: string;
	priceInCents?: number;
	priceInCentsExcludingSupplement?: number;
	priceInCentsExcludingSupplementOrPrice?: number;
	product?: ProductType;
	supplementInCents?: number;
	travelClass?: TravelClass;
}
