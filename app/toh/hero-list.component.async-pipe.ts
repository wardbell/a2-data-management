import {Component, OnInit} from 'angular2/core';
import {Hero}              from './hero';
import {HeroService}       from './hero.service';
import {Observable}     from 'rxjs/Observable';

@Component({
  selector: 'hero-list',
  templateUrl: 'app/toh/hero-list.component.async-pipe.html',
  styles: ['.error {color:red;}']
})
export class HeroListComponent implements OnInit {

  constructor (private _heroService: HeroService) {}

  errorMessage: string;
  heroes: Observable<Hero[]>;

  getHeroes() {
    this.heroes = this._heroService.getHeroes()
                      .catch(err => this.errorMessage = err.message);
  }

  ngOnInit() { this.getHeroes(); }

}
