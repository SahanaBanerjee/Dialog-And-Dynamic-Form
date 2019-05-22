import { Injectable } from '@angular/core';
import { QuestionBase } from './question-base';
import { QuestionTextbox } from './question-textbox';
import { QuestionDialog } from './question-dialog';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor() { }
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new QuestionTextbox({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new QuestionTextbox({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),
      new QuestionTextbox({
        key: 'Address',
        label: 'Add',
        type: 'text',
        order: 3
      })

    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
