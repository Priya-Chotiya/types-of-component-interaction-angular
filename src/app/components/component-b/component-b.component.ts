import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent implements OnInit {

  constructor(private data: DataService) { }
  @Input() childMessage: string | undefined;
  
  parentMessage = 'Hi From component B'
  ngOnInit(): void {
    
  }

  // Child to Parent: Sharing Data via Output() and EventEmitter
  @Output() messageEvent = new EventEmitter<string>();
  sendMessage() {
    this.messageEvent.emit('this is an updated message from ComponentB')
  }

  // send data to subject
  newMessage() {
    this.data.changeMessage('Hello from Sibling')
    }
}
