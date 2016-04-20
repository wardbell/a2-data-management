import {Component}        from 'angular2/core';
import {JSONP_PROVIDERS}  from 'angular2/http';
import {Observable}       from 'rxjs/Observable';

import {Subject}          from 'rxjs/Subject';

import {WikiSmartService} from './wiki-smart.service';

@Component({
  selector: 'my-wiki-smart',
  template: `
    <h1>Smarter Wikipedia Demo</h1>
    <p><i>Fetches when typing stops</i></p>

    <input #term (keyup)="search(term.value)"/>

    <ul>
      <li *ngFor="#item of items | async">{{item}}</li>
    </ul>
  `,
  providers: [JSONP_PROVIDERS, WikiSmartService]
})
export class WikiSmartComponent {

  constructor (private _wikipediaService: WikiSmartService) { }

  private _searchTermStream = new Subject<string>();

  // send the observable directly to the template!
  items: Observable<string[]> = this._searchTermStream
    .debounceTime(300)
    .distinctUntilChanged()
    .switchMap((term: string) => this._wikipediaService.search(term));

  search(term: string) { this._searchTermStream.next(term); }
}
