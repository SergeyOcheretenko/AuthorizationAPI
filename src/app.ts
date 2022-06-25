import express, { Express } from 'express';
import { Server } from 'http';
import { ExeptionFilter } from './errors/exeption.filter.js';
import { LoggerService } from './logger/logger.service.js';
import { UserController } from './users/users.controller.js';

export class App {
    private app: Express;
    private server: Server;
    private port: number;
    private logger: LoggerService;
    private userController: UserController;
    private exeptionFilter: ExeptionFilter;

    constructor(
        logger: LoggerService, 
        userController: UserController,
        exeptionFilter: ExeptionFilter
    ) {
        this.app = express();
        this.port = 8000;
        this.logger = logger;
        this.userController = userController;
        this.exeptionFilter = exeptionFilter;
    }

    private useRoutes() {
        this.app.use('/users', this.userController.router);
    }

    private useExeptionFilters() {
        this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter));
    }

    public async init() {
        this.useRoutes();
        this.useExeptionFilters();
        this.server = this.app.listen(this.port);
        this.logger.log(`Server is running on http://localhost:${this.port}`)
    }
}