import {Component, OnInit} from 'angular2/core';
import {Hero}              from './hero';
import {HeroService}       from './hero.service';

@Component({
  selector: 'hero-list',
  templateUrl: 'app/toh/hero-list.component.html',
  styles: ['.error {color:red;}']
})
export class HeroListComponent implements OnInit {

  constructor (private _heroService: HeroService) {}

  errorMessage: string;
  heroes: Hero[];

  ngOnInit() { this.getHeroes(); }


  getHeroes() {
    this._heroService.getHeroes()
                     .subscribe(
                       heroes => this.heroes = heroes,
                       error =>  this.errorMessage = <any>error);
  }


  addHero (name: string) {
    if (!name) {return; }
    this._heroService.addHero(name)
                     .subscribe(
                       hero  => this.heroes.push(hero),
                       error =>  this.errorMessage = <any>error);
  }

}
