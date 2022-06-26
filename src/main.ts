import { Container, ContainerModule, interfaces } from "inversify";
import { App } from "./app.js";
import { ExeptionFilter } from "./errors/exeption.filter.js";
import { ILogger } from "./logger/logger.interface.js";
import { LoggerService } from "./logger/logger.service.js";
import { TYPES } from "./types.js";
import { IExeptionFilter } from "./errors/exeption.filter.interface.js"; 
import { UserController } from "./users/users.controller.js";
import { IUserController } from "./users/users.controller.interface.js";

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
    bind<ILogger>(TYPES.ILogger).to(LoggerService);
    bind<IExeptionFilter>(TYPES.IExeptionFilter).to(ExeptionFilter);
    bind<IUserController>(TYPES.IUserController).to(UserController);
    bind<App>(TYPES.Application).to(App);
});

function bootstrap() {
    const appContainer = new Container();
    appContainer.load(appBindings);
    const app = appContainer.get<App>(TYPES.Application);
    app.init(); 
    return { appContainer, app }
}


export const { app, appContainer } = bootstrap();