import { Component ,OnInit ,OnDestroy } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgForm } from '@angular/forms';
import {
  InsertedSuccess,
  StudentDetails,
  UniqueConstraintError,
} from '../tej';
import { Subscription } from 'rxjs';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  implements OnInit , OnDestroy {
 
  constructor(private Service:StudentService){}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: StudentDetails = {
  std_id:'' ,
  clg_code:0,
  dept_code:0,
  std_name:'',
  gender:'',
  dob:'',
  email:'',
  password:'',
  cpassword:'',
  std_ph_num:0,
  std_ft_num:0,
  join_year:0,
  dr_no:'',
  std_street:'',
  std_city:'',
  pincode:0,
  district:'',
  state:''

  };
  SuccessMsg = '';
  ErrorMsg = '';
  // Insert(Form:NgForm) {
  //   this.ErrorMsg = '';
  //   this.SuccessMsg = '';


  //   this.Subscription = this.Service.Insert(Form.value).subscribe({

  //     next: (Data: InsertedSuccess | UniqueConstraintError) => {
       
  //       if ('errorNum' in Data) {
  //         this.ErrorMsg = `${this.User.std_id} alredy Exists`;
  //       } else {

  //         this.SuccessMsg = `${this.User.std_id} Inserted Succesfully`;
  //         Form.reset();
  //       }
      
  //     },
  //     error: (Error) => {
  //       console.log(Error);
  //     },
  //   });
  //   //this the another syntax for the Subscribe Its advanced Handling everything
  // } 
  // Insert(Form:NgForm){
  //   console.log(Form.value);
  //   Form.reset();
  // }


  Insert(Form: NgForm) {
    console.log(Form.value);
    this.Subscription = this.Service.Insert(Form.value).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.std_id} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.std_id} Inserted Succesfully`;
          Form.reset();
        }
       
      }
    }
    )
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}