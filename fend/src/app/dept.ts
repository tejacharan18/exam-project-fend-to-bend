export interface DepartmentDetails {
    dept_code: number;
    dept_name:string;
    dept_loc:string;
    dept_phn_no:string;

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