
export interface TripParameters
{
    /**
     * reconstruction context to use as basis for finding trip
     */
    ctxRecon : string;
    /**
     * date to use when reconstructing trip, may be a different date than the trip was originally planned
     */
    date? : string;
    /**
     * language to return text in (not all texts are translated)
     */
    lang? : string;
    /**
     * name/constant of product customer will use in travel, if omitted defaults to ROS
     */
    product? : string;
    /**
     * class of travel to use when calculating product prices
     */
    travelClass? : string;
    /**
     * discount of travel to use when calculating product prices
     */
    discount? : string;
    /**
     * Type of travelRequest, with or without directions
     */
    travelRequestType? : string;
}