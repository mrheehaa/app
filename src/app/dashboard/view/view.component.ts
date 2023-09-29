import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  public messages:Array<any> = []

  constructor(private router:Router) {
    
   this.messages = JSON.parse(localStorage.getItem('messages')??'')
   this.sortByStatus()
  }


  public toggleMsgStatus(event:any,index:number) {
    this.messages[index].read = event 
    
    this.sortByStatus()
    this.save()
  }


public deleteMessage(i:number) {
  this.messages = this.messages.filter((message, index) => {
    if (index != i) {
      return message
    }
  } )
  this.save()
}
public editMessage(i:number) {
  let messageToEdit = this.messages[i]
  this.messages = this.messages.filter((message, index) => {
    if (index !- i) {
      return message
    }

  }) 
  this.save()
  localStorage.setItem('edit', JSON.stringify(messageToEdit))
  this.router.navigate(["/contact"])

}


  public sortByStatus(order:number = 0) {
    this.messages.sort((a, b)=>{
     if (order == 0) {
            if (a.read == false) {
        return -1
      }else {
        return 1
      }
     }else {
      
      if (a.read == true) {
        return -1
      }else {
        return 1
      }
     }

    })
    
  }
  protected save() {
    localStorage.setItem('messages', JSON.stringify(this.messages))
  }
}
