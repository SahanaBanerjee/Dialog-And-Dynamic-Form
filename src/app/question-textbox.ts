import { QuestionBase } from './question-base';

export class QuestionTextbox  extends QuestionBase<String>{

    controlType = 'textbox';
    type: string;
    constructor(options: {} = {}) {
      super(options);
      this.type = options['type'] || '';
    }
}
