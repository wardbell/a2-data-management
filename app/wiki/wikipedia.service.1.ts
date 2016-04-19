import {Injectable} from 'angular2/core';
import {Jsonp}      from 'angular2/http';

@Injectable()
export class WikipediaService {
  constructor(private jsonp: Jsonp) { }

  search(term: string) {

    let wikiUrl = 'http://en.wikipedia.org/w/api.php';

    let queryString =
      `?search=${term}&action=opensearch&format=json&callback=JSONP_CALLBACK`;

    // TODO: Add error handling
    return this.jsonp
               .get(wikiUrl + queryString)
               .map(request => <string[]> request.json()[1]);
  }
}
