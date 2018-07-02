import { Component, OnInit } from '@angular/core';
import { MatcheService } from '../matches.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit { 
  teamHome;
  teamAway;
  matches;
  nextTime;
  
  constructor(private matcheService: MatcheService) { this.teamHome = ''; this.teamAway = ''; this.nextTime = '';}

  ngOnInit() {
    this.getListOfMatches();
  }

  getListOfMatches() {
    this.matcheService.dashboard((res) => {
      this.matches = res;

      // var group  = this.matches[0].group;
      var offset = new Date().getTimezoneOffset();
      var tGame = false;

      for (var i=0;i<this.matches.length;i++) {
        var time = parseInt(this.matches[i].time)-(offset/60)-3;
        if (time > 12) {time = time - 12};
        this.matches[i].time = time+':'+'00';
        if (this.matches[i].scoreTeamHome || this.matches[i].scoreTeamHome ==  0)  {
          this.matches[i].done = true;
        } else if (!tGame){
          // this.nextGame = (this.matches[i].teamHome+' x '+this.matches[i].teamAway);
          this.teamHome = this.matches[i].teamHome;
          this.teamAway = this.matches[i].teamAway;
          this.nextTime = this.matches[i].date + ' - ' + this.matches[i].time;
          tGame = true;
          this.matches[i].done = false;
        }
        this.matches[i].date = this.matches[i].date.substr(0,6);
        // if (this.matches[i].group === group && i>0) {
        //   this.matches[i].group = '';
        // } else {
        //   group = this.matches[i].group;
        // } 
      }
    })
  }

  update(id) {
    this.matcheService.updateMatche((id), (res) => {
      console.log('This called update matches!');
      this.getListOfMatches();
    });
  }


}
