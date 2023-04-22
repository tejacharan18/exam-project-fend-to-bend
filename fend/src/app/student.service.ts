import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http'
import {
  InsertedSuccess,
  Read,
  StudentDetails,
  UniqueConstraintError,
} from './tej';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });
  private url = 'http://localhost:3000/';

  Insert(
    Details: StudentDetails
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'student/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(std_id: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}student/Read${std_id}`);
  }
  Delete(std_code: String): Observable<InsertedSuccess> {
    console.log(`${this.url}student/Delete${std_code}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}student/Delete${std_code}`
    );
  }
  Update(std_id: String, Details: StudentDetails) {
    return this.http.put(`${this.url}student/Update${std_id}`, Details, {
      headers: this.headers,
    });
  }
  Showoff(){};
}
