import { API } from "./api";
import { Station } from "./domain/station";

var api = new API("***REMOVED***");

api.getAllStations()
    .then((stations : Station[]) => {
        console.log("Got stations", stations);
    })
    .catch((err : any) => {
        console.error("Got error", err);
    });