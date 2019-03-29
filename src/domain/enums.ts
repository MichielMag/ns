export enum CommutingType {
    Bike = "BIKE",
    Bus = "BUS",
    Car = "CAR",
    Ferry = "FERRY",
    Metro = "METRO",
    Subway = "SUBWAY",
    Taxi = "TAXI",
    Train = "TRAIN",
    Tram = "TRAM",
    Unknown = "UNKNOWN",
    Walk = "WALK",
}
export enum TravelType {
    Bike = "BIKE",
    Car = "CAR",
    Kiss = "KISS",
    PublicTransit = "PUBLIC_TRANSIT",
    Taxi = "TAXI",
    Transfer = "TRANSFER",
    Unknown = "UNKNOWN",
    Walk = "WALK",
}

export enum StationType {
    FacultatiefStation = "FACULTATIEF_STATION",
    IntercityStation = "INTERCITY_STATION",
    KnooppuntIntercityStation = "KNOOPPUNT_INTERCITY_STATION",
    KnooppuntSneltreinStation = "KNOOPPUNT_SNELTREIN_STATION",
    KnooppuntStoptreinStation = "KNOOPPUNT_STOPTREIN_STATION",
    MegaStation = "MEGA_STATION",
    SneltreinStation = "SNELTREIN_STATION",
    StoptreinStation = "STOPTREIN_STATION",
}

export enum Richting {
    Heen = "HEEN",
    HeenEnTerug = "HEEN_EN_TERUG",
}

export enum VerstoringsType {
    Evenement = "EVENEMENT",
    MeldingPrio1 = "MELDING_PRIO_1",
    MeldingPrio2 = "MELDING_PRIO_2",
    MeldingPrio3 = "MELDING_PRIO_3",
    Storing = "STORING",
    Werkzaamheid = "WERKZAAMHEID",
}

export enum CrowdForecast {
    High = "HIGH",
    Low = "LOW",
    Medium = "MEDIUM",
    Unknown = "UNKNOWN",
}

export enum DiscountType {
    Discount20_Percent = "DISCOUNT_20_PERCENT",
    Discount40_Percent = "DISCOUNT_40_PERCENT",
    FipDiscount = "FIP_DISCOUNT",
    NoCharge = "NO_CHARGE",
    NoDiscount = "NO_DISCOUNT",
}

export enum ProductType {
    AltijdVoordeel = "ALTIJD_VOORDEEL",
    AltijdVrij = "ALTIJD_VRIJ",
    BusinessCardTrajectVrijJaar = "BUSINESS_CARD_TRAJECT_VRIJ_JAAR",
    Businesscard = "BUSINESSCARD",
    BusinesscardDAL = "BUSINESSCARD_DAL",
    DALVoordeel = "DAL_VOORDEEL",
    DALVrij = "DAL_VRIJ",
    EticketEnkeleReis = "ETICKET_ENKELE_REIS",
    EticketRetour = "ETICKET_RETOUR",
    NSI = "NSI",
    OvchipkaartEnkeleReis = "OVCHIPKAART_ENKELE_REIS",
    OvchipkaartRetour = "OVCHIPKAART_RETOUR",
    Railrunner = "RAILRUNNER",
    Samenreiskorting = "SAMENREISKORTING",
    StudentWeek = "STUDENT_WEEK",
    StudentWeekend = "STUDENT_WEEKEND",
    TrajectVrij = "TRAJECT_VRIJ",
    TrajectVrijJaar = "TRAJECT_VRIJ_JAAR",
    TrajectVrijMaand = "TRAJECT_VRIJ_MAAND",
    Vdu = "VDU",
    WeekendVrij = "WEEKEND_VRIJ",
}

export enum TravelClass {
    FirstClass = "FIRST_CLASS",
    SecondClass = "SECOND_CLASS",
}

export enum Status {
    Additional = "ADDITIONAL",
    AlternativeTransport = "ALTERNATIVE_TRANSPORT",
    Cancelled = "CANCELLED",
    ChangeCouldBePossible = "CHANGE_COULD_BE_POSSIBLE",
    ChangeNotPossible = "CHANGE_NOT_POSSIBLE",
    Disruption = "DISRUPTION",
    Maintenance = "MAINTENANCE",
    Normal = "NORMAL",
    Replacement = "REPLACEMENT",
    Special = "SPECIAL",
}

//Type4
export enum AdviceSource {
    Google = "GOOGLE",
    NS = "NS",
    NSAccessible = "NS_ACCESSIBLE",
    Negentwee = "NEGENTWEE",
    Pas = "PAS",
}

export enum CheckinStatus {
    Checkin = "CHECKIN",
    Checkout = "CHECKOUT",
    Detour = "DETOUR",
    Nothing = "NOTHING",
    Overcheck = "OVERCHECK",
    RequiredCheckOutIn = "REQUIRED_CHECK_OUT_IN",
}

export enum ExitSide {
    Left = "LEFT",
    Right = "RIGHT",
    Unknown = "UNKNOWN",
}

export enum NoteType {
    Attribute = "ATTRIBUTE",
    Hint = "HINT",
    Infotext = "INFOTEXT",
    Realtime = "REALTIME",
    Ticket = "TICKET",
    Unknown = "UNKNOWN",
}

//Type3
export enum LocationType {
    Address = "ADDRESS",
    PointOfInterest = "POINT_OF_INTEREST",
    Station = "STATION",
}

//Type
export enum ContentType {
    Btm = "BTM",
    TrainJSON = "TRAIN_JSON",
    TrainXML = "TRAIN_XML",
}

export enum JourneyStatus {
    Additional = "ADDITIONAL",
    Planned = "PLANNED",
    Replacement = "REPLACEMENT",
    Special = "SPECIAL",
}

// Type1
export enum MessageType {
    Disruption = "DISRUPTION",
    Maintenance = "MAINTENANCE",
}