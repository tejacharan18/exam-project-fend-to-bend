import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http'
import {
  InsertedSuccess,
  Read,
  DepartmentDetails,
  UniqueConstraintError,
} from './dept';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });
  private url = 'http://localhost:3000/';

  Insert(
    Details: DepartmentDetails
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'department/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(dept_code:number): Observable<Read> {
    return this.http.get<Read>(`${this.url}stud/Read${dept_code}`);
  }
  Delete(dept_code: number): Observable<InsertedSuccess> {
    console.log(`${this.url}stud/Delete${dept_code}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}stud/Delete${dept_code}`
    );
  }
  Update(RollNumber: String, Details: DepartmentDetails) {
    return this.http.put(`${this.url}stud/Update${RollNumber}`, Details, {
      headers: this.headers,
    });
  }
}