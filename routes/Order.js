// imports
import express from "express";
import db from "../models/index.js";


// variables
const router = express.Router();

// ACTIONS

router.get("/", (req, res) =>{
    db.orders.find()
    .then(data=> {
        res.send(data);
    });
})

router.get("/:id", (req, res) => {
    db.orders.findById(req.params.id)
    .then(data=> {
        if(!data){
            res.status(404).send({"message": "Not found order with id: " + req.params.id});
        }
        else res.send(data);
    })
    .catch(err=>{
        console.log(err);
    })
});

router.post("/", (req, res) => {
    const order = new db.orders({
        orderDate: Date.now(),
        buyerId: req.body.buyerId,
        productId: req.body.productId,
        quantity: req.body.quantity,
    });

    order.save()
    .then(data=>res.send(data));
})

router.put("/:id", (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "Data to update cannot be empty"
        });
    }else{
        db.orders.findByIdAndUpdate(req.params.id, req.body, {
            useFindAndModify: false
        })
        .then(data=>{
            if(!data){
                res.status(400).send({
                    message: "Cannot update order with id" + req.params.id
                });
            }else{
                res.send({
                    message: "Order was updated succesfully"
                })
            }
        })
    }
});


// export
export default router;