import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  fname="Nikhil";
  lname:string;
  age:number;
  isEdit:boolean=false;
  //object type1
  address:{
    city:string;
    state:string
  }

  //object type2
  address1:Address1;

  //Array
  hobbies:string[];

  posts:Posts[];



  constructor(protected dataService:DataService) { 
    console.log("constructor ran");
  }

  ngOnInit() {
    console.log("ngOnInit ran");

    this.lname="Tripathi";
    this.age=23;

    this.address={
      city:'BLR',
      state:'KK'
    }

    this.address1={
      city:'BLR1',
      state:'KK1'
    }
    this.hobbies=['Cricket', 'Net surfiing'];

    this.dataService.getPost().subscribe((posts)=>{
      console.log(posts)
      this.posts=posts;
    })

  }

  toogleEdit(){
    this.isEdit=!this.isEdit;
  }

  clickMe(){
    this.hobbies.push('New Hobby')
  }

  addHobby(hobby){debugger
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    console.log(hobby)
    for(let i=0;i<this.hobbies.length;i++){
      if(this.hobbies[i]==hobby){
        this.hobbies.splice(i,1);
      }
    }
  }

}



interface Address1{
  city:string;
  state:string;
}


interface Posts{
  id:string,
  title:string,
  body:string,
  userId:number
}