import { API } from "./api";
import { Station } from "./domain/station";
import { Verstoring } from "./domain/verstoring";
import { ArrivalBoard } from "./domain/arrival-board";

var api = new API("3b6df5c9a0824761a29206141bc3ac8d");

api.getAllStations()
    .then((stations : Station[]) => {
        console.log("Got stations", stations);
        return api.getDisruptions({
            actual: true
        });
    })
    .then((disruptions : Verstoring) => {
        console.log("Got disruptions", disruptions);
        return api.getArrivals({
            dateTime: '2019-03-29 23:00:00',
            uicCode: '8400147'
        })
    })
    .then((arrivals : ArrivalBoard) => {
        console.log("Got Arrivals", arrivals);
    })
    .catch((err : any) => {
        console.error("Got error", err);
    });