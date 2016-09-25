import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'root',
  template: `<h3>Edit text input or use button to set to null string</h3>
             <input type="text" [(ngModel)]="myString">
             <h3>Text input's bound property value = <em>{{myString}}</em></h3>
             <button (click)="myString=''">Set Property Value to Empty String ("")</button>
             <br>
             <br>
             <input type="checkbox" [(ngModel)]="checked">
             <h3>checkbox's bound property value = <em>{{checked}}</em></h3>`,
  styleUrls: ['app.component.css']           
})
export class AppComponent {

  myString : string = "string content"
  
  checked : boolean = true;

}
