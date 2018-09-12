import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

import { LoggerService } from '../logger/logger.service';

@Injectable()
export class SelectivePreloadingStrategy implements PreloadingStrategy {
    preloadedModules: string[] = [];

    constructor(private logger: LoggerService) { }
    preload(route: Route, load: () => Observable<any>): Observable<any> {
        if (route.data && route.data['preload']) {
            // add the route path to the preloaded module array
            this.preloadedModules.push(route.path);

            // log the route path to the console
            this.logger.log('Preloaded: ' + route.path);

            return load();
        } else {
            return of(null);
        }
    }
}
