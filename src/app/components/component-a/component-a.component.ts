import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ComponentBComponent } from '../component-b/component-b.component';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {
   
  // ComponentA to Component B: Sharing Data via Input
  parentMessage = 'Message from componentA';
  messageOfChild:string = '';

  //  get Data with a Service Using BehaviorSubject
  message:string = '';

  @ViewChild(ComponentBComponent) child: any;
  
  constructor(private data: DataService) { }

  ngOnInit(): void {
    // adding data to subject
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  // Child to Parent: Sharing Data via ViewChild
  ngAfterViewInit() {
    this.messageOfChild = this.child.message
  }

  receiveMessage($event: string) {
    this.messageOfChild = $event
  }
  
}
