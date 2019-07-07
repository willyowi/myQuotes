import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  @Output() isComplete = new EventEmitter<boolean>();//listens to button click to display results
//starting point for votes in two variables with 0 as default
    uvotes = 0;
    dvotes = 0;

    upVote(){
      this.uvotes = this.uvotes + 1;//adds one on mouse click
    }

    downVote(){
      this.dvotes = this.dvotes + 1;//adds one per mouse click
    }

  constructor() { }

  ngOnInit() {
  }

}

