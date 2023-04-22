import { Component } from '@angular/core';
import {
  InsertedSuccess,
  StudentDetails,
  UniqueConstraintError,
}from '../tej';
import { Subscription } from 'rxjs';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent {
  canShowData:boolean=false;
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
  a=[];
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';

    //   this.Subscription = this.Service.Insert(this.User).subscribe(
    //     (data)=>{
    //       if(data){
    //         console.log(data);
    //       }
    //       else{
    //         console.log("Failed");
    //       }
    //     }
    //   )
    // }

    this.Subscription = this.Service.Insert(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.std_id} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.std_id} Inserted Succesfully`;
          
        }
      alert("inserted successfully");
      },
      error: (Error) => {
        console.log(Error);
      },
    });
    //this the another syntax for the Subscribe Its advanced Handling everything
  }
  Delete(){
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.Delete(this.User.std_id).subscribe(
      (data)=>{
        if(data){
          console.log(data);
          alert('Successfully deleted');

        }
        else{
          alert("failed");
        }
      }
    )
  }
  Read(){
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.Read(this.User.std_id).subscribe(
      (data:any)=>{
        if(data){
          this.a=data.Result[0];
          console.log(data);
          this.User = {
            std_id:this.a[0] ,
            clg_code:this.a[1],
            dept_code:this.a[2],
            std_name:this.a[3],
            gender:this.a[4],
            dob:this.a[5],
            email:this.a[6],
            password:this.a[7],
            cpassword:this.a[8],
            std_ph_num:this.a[9],
            std_ft_num:this.a[10],
            join_year:this.a[11],
            dr_no:this.a[12],
            std_street:this.a[13],
            std_city:this.a[14],
            pincode:this.a[15],
            district:this.a[16],
            state:this.a[17]
          
            };
       
       this.canShowData=true;

        }
        else{
         alert("Can't read");
        }
      }
    )
  }
  Update(){
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.Update(this.User.std_id,this.User).subscribe(
      (data:any)=>{
        if(data){
          this.a=data.Result[0];
          console.log(data);
        }
        else{
         alert("Can't read");
        }
      }
    )
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}

