import { MessageType } from "./enums";
export interface Message {
    endDate?: string;
    endTime?: string;
    externalId?: string;
    head?: string;
    lead?: string;
    startDate?: string;
    startTime?: string;
    text?: string;
    type?: MessageType;
}
