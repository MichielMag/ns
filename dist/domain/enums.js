"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommutingType;
(function (CommutingType) {
    CommutingType["Bike"] = "BIKE";
    CommutingType["Bus"] = "BUS";
    CommutingType["Car"] = "CAR";
    CommutingType["Ferry"] = "FERRY";
    CommutingType["Metro"] = "METRO";
    CommutingType["Subway"] = "SUBWAY";
    CommutingType["Taxi"] = "TAXI";
    CommutingType["Train"] = "TRAIN";
    CommutingType["Tram"] = "TRAM";
    CommutingType["Unknown"] = "UNKNOWN";
    CommutingType["Walk"] = "WALK";
})(CommutingType = exports.CommutingType || (exports.CommutingType = {}));
var TravelType;
(function (TravelType) {
    TravelType["Bike"] = "BIKE";
    TravelType["Car"] = "CAR";
    TravelType["Kiss"] = "KISS";
    TravelType["PublicTransit"] = "PUBLIC_TRANSIT";
    TravelType["Taxi"] = "TAXI";
    TravelType["Transfer"] = "TRANSFER";
    TravelType["Unknown"] = "UNKNOWN";
    TravelType["Walk"] = "WALK";
})(TravelType = exports.TravelType || (exports.TravelType = {}));
var StationType;
(function (StationType) {
    StationType["FacultatiefStation"] = "FACULTATIEF_STATION";
    StationType["IntercityStation"] = "INTERCITY_STATION";
    StationType["KnooppuntIntercityStation"] = "KNOOPPUNT_INTERCITY_STATION";
    StationType["KnooppuntSneltreinStation"] = "KNOOPPUNT_SNELTREIN_STATION";
    StationType["KnooppuntStoptreinStation"] = "KNOOPPUNT_STOPTREIN_STATION";
    StationType["MegaStation"] = "MEGA_STATION";
    StationType["SneltreinStation"] = "SNELTREIN_STATION";
    StationType["StoptreinStation"] = "STOPTREIN_STATION";
})(StationType = exports.StationType || (exports.StationType = {}));
var Richting;
(function (Richting) {
    Richting["Heen"] = "HEEN";
    Richting["HeenEnTerug"] = "HEEN_EN_TERUG";
})(Richting = exports.Richting || (exports.Richting = {}));
var VerstoringsType;
(function (VerstoringsType) {
    VerstoringsType["Evenement"] = "EVENEMENT";
    VerstoringsType["MeldingPrio1"] = "MELDING_PRIO_1";
    VerstoringsType["MeldingPrio2"] = "MELDING_PRIO_2";
    VerstoringsType["MeldingPrio3"] = "MELDING_PRIO_3";
    VerstoringsType["Storing"] = "STORING";
    VerstoringsType["Werkzaamheid"] = "WERKZAAMHEID";
})(VerstoringsType = exports.VerstoringsType || (exports.VerstoringsType = {}));
var CrowdForecast;
(function (CrowdForecast) {
    CrowdForecast["High"] = "HIGH";
    CrowdForecast["Low"] = "LOW";
    CrowdForecast["Medium"] = "MEDIUM";
    CrowdForecast["Unknown"] = "UNKNOWN";
})(CrowdForecast = exports.CrowdForecast || (exports.CrowdForecast = {}));
var DiscountType;
(function (DiscountType) {
    DiscountType["Discount20_Percent"] = "DISCOUNT_20_PERCENT";
    DiscountType["Discount40_Percent"] = "DISCOUNT_40_PERCENT";
    DiscountType["FipDiscount"] = "FIP_DISCOUNT";
    DiscountType["NoCharge"] = "NO_CHARGE";
    DiscountType["NoDiscount"] = "NO_DISCOUNT";
})(DiscountType = exports.DiscountType || (exports.DiscountType = {}));
var ProductType;
(function (ProductType) {
    ProductType["AltijdVoordeel"] = "ALTIJD_VOORDEEL";
    ProductType["AltijdVrij"] = "ALTIJD_VRIJ";
    ProductType["BusinessCardTrajectVrijJaar"] = "BUSINESS_CARD_TRAJECT_VRIJ_JAAR";
    ProductType["Businesscard"] = "BUSINESSCARD";
    ProductType["BusinesscardDAL"] = "BUSINESSCARD_DAL";
    ProductType["DALVoordeel"] = "DAL_VOORDEEL";
    ProductType["DALVrij"] = "DAL_VRIJ";
    ProductType["EticketEnkeleReis"] = "ETICKET_ENKELE_REIS";
    ProductType["EticketRetour"] = "ETICKET_RETOUR";
    ProductType["NSI"] = "NSI";
    ProductType["OvchipkaartEnkeleReis"] = "OVCHIPKAART_ENKELE_REIS";
    ProductType["OvchipkaartRetour"] = "OVCHIPKAART_RETOUR";
    ProductType["Railrunner"] = "RAILRUNNER";
    ProductType["Samenreiskorting"] = "SAMENREISKORTING";
    ProductType["StudentWeek"] = "STUDENT_WEEK";
    ProductType["StudentWeekend"] = "STUDENT_WEEKEND";
    ProductType["TrajectVrij"] = "TRAJECT_VRIJ";
    ProductType["TrajectVrijJaar"] = "TRAJECT_VRIJ_JAAR";
    ProductType["TrajectVrijMaand"] = "TRAJECT_VRIJ_MAAND";
    ProductType["Vdu"] = "VDU";
    ProductType["WeekendVrij"] = "WEEKEND_VRIJ";
})(ProductType = exports.ProductType || (exports.ProductType = {}));
var TravelClass;
(function (TravelClass) {
    TravelClass["FirstClass"] = "FIRST_CLASS";
    TravelClass["SecondClass"] = "SECOND_CLASS";
})(TravelClass = exports.TravelClass || (exports.TravelClass = {}));
var Status;
(function (Status) {
    Status["Additional"] = "ADDITIONAL";
    Status["AlternativeTransport"] = "ALTERNATIVE_TRANSPORT";
    Status["Cancelled"] = "CANCELLED";
    Status["ChangeCouldBePossible"] = "CHANGE_COULD_BE_POSSIBLE";
    Status["ChangeNotPossible"] = "CHANGE_NOT_POSSIBLE";
    Status["Disruption"] = "DISRUPTION";
    Status["Maintenance"] = "MAINTENANCE";
    Status["Normal"] = "NORMAL";
    Status["Replacement"] = "REPLACEMENT";
    Status["Special"] = "SPECIAL";
})(Status = exports.Status || (exports.Status = {}));
//Type4
var AdviceSource;
(function (AdviceSource) {
    AdviceSource["Google"] = "GOOGLE";
    AdviceSource["NS"] = "NS";
    AdviceSource["NSAccessible"] = "NS_ACCESSIBLE";
    AdviceSource["Negentwee"] = "NEGENTWEE";
    AdviceSource["Pas"] = "PAS";
})(AdviceSource = exports.AdviceSource || (exports.AdviceSource = {}));
var CheckinStatus;
(function (CheckinStatus) {
    CheckinStatus["Checkin"] = "CHECKIN";
    CheckinStatus["Checkout"] = "CHECKOUT";
    CheckinStatus["Detour"] = "DETOUR";
    CheckinStatus["Nothing"] = "NOTHING";
    CheckinStatus["Overcheck"] = "OVERCHECK";
    CheckinStatus["RequiredCheckOutIn"] = "REQUIRED_CHECK_OUT_IN";
})(CheckinStatus = exports.CheckinStatus || (exports.CheckinStatus = {}));
var ExitSide;
(function (ExitSide) {
    ExitSide["Left"] = "LEFT";
    ExitSide["Right"] = "RIGHT";
    ExitSide["Unknown"] = "UNKNOWN";
})(ExitSide = exports.ExitSide || (exports.ExitSide = {}));
var NoteType;
(function (NoteType) {
    NoteType["Attribute"] = "ATTRIBUTE";
    NoteType["Hint"] = "HINT";
    NoteType["Infotext"] = "INFOTEXT";
    NoteType["Realtime"] = "REALTIME";
    NoteType["Ticket"] = "TICKET";
    NoteType["Unknown"] = "UNKNOWN";
})(NoteType = exports.NoteType || (exports.NoteType = {}));
//Type3
var LocationType;
(function (LocationType) {
    LocationType["Address"] = "ADDRESS";
    LocationType["PointOfInterest"] = "POINT_OF_INTEREST";
    LocationType["Station"] = "STATION";
})(LocationType = exports.LocationType || (exports.LocationType = {}));
//Type
var ContentType;
(function (ContentType) {
    ContentType["Btm"] = "BTM";
    ContentType["TrainJSON"] = "TRAIN_JSON";
    ContentType["TrainXML"] = "TRAIN_XML";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
var JourneyStatus;
(function (JourneyStatus) {
    JourneyStatus["Additional"] = "ADDITIONAL";
    JourneyStatus["Planned"] = "PLANNED";
    JourneyStatus["Replacement"] = "REPLACEMENT";
    JourneyStatus["Special"] = "SPECIAL";
})(JourneyStatus = exports.JourneyStatus || (exports.JourneyStatus = {}));
// Type1
var MessageType;
(function (MessageType) {
    MessageType["Disruption"] = "DISRUPTION";
    MessageType["Maintenance"] = "MAINTENANCE";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
