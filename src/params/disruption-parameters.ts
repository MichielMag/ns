
export interface DisruptionParameters
{
    /**
     * Type of the disruptions. If not present both will be returned.
     */
    type? : string;
    /**
     * Whether to only return disruptions within 2 hours of the request.
     */
    actual? : boolean;
    /**
     * The language in which to return the disruption messages, note that not all messages are translated.
     */
    lang? : string;
}
