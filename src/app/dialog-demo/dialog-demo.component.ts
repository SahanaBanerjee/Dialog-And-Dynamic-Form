import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.css']
})
export class DialogDemoComponent implements OnInit {
  dialogResult: any;

// MatDialog is a service consumed to open a dialog

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
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
