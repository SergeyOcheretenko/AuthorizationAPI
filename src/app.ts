import express, { Express } from 'express';
import { userRouter } from './users/users.js';
import { Server } from 'http';

export class App {
    app: Express;
    server: Server;
    port: number;

    constructor() {
        this.app = express();
        this.port = 8000;
    }

    private useRoutes() {
        this.app.use('users', userRouter);
    }

    public async init() {
        this.useRoutes();
        this.server = this.app.listen(this.port);
        console.log(`Server is running on http://localhost:${this.port}`)
    }
}