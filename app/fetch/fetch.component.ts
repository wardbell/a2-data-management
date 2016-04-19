import { Component }         from 'angular2/core';

import { HeroListComponent } from './hero-list.component';
import { HeroServiceFetch,
         HeroServiceHttp}    from './hero.service';

// For the HTTP version
import { HTTP_PROVIDERS }    from 'angular2/http';

@Component({
  selector: 'my-fetch',
  template: `
  <h1>Fetch Demo</h1>
  <hero-list></hero-list>`,
  directives: [HeroListComponent],
  providers:  [
    HTTP_PROVIDERS, // delete HTTP_PROVIDERS
    HeroServiceFetch,
    HeroServiceHttp
  ]
})
export class FetchComponent { }

