import express from "express";
import db from "../models/index.js";

const router = express.Router();

router.get("/", (req, res) => {
    db.users.find()
    .then(data=>{
        res.send(data);
    });
});

router.post("/", (req, res) => {
    var user = new db.users({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role,
    });

    user.save()
    .then(data=>res.send(data));
});

export default router;