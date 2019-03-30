import { NoteType } from './enums';
import { Link } from './links';
export interface Note {
    alternativeTransport?: boolean;
    key?: string;
    link?: Link;
    noteType?: NoteType;
    presentationRequired?: boolean;
    priority?: number;
    routeIdxFrom?: number;
    routeIdxTo?: number;
    value?: string;
}
