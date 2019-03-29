
export interface TripsParameters
{
    /**
     * Latitude of station/stop coordinate of the trip’s origin
     */
    originLat? : string;
    /**
     * Longitude of station/stop coordinate of the trip’s origin
     */
    originLng? : string;
    /**
     * Latitude of station/stop coordinate of the trip’s destination
     */
    destinationLat? : string;
    /**
     * Longitude of station/stop coordinate of the trip’s destination
     */
    destinationLng? : string;
    /**
     * Latitude of station/stop coordinate of the trip’s via point
     */
    viaLat? : string;
    /**
     * Longitude of station/stop coordinate of the trip’s via point
     */
    viaLng? : string;
    /**
     * Format - int32. Waiting time at the via location, exclusive of transfer time
     */
    viaWaitTime? : number;
    /**
     * Format - date-time (as date-time in RFC3339). Departure date / time for the search. defaults to server time (Europe/Amsterdam)
     */
    dateTime? : string;
    /**
     * If set, the date and time parameters specify the arrival time for the trip search instead of the departure time
     */
    searchForArrival? : boolean;
    /**
     * Format - int32. Minimum number of advices before the search time
     */
    previousAdvices? : number;
    /**
     * Format - int32. Minimum number of trips after the search time
     */
    nextAdvices? : number;
    /**
     * Defines the starting point for the scroll back or forth operation. Use the scrB value from a previous result to scroll backwards in time and use the scrF value to scroll forward
     */
    context? : string;
    /**
     * Format - int32. Extra time required at all transfers to change trains
     */
    addChangeTime? : number;
    /**
     * Language to return information for (only a small subset of text is translated, mainly notes)
     */
    lang? : string;
    /**
     * Language to return information for (only a small subset of text is translated, mainly notes)
     * (Description probably broken)
     */
    polylines? : boolean;
    /**
     * (legacy parameter, not supported for JSON) zip code for origin
     */
    fromZip? : string;
    /**
     * (legacy parameter, not supported for JSON) zip code for destination
     */
    toZip? : string;
    /**
     * (legacy parameter, not supported for JSON) travel method for origin
     */
    travelMethodFrom? : string;
    /**
     * (legacy parameter, not supported for JSON) travel method for destination
     */
    travelMethodTo? : string;
    /**
     * Name/constant of product customer will use in travel, if omitted defaults to ROS
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
     * Station from which a travel product has been purchased (intended for TrajectVrij)
     */
    productStationFrom? : string;
    /**
     * Station to which a travel product has been purchased (intended for TrajectVrij)
     */
    productStationTo? : string;
    /**
     * Show options which are only allowed with a year card
     */
    yearCard? : boolean;
    /**
     * Return trip advices with transit options to start travel from origin
     */
    originTransit? : boolean;
    /**
     * Return trip advices with walking options to start travel from origin to a train station (first mile)
     */
    originWalk? : boolean;
    /**
     * Return trip advices with biking options to start travel from origin to a train station (first mile)
     */
    originBike? : boolean;
    /**
     * Return trip advices with car options to start travel from origin to a train station (first mile)
     */
    originCar? : boolean;
    /**
     * A name that is returned as the origin in a trip
     */
    originName? : string;
    /**
     * Format - int32. Extra transfertime for the trip assistance booking engine PAS
     */
    travelAssistanceTransferTime? : number;
    /**
     * Return trip advices that are accessible. (might be bookable too)
     */
    searchForAccessibleTrip? : boolean;
    /**
     * Return trip advices with transit options to finish travel to the destination
     */
    destinationTransit? : boolean;
    /**
     * Return trip advices with walking options to finish travel to the destination (last mile)
     */
    destinationWalk? : boolean;
    /**
     * Return trip advices with biking options to finish travel to the destination (last mile)
     */
    destinationBike? : boolean;
    /**
     * Return trip advices with car options to finish travel to the destination (last mile)
     */
    destinationCar? : boolean;
    /**
     * A name that is returned as the destination in a trip
     */
    destinationName? : string;
    /**
     * Accesibility equipment to use when searching for trip assistance options (AVG/PAS)
     */
    accessibilityEquipment1? : string;
    /**
     * Secondary accesibility equipment to use when searching for trip assistance options (AVG/PAS)
     */
    accessibilityEquipment2? : string;
    /**
     * Exclude high speed trains from results (including those with a required reservation)
     */
    excludeHighSpeedTrains? : boolean;
    /**
     * Exclude trains for domestic trips that require a reservation (e.g. Thalys)
     */
    excludeReservationRequired? : boolean;
    /**
     * Show intermediate stops that the journey passes but doesn't stop at
     */
    passing? : boolean;
    /**
     * directionsOnly only plans a google directions (walk/bike/car) advice
     */
    travelRequestType? : string;
    /**
     * EVA code of the station of the trips origin
     */
    originEVACode? : string;
    /**
     * EVA code of the station of the trips destination
     */
    destinationEVACode? : string;
    /**
     * EVA code of the station of the trips via point
     */
    viaEVACode? : string;
    /**
     * Changes the CHANGE_NOT_POSSIBLE status to CHANGE_COULD_BE_POSSIBLE if the traveler can walk twice as fast
     */
    shorterChange? : boolean;
    /**
     * Station code of the trips origin
     */
    fromStation? : string;
    /**
     * Station code of the trips destination
     */
    toStation? : string;
    /**
     * UIC code of the station of the trips origin
     */
    originUicCode? : string;
    /**
     * UIC code of the station of the trips destination
     */
    destinationUicCode? : String;
    /**
     * UIC code of the station of the trips via point
     */
    viaUicCode? : string;
    /**
     * Whether a bike space is required on the train(s).
     */
    bikeCarriageRequired? : boolean;
    /**
     * Station code of the trips via point
     */
    viaStation? : string;
    /**
     * Whether the provided time is the departure time.
     */
    departure? : boolean;
    /**
     * Format - int32. The minimum change time between transfers in minutes.
     */
    minimalChangeTime? : number;
}
