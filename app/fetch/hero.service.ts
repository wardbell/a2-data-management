// ToH Fetch Version
import {Injectable}     from 'angular2/core';
import {Hero}           from './hero';


/// Fetch version
@Injectable()
export class HeroServiceFetch {
  name = 'Fetch Service';

  protected _heroesUrl = 'app/heroes.json';

  getHeroes (): Promise<Hero[]> {
    return fetch(this._heroesUrl)
                    .then(this.extractJson)
                    .then((body: any) => body.data)
                    .catch(this.handleError);
  }

  protected extractJson(response: Response) {
    if (response.status < 200 || response.status >= 300) {
      throw new Error('Bad response status: ' + response.status);
    }
    return response.json();
  }

  protected handleError (error: any) {
    let errMsg = error.message || 'Server error';
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

}




/// Http version
import {Http, Response as HttpResponse} from 'angular2/http';

@Injectable()
export class HeroServiceHttp extends HeroServiceFetch {
    constructor (private http: Http) { super(); }

  name = 'Http Service';

  getHeroes (): Promise<Hero[]> {
    return this.http.get(this._heroesUrl)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }

  protected extractData(response: HttpResponse) {
    if (response.status < 200 || response.status >= 300) {
      throw new Error('Bad response status: ' + response.status);
    }
    let body = response.json();
    return body.data || { };
  }
}
