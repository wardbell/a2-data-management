// Promise Version
console.log ('Promise version');

import { Component, provide } from 'angular2/core';

import { HeroListComponent } from './hero-list.component.promise';
import { HeroService }       from './hero.service.promise';

// Http imports
import { HTTP_PROVIDERS }    from 'angular2/http';
import { XHRBackend }        from 'angular2/http';

// in-memory web api imports
import { InMemoryBackendService,
         SEED_DATA }         from 'a2-in-memory-web-api/core';
import { HeroData }          from '../hero-data';


@Component({
  selector: 'my-toh',
  template: `
  <h1>Tour of Heroes</h1>
  <hero-list></hero-list>`,
  directives: [HeroListComponent],
  providers:  [
    HTTP_PROVIDERS,
    HeroService,

    // in-memory web api providers
    provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
    provide(SEED_DATA,  { useClass: HeroData }) // in-mem server data

  ]
})
export class TohComponentPromise { }
