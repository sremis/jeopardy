import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer-component',
  templateUrl: './answer-component.component.html',
  styleUrls: ['./answer-component.component.css']
})
export class AnswerComponentComponent implements OnInit {
  score = 0;
  constructor() { }

  @Input() questionInfo;

  @Output() somethingHappened = new EventEmitter();


  ngOnInit() {
  }

  submit(questionInfo, answer){
    if(answer == questionInfo.answer){
       this.score+=questionInfo.value;
    }
    else{
       this.score-=questionInfo.value;
       this.somethingHappened.emit(this.score);
    }

  }
  
}
