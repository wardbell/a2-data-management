// Fetch Version
/* tslint:disable:no-unused-variable */

import { Component, OnInit } from 'angular2/core';
import { Hero}               from './hero';
import { HeroServiceFetch,
         HeroServiceHttp}    from './hero.service';

// ignore
let testImgSrc = 'http://demo.athemes.com/flato/wp-content/uploads/sites/16/2013/03/unicorn-wallpaper.jpg';


@Component({
  selector: 'hero-list',
  templateUrl: 'app/fetch/hero-list.component.html',
  styles: ['.error {color:red;}']
})
export class HeroListComponent implements OnInit {

  constructor (private _heroService: HeroServiceFetch) {}
  // constructor (private _heroService: HeroServiceHttp) {}

  errorMessage = '';
  heroes: Hero[];
  heroImg = '';
  status: number;
  service = '';

  ngOnInit() {
    this.service = this._heroService.name;
    this.getHeroImage();
    this.getHeroes();
    this.getStatus();
  }

  getStatus() {
    fetch('app/hero.png').then(res =>
    this.status = res.status);
  }

  getHeroImage() {
    fetch('app/hero.png')
    .then(res => res.blob())
    .then(imgBlob => {
      this.heroImg = URL.createObjectURL(imgBlob);
    });
  }

  getHeroes() {
    this._heroService.getHeroes()
                     .then(
                       heroes => this.heroes = heroes,
                       error =>  this.errorMessage = <any>error
                     );
  }
}

