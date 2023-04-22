export interface StudentDetails {
  std_id:string;  
  clg_code:number;
  dept_code:number;
  std_name:string;
  gender:string;
  dob:string;
  email:string;
  password:string;
  cpassword:string;
  std_ph_num:number;
  std_ft_num:number;
  join_year:number;
  dr_no:string;
  std_street:string;
  std_city:string;
  pincode:number;
  district:string;
  state:string;
  }
  export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
  }
  export interface InsertedSuccess {
    lastRowid: String;
    rowsAffected: Number;
  }
  export interface Read {
      Result: [];
  }