import { Component, OnInit } from '@angular/core';
import { MatcheService } from '../matches.service';

@Component({
  selector: 'app-update-matche',
  templateUrl: './update-matche.component.html',
  styleUrls: ['./update-matche.component.css']
})
export class UpdateMatcheComponent implements OnInit {

  matches;

  constructor(private matcheService: MatcheService) { }

  ngOnInit() {
  }

  loadMatches(matches) {
    console.log('This called update matches!!!!');
    // this.matcheService.updateResults((matches), (res) => {
    //   console.log('This called update matches!');
    //   this.matches = res;
    // });
  }

}
