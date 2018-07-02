import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';

@Injectable()
export class MatcheService {

  matchesObserver = new BehaviorSubject([]);

  constructor(private _http: Http) { }

  dashboard(matches) {
    this._http.get('list').subscribe(
      (res) => {
        console.log('Success in getting matches: ', res.json());
        matches(res.json());
      },
      (err) => {
        console.log('Error in getting matches: ', err)
      }
    )
  }

  updateMatche(matche, callback) {
    this._http.put('/update/' + matche['_id'], {matche: matche} ).subscribe(
      (res) => {
        console.log('Success editing matche', res.json());
        callback(res.json())
      },
      (err) => {
        console.log('Something wrong editing matche', err);
      }
    )
  }

  updateResults(matches, callback) {
      this._http.post('matches', {matches: matches}).subscribe(
        (res) => {
          console.log('Success in loading matches: ', res.json());
          matches(res.json());
        },
        (err) => {
          console.log('Error in loading matches: ', err)
        }
      )
    }

}