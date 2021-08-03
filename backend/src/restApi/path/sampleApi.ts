import * as express from "express";
import { protectedRoute, RequestExt } from "../main";

export const sampleApi = function (_app: express.Express, apiPath = "/api/sample") {
    _app.post(`${apiPath}/post`, async (req: RequestExt, res) => {
        // respond
        res.status(200).send({ success: true, message: "mypost OK" });
    })
        .post(`${apiPath}/post_protected`, protectedRoute, async (req: RequestExt, res) => {
            // respond
            res.status(200).send({ success: true, message: "mypost OK" });
        })
        .get(`${apiPath}/myget1`, async (req: RequestExt, res) => {
            // respond
            res.status(200).send({ success: true, message: "myget1 OK" });
        })
        .get(`${apiPath}/get_protected`, protectedRoute, async (req: RequestExt, res) => {
            // respond
            res.status(200).send({ success: true, message: "myget2 OK" });
        });
};
