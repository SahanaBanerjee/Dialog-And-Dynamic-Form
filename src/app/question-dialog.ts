import { MatDialog } from '@angular/material';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { QuestionBase } from './question-base';

export class QuestionDialog extends QuestionBase<String> {
    dialogResult: any;

    constructor(public dialog: MatDialog, options: {} = {}) {
        super(options);
     }
    openDialog() {
        console.log('Dialog');
        let dialogRef = this.dialog.open(MyDialogComponent, {
          width: '600px',
          data: 'Name'
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog closed: ${result}`);
          this.dialogResult = result;
        });
      }
}
