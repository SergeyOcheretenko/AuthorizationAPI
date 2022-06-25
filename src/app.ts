import express, { Express } from 'express';
import { Server } from 'http';
import { LoggerService } from './logger/logger.service.js';
import { UserController } from './users/users.controller.js';

export class App {
    private app: Express;
    private server: Server;
    private port: number;
    private logger: LoggerService;
    private userController: UserController;

    constructor(logger: LoggerService, userController: UserController) {
        this.app = express();
        this.port = 8000;
        this.logger = logger;
        this.userController = userController;
    }

    private useRoutes() {
        this.app.use('/users', this.userController.router);
    }

    private useExeptionFilters

    public async init() {
        this.useRoutes();
        this.useExeptionFilters();
        this.server = this.app.listen(this.port);
        this.logger.log(`Server is running on http://localhost:${this.port}`)
    }
}