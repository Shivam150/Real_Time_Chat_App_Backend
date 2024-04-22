const userRouter = require("express").Router();

const controllers = require("../controller").user;

userRouter.post("/signup", controllers.signUp);



module.exports = userRouter;
