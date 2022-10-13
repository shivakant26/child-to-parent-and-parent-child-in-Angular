import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
data:any=[
  {name:"cits" , establishyear:2016 , location:"indore"},
  {name:"Lnct" , establishyear:2017 , location:"indore"},
  {name:"omniq" , establishyear:2016 , location:"indore"}
]  
@Input() name!:string
@Output() myevent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  passData(){
    this.myevent.emit(this.data);
  }
}
