import express from "express";
import db from "../models/index.js";

const router = express.Router();

router.get("/", (req, res) =>{
    db.products.find()
    .then(data=> {
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message
        })
    });
});

router.get("/:id", (req, res) => {
    db.products.findById(req.params.id)
    .then(data=> {
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message
        })
    })
});

router.post("/", (req,res) => {
    if(!req.body.name){
        res.status(400).send({
            message: "Name cannot be empty"
        });
        return;
    }
    const product = new db.products({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        sellerId: req.body.sellerId,
        images: req.body.images,
    });
    product.save()
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message
        });
    });
});

router.put("/:id", (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "Data to update cannot be empty"
        });
        return;
    }
    db.products.findByIdAndUpdate(req.params.id, req.body, {useFindAndModify: false})
    .then(data=>{
        if(!data){
            res.status(500).send({
                message: "Could not update product with id " + req.params.id
            });
            return;
        }else{
            res.send(data);
        }
    });
})

router.delete("/:id", (req, res) => {
    db.products.findByIdAndRemove(req.params.id)
    .then(data=>{
        if(!data){
            res.status(404).send({
                message: "Cannot delete product with id" + req.params.id
            });
            return;
        }
        else{
            res.send(data);
        }
    })
    .catch(err=>{
        res.status(500).send({
            message: "Cannot delete product with id" + req.params.id
        });
    });
});

export default router;