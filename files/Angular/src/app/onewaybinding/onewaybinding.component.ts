import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onewaybinding',
  templateUrl: './onewaybinding.component.html',
  styleUrls: ['./onewaybinding.component.css']
})
export class OnewaybindingComponent implements OnInit {
  work = "project"
  data: any;
  isValid=false
  constructor() { }

  ngOnInit(): void {
  }

  // print(event){
  //    this.data=event.target.value
  //    if(this.data==1){
  //     console.log("Data 1");
  //    }
  //    else if(this.data==2){
  //     console.log("Data 2");
  //    }
  //    else if (!this.data){
  //     console.log("Data not Found");
  //    }
  //    else{
  //     console.log("something went wrong!");
  //    }
  //  }

//how div tag disable in angular?






  print(event) {
    this.data = event.target.value
    switch (true)
     {
      // case this.data=="0":
      //   console.log("zero");
      //   this.isValid==true
      //   break;
      // case this.data=="1":
      //   console.log("one");
      //   this.isValid==true
      //   break
      case this.data>0:
        console.log('Data found');
        this.isValid==true
        break
      case !this.data:
        console.log("Data not found");  
        break 
      // default:   
      //   console.log('something went wrong')
      //   this.isValid==false
      //   break;
    }   
  }

}
