import { Injectable } from 'angular2/core';
import { Request, XHRBackend, XHRConnection } from 'angular2/http';

@Injectable()
export class InterceptingXHRBackend {

    constructor(private _xhrBackend: XHRBackend ) {  }

    // The only member of the public API
    createConnection(request: Request): XHRConnection {
      console.log('Using InterceptingXHRBackend');
      console.log(request); // Manipulate the Request here
      return this._xhrBackend.createConnection(request);
    }
}
