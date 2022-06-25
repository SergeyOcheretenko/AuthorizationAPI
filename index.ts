'use strict';

import express, { Request, Response, NextFunction } from "express";
import { userRouter } from "./users/users.js";

const port = 8000;
const app = express();
app.use('/users', userRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(401).send(err.message);
});

app.listen(port, () => {
    console.log('Started');
});