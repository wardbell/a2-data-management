import {Injectable} from 'angular2/core';
import {Jsonp}      from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class WikiService {
  constructor(private jsonp: Jsonp) { }

  search(term: string) {

    let wikiUrl = 'http://en.wikipedia.org/w/api.php';

    let queryString =
      `?search=${term}&action=opensearch&format=json&callback=JSONP_CALLBACK`;

    return this.jsonp
      .get(wikiUrl + queryString)
      .map(request => <string[]> request.json()[1])
      .catch(this.handleError);
  }

  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
