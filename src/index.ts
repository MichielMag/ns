import { API } from "./api";
import { Station } from "./domain/station";

var api = new API("3b6df5c9a0824761a29206141bc3ac8d");

api.getAllStations()
    .then((stations : Station[]) => {
        console.log("Got stations", stations);
    })
    .catch((err : any) => {
        console.error("Got error", err);
    });