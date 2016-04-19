// Intercepting Observable version
console.log ('Observable version');

import { Component, provide } from 'angular2/core';

import { HeroListComponent } from './hero-list.component';
import { HeroService }       from './hero.service';

// Http imports
import { HTTP_PROVIDERS }    from 'angular2/http';
import { XHRBackend }        from 'angular2/http';

// in-memory web api imports
import { InMemoryBackendService,
         SEED_DATA }         from 'a2-in-memory-web-api/core';
import { HeroData }          from '../hero-data';

// Request interception imports
import { InterceptingXHRBackend }   from './intercepting-xhrbackend.service';
import { Http, BaseRequestOptions } from 'angular2/http';

@Component({
  selector: 'my-toh',
  template: `
  <h1>Tour of Heroes</h1>
  <p><i>Look in console for request interception</i></p>
  <hero-list></hero-list>`,
  directives: [HeroListComponent],
  providers:  [
    HTTP_PROVIDERS,
    HeroService,

    // in-memory web api providers
    provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
    provide(SEED_DATA,  { useClass: HeroData }), // in-mem server data

    // Add intercept requests
    InterceptingXHRBackend,
    BaseRequestOptions,
    provide( Http,
      {useFactory: (backend: InterceptingXHRBackend, options: BaseRequestOptions) => {
        return new Http(backend, options);
      }, deps: [InterceptingXHRBackend, BaseRequestOptions]})
  ]
})
export class TohComponentInterceptor { }
