const router = require("express").Router();
// import { Router } from "express";
const userRouter = require("./user");

router.use("/user", userRouter);


module.exports = router;