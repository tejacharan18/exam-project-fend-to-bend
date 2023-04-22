import { Component,OnInit ,OnDestroy  } from '@angular/core';
import {
  InsertedSuccess,
  StudentDetails,
  UniqueConstraintError,
}from '../tej';
import { Subscription } from 'rxjs';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  implements OnInit , OnDestroy {
  canShow:boolean=false;
  retrive:boolean=false;
  clicked:boolean=false;
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
    this.clicked=true;
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.Read(this.User.std_id).subscribe(
      (data:any)=>{
        if(data){
          this.canShow=true;
          this.a=data.Result[0];
          this.retrive=true;
         
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
            }
        else{
       alert("can't update");
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
        
          this.SuccessMsg = `${this.User.std_id} updated sucessfully`;
        }
        else{
          this.ErrorMsg = `${this.User.std_id} No record Found`;
        }

      }
    )
    

   
    console.log(this.User);
    this.canShow=false;
  }
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.canShow=false;
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}
