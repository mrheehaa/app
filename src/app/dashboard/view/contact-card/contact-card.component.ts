import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {

@Input('c-name') name:string = ''
@Input('c-email') email:string = ''
@Input('c-message') message:string = ''
@Input('c-read') read:boolean = false
@Output('msg-read') msgRead = new EventEmitter<boolean>()
@Output('delete-me') deleteMe = new EventEmitter()
@Output('edit') edit = new EventEmitter()

public readMessage() {
  this.msgRead.emit(true)
}
public deleteMessage() {
  this.deleteMe.emit()
}
public editMessage() {
  this.edit.emit()
}


}
