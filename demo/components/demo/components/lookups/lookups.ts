import {Component} from '@angular/core';
import {NGL_DIRECTIVES} from '../../../../../dist/ng-lightning';
import {HTTP_PROVIDERS, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'demo-lookups',
  directives: [NGL_DIRECTIVES],
  template: require('./lookups.html'),
  providers: [HTTP_PROVIDERS],
})
export class DemoLookups {

  private openAsyncMenu = false;

  constructor(public http: Http) {}

  lookup = (query: string): string[] => {
    const superheroes = ['Hulk', 'Flash', 'Superman', 'Batman', 'Spiderman', 'Iron Man', 'Thor', 'Wolverine', 'Deadpool'];
    if (!query) {
      return null;
    }

    return superheroes.filter((d: string) => d.toLowerCase().indexOf(query.toLowerCase()) > -1);
  }

  // This function is now safe to pass around
  lookupAsync = (query: string): Observable<any[]> => {
    if (!query) {
      return null;
    }

    return this.http.get(`//maps.googleapis.com/maps/api/geocode/json?address=${query}`)
      .map((res: Response) => res.json())
      .map((response: any) => response.results);
  }
}
