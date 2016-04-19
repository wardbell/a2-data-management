/* tslint:disable:no-unused-variable */
import { bootstrap }      from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';

// Add all operators to Observable
import 'rxjs/Rx';

import { FetchComponent }     from './fetch/fetch.component';
import { WikiComponent }      from './wiki/wiki.component';
import { WikiSmartComponent } from './wiki/wiki-smart.component';
import { TohComponent }       from './toh/toh.component';

import { TohComponentPromise }     from './toh/toh.component.promise';
import { TohComponentInterceptor } from './toh/toh.component.interceptor';


bootstrap(TohComponent, [HTTP_PROVIDERS]);
// bootstrap(TohComponentPromise, [HTTP_PROVIDERS]);
// bootstrap(TohComponentInterceptor, [HTTP_PROVIDERS]);

bootstrap(WikiComponent);
bootstrap(WikiSmartComponent);
bootstrap(FetchComponent);
