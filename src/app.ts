import express, { Express } from 'express';
import { Server } from 'http';
import { inject, injectable } from 'inversify';
import { IExeptionFilter } from './errors/exeption.filter.interface.js';
import { ILogger } from './logger/logger.interface.js';
import { TYPES } from './types.js';
import { UserController } from './users/users.controller.js';
import 'reflect-metadata';
import { IUserController } from './users/users.controller.interface.js';

@injectable()
export class App {
    app: Express;
    server: Server;
    port: number;

    constructor(
        @inject(TYPES.ILogger) private logger: ILogger,
        @inject(TYPES.IUserController) private userController: UserController,
        @inject(TYPES.IExeptionFilter) private exeptionFilter: IExeptionFilter   
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