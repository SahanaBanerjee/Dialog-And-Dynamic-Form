import { Component } from '@angular/core';
import { QuestionServiceService } from './question-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionServiceService]
})
export class AppComponent {
  title = 'Sahanas App';
  questions: any[];

  constructor(service: QuestionServiceService) {
    this.questions = service.getQuestions();
  }
}
