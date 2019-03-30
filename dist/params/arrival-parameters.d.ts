export interface ArrivalDepartureParameters {
    /**
     * Format - date-time (as date-time in RFC3339). return departures or arrivals starting at a given dateTime in ISO8601
     */
    dateTime?: string;
    /**
     * Format - int32. number of departures or arrivals to return
     */
    maxJourneys?: number;
    /**
     * language to use for translatable messages. Note that not all messages are translated.
     */
    lang?: string;
    /**
     * specify a station by NS abbreviation/code (e.g. ASD or UT)
     */
    station?: string;
    /**
     * specify a station by UIC code (84xxxxx)
     */
    uicCode?: string;
    /**
     * forces to use a certain source
     */
    source?: string;
}
